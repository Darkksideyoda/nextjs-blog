'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

function ExampleThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <span>Current Theme:{theme}</span>
      <button className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" onClick={() => setTheme('light')}>
        Light
      </button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('retro')}>Retro</button>
    </div>
  );
}

export default ExampleThemeSwitcher;
