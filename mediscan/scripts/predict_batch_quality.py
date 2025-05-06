import sys
import json
import numpy as np
import pandas as pd
from joblib import load
import os

def predict_batch_quality(batch_data):
    try:
        # Load the model
        model_path = r"C:\\Users\\rudra\\Downloads\\Drug-Quality-Control-main\\Drug-Quality-Control-main\\Application\\medicine_quality_models2.joblib"
        model_data = load(model_path)
        
        # Extract components from the loaded model
        models = model_data['models']
        scaler = model_data['scaler']
        feature_columns = model_data['feature_columns']
        target_columns = model_data['target_columns']
        
        # Create a dataframe from the input data
        input_df = pd.DataFrame([batch_data])
        
        # Handle categorical features
        for col in feature_columns:
            if col in input_df.columns and input_df[col].dtype == 'object':
                input_df[col] = pd.factorize(input_df[col])[0]
        
        # Create engineered features
        if 'api_ps01' in input_df.columns and 'api_ps09' in input_df.columns:
            input_df['api_ps_ratio'] = input_df['api_ps01'] / (input_df['api_ps09'] + 0.001)
        
        water_cols = ['api_water', 'lactose_water', 'smcc_water', 'starch_water']
        available_water_cols = [col for col in water_cols if col in input_df.columns]
        if available_water_cols:
            input_df['total_water_content'] = input_df[available_water_cols].sum(axis=1)
        
        if 'api_total_impurities' in input_df.columns and 'api_content' in input_df.columns:
            input_df['api_impurity_ratio'] = input_df['api_total_impurities'] / (input_df['api_content'] + 0.001)
        
        # Get only the features used by the model
        features = [col for col in feature_columns if col in input_df.columns]
        X = input_df[features].values
        
        # Scale the features
        X_scaled = scaler.transform(X)
        
        # Make predictions for each target
        predictions = {}
        for i, target in enumerate(target_columns):
            pred = models[i].predict(X_scaled)[0]
            predictions[target] = float(pred)  # Convert numpy float to regular float for JSON serialization
        
        return predictions
    
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    # Read input data from the command line argument (JSON file path)
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No input file provided"}))
        sys.exit(1)
    
    input_file = sys.argv[1]
    
    with open(input_file, 'r') as f:
        batch_data = json.load(f)
    
    # Make prediction
    result = predict_batch_quality(batch_data)
    
    # Print the result as JSON (will be captured by the Node.js process)
    print(json.dumps(result))