import React, { useState } from "react";
import {
  Code,
  Star,
} from "lucide-react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center">
        <Code className="w-16 h-16 mx-auto text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold mb-4">WebCreator Pro</h1>
        <p className="text-gray-600 mb-6">
          Le fichier React fonctionne correctement ✅
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
        >
          Cliqué {count} fois
        </button>
      </div>
    </div>
  );
}
