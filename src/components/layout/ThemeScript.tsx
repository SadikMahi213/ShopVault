"use client";

import { useThemeStore } from "@/store";
import { useEffect } from "react";

// Inline script to prevent flash
const script = `
(function() {
  try {
    var theme = JSON.parse(localStorage.getItem('theme-preference') || '{}');
    if (theme.state && theme.state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export function ThemeInitializer() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return null;
}
