<template>
  <div class="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center items-center gap-3">
        <div class="bg-brand-100 p-2 rounded-xl">
          <i class="fa-solid fa-paw text-3xl text-brand-600"></i>
        </div>
        <h2 class="text-center text-3xl font-bold tracking-tight text-slate-900">AnimalHotels</h2>
      </div>
      <h2 class="mt-6 text-center text-xl font-medium tracking-tight text-slate-600">Bem-vindo de volta</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-lg sm:rounded-2xl sm:px-10 border border-slate-100">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700">Email</label>
            <div class="mt-1">
              <input 
                id="email" 
                v-model="email"
                name="email" 
                type="email" 
                autocomplete="email" 
                required 
                class="block w-full appearance-none rounded-lg border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-brand-500 sm:text-sm"
              >
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-slate-700">Senha</label>
            <div class="mt-1">
              <input 
                id="password" 
                v-model="password"
                name="password" 
                type="password" 
                autocomplete="current-password" 
                required 
                class="block w-full appearance-none rounded-lg border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-brand-500 sm:text-sm"
              >
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                id="remember-me" 
                v-model="rememberMe"
                name="remember-me" 
                type="checkbox" 
                class="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              >
              <label for="remember-me" class="ml-2 block text-sm text-slate-900">Lembrar-me</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-brand-600 hover:text-brand-500">Esqueci minha senha</a>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              class="flex w-full justify-center rounded-lg border border-transparent bg-brand-600 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Entrar
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-slate-500">Ou continue com</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-lg border border-slate-300 bg-white py-2 px-4 text-sm font-medium text-slate-500 shadow-sm hover:bg-slate-50">
                <i class="fa-brands fa-google text-lg"></i>
              </a>
            </div>
            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-lg border border-slate-300 bg-white py-2 px-4 text-sm font-medium text-slate-500 shadow-sm hover:bg-slate-50">
                <i class="fa-brands fa-facebook text-lg text-blue-600"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log('Login page loaded');
const email = ref('usuario@exemplo.com')
const password = ref('password')
const rememberMe = ref(false)

const handleLogin = () => {
  // Simula login e redireciona para o dashboard

  navigateTo('/dashboard')
}
</script>s