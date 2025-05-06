"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <body>
      {children}
    </body>
  );
}
