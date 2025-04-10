// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  // Базовые конфигурации
  js.configs.recommended, // Базовые правила ESLint
  ...tseslint.configs.recommended, // Рекомендованные правила TypeScript

  // Основные настройки
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin, // Плагин для TypeScript
      react: eslintReact, // Основные правила React
      "react-hooks": eslintReactHooks, // Правила для React Hooks
      "react-refresh": eslintReactRefresh, // Поддержка Fast Refresh
      prettier: prettierPlugin, // Интеграция с Prettier
      "jsx-a11y": eslintJsxA11y, // Добавляем плагин для доступности
    },
    languageOptions: {
      globals: {
        ...globals.node, // Глобальные переменные Node.js
        ...globals.browser, // Глобальные переменные браузера
        ...globals.es2020, // Глобальные переменные ES2020
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json"], // Используем оба конфига TS
        ecmaFeatures: {
          jsx: true, // Включаем поддержку JSX
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Автоопределение версии React
      },
    },
  },

  // Специфичные правила для TS/TSX файлов
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Интеграция с Prettier
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,

      // React-специфичные правила
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Разрешаем экспорт констант
      ],
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" }, // Запрет ненужных фигурных скобок
      ],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" }, // Предпочитаем стрелочные функции
      ],
      "react/self-closing-comp": [
        // Автозакрывающиеся компоненты
        "error",
        { component: true, html: true },
      ],

      // Общие правила качества кода
      "prefer-const": "error", // Предпочитаем const
      "max-lines": ["warn", { max: 124 }], // Лимит строк в файле
      "max-params": ["error", 3], // Макс 3 параметра в функции

      // Правила accessibility (a11y)
      "jsx-a11y/alt-text": "error", // Все изображения должны иметь alt-текст
      "jsx-a11y/anchor-is-valid": "warn", // Проверка валидности якорных тегов
      "jsx-a11y/no-onchange": "warn", // Запрещаем использование onChange в некоторых контекстах
      "jsx-a11y/no-noninteractive-element-interactions": [
        //Запрещает использование взаимодействий с неинтерактивными элементами.
        "warn",
        {
          handlers: ["onClick", "onKeyDown", "onKeyUp", "onPress"],
        },
      ],
    },
  },

  // Игнорируемые файлы/папки
  {
    ignores: [
      "dist",
      "node_modules",
      "coverage",
      "eslint.config.js", // Игнорируем сам конфиг
    ],
  }
);
