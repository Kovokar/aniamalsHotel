<template>
  <div class="min-h-screen bg-slate-50">
    <Header @logout="handleLogout" />
    
    <main class="flex-1 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 class="text-2xl font-bold text-slate-900">Meus Animais</h1>
            <p class="mt-1 text-sm text-slate-500">Gerencie os perfis dos seus pets cadastrados.</p>
          </div>
          <button 
            @click="openModal"
            class="inline-flex items-center justify-center rounded-lg border border-transparent bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all hover:shadow-md"
          >
            <i class="fa-solid fa-plus mr-2"></i>
            Cadastrar novo animal
          </button>
        </div>

        <PetGrid @open-modal="openModal" />
      </div>
    </main>

    <PetModal :is-open="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import PetGrid from '~/components/pets/PetGrid.vue'
import PetModal from '~/components/modals/PetModal.vue'
import Header from '../../components/layout/Header.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleLogout = () => {
  navigateTo('/login')
}
</script>