// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Definindo a porta para o servidor de desenvolvimento
  devServer: {
    port: 4000,  // Defina a porta que você deseja
    host: '0.0.0.0'  // Permite acessar a aplicação de outras máquinas na rede local (opcional)
  },

  // Data de compatibilidade (quando a compatibilidade foi verificada)
  compatibilityDate: '2025-07-15',

  // Desabilitando as ferramentas de desenvolvimento (DevTools)
  devtools: { enabled: false },

  // Definindo o CSS global (fontawesome no caso)
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Se você estiver utilizando o TailwindCSS (comentado aqui)
  // modules: ['@nuxtjs/tailwindcss'],
})
