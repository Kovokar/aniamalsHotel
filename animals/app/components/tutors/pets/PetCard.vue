<template>
  <div class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-slate-100">
    <div class="aspect-w-3 aspect-h-2 bg-slate-200 relative h-48 overflow-hidden">
      <img 
        :src="pet.image" 
        :alt="pet.name" 
        class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      >
      <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-slate-700 shadow-sm">
        <i :class="`fa-solid fa-${pet.icon} text-brand-600 mr-1`"></i> {{ pet.species }}
      </div>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-bold text-slate-900">{{ pet.name }}</h3>
          <p class="text-sm text-slate-500">{{ pet.breed }} • {{ pet.age }} anos</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
        <button class="text-slate-400 hover:text-brand-600 transition-colors text-sm font-medium flex items-center gap-1">
          <i class="fa-regular fa-pen-to-square"></i> Editar
        </button>
        <button class="text-slate-400 hover:text-red-500 transition-colors text-sm font-medium flex items-center gap-1">
          <i class="fa-regular fa-trash-can"></i> Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Pet {
  id: number
  name: string
  species: string
  breed: string
  age: number
  image: string
  icon: string
}

defineProps<{
  pet: Pet
}>()
</script>