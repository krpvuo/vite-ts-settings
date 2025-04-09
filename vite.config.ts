import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  // Выводим в консоль для проверки (только в dev)
  if (mode === "development") {
    console.log("Loaded ENV:", {
      appName: env.VITE_APP_NAME,
      apiUrl: env.VITE_API_URL,
    });
  }

  return {
    // Плагины
    plugins: [
      react(), // Официальный плагин для React (включает Fast Refresh)
      svgr(), // Плагин для svg
    ],

    // Настройки разрешения путей
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // Алиас для удобных импортов
        "~": path.resolve(__dirname, "./public"), // Алиас для статики
      },
    },

    // Настройки dev-сервера
    server: {
      port: 3000, // Порт разработки
      open: true, // Автооткрытие в браузере
    },

    // Настройки production-сборки
    build: {
      outDir: "dist", // Папка для финальной сборки
      emptyOutDir: true, // Очищать папку перед сборкой
      sourcemap: "hidden", // Отключить sourcemap (можно включить для отладки)
    },
  };
});
