<template>
  <div class="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
    <ul role="list" class="divide-y divide-slate-200">
      <TutorItem 
        v-for="tutor in tutors" 
        :key="tutor.id"
        :tutor="tutor"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import TutorItem from './TutorItem.vue'

const tutors = ref([
  {
    id: 1,
    name: 'Ricardo Mendes',
    email: 'ricardo.m@example.com',
    specialty: 'Especialista em Cães',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5
  },
  {
    id: 2,
    name: 'Juliana Costa',
    email: 'juliana.c@example.com',
    specialty: 'Especialista em Gatos',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    email: 'carlos.o@example.com',
    specialty: 'Veterinário',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.5
  }
])
</script>