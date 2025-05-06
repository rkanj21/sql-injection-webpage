import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execPromise = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const batchData = await request.json();
    
    // Save the input data to a temporary JSON file
    const tempInputPath = path.join(process.cwd(), 'temp-input.json');
    fs.writeFileSync(tempInputPath, JSON.stringify(batchData));
    
    // Path to your Python script that will use the model
    const pythonScriptPath = path.join(process.cwd(), 'scripts', 'predict_batch_quality.py');
    
    // Execute the Python script with the input file path
    const { stdout, stderr } = await execPromise(
      `python "${pythonScriptPath}" "${tempInputPath}"`
    );
    
    if (stderr) {
      console.error('Python script error:', stderr);
      return NextResponse.json({ error: 'Error processing batch data' }, { status: 500 });
    }
    
    // Parse the results from the Python script
    const results = JSON.parse(stdout);
    
    // Clean up the temporary file
    fs.unlinkSync(tempInputPath);
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to process batch validation request' }, 
      { status: 500 }
    );
  }
}