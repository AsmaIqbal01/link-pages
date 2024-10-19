'use client';
import { useState, useEffect } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds before setting loading to false
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        // Display a loading status bar while loading is true
        <div className="loading-bar border border-gray-400 rounded p-2">Loading...</div>
      ) : (
        // Render the content of the Blog page when loading is false
        <div className="text-amber-950 text-2xl border border-gray-400 rounded p-4">
          <h1>Blog Page rendered after some loading!!</h1>
        </div>
      )}
    </div>
  );
}
