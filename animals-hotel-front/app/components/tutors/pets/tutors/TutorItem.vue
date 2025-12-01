<template>
  <li class="p-4 sm:px-6 hover:bg-slate-50 transition-colors">
    <div class="flex items-center gap-4">
      <img 
        class="h-12 w-12 rounded-full object-cover" 
        :src="tutor.avatar" 
        :alt="tutor.name"
      >
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-slate-900 truncate">{{ tutor.name }}</p>
        <p class="text-sm text-slate-500 truncate">{{ tutor.email }}</p>
      </div>
      <div class="hidden sm:flex flex-col items-end">
        <p class="text-sm text-slate-900">{{ tutor.specialty }}</p>
        <div class="flex text-yellow-400 text-xs mt-1">
          <i 
            v-for="star in 5" 
            :key="star"
            :class="star <= Math.floor(tutor.rating) 
              ? 'fa-solid fa-star' 
              : star === Math.ceil(tutor.rating) && tutor.rating % 1 !== 0
                ? 'fa-solid fa-star-half-stroke'
                : 'fa-regular fa-star'"
          ></i>
        </div>
      </div>
      <button class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
        Ver Perfil
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
interface Tutor {
  id: number
  name: string
  email: string
  specialty: string
  avatar: string
  rating: number
}

defineProps<{
  tutor: Tutor
}>()
</script>