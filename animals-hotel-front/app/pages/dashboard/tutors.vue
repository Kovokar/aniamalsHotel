<template>
  <div class="min-h-screen bg-slate-50">
    <Header @logout="handleLogout" />
    
    <main class="flex-1 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-slate-900">Tutores Parceiros</h1>
          <p class="mt-1 text-sm text-slate-500">Encontre cuidadores confiáveis para seus animais.</p>
        </div>

        <TutorList />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '../../components/layout/Header.vue'
import TutorList from '../../components/tutors/TutorList.vue'

const handleLogout = () => {
  navigateTo('/login')
}
</script>