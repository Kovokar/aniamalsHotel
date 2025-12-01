<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <PetCard 
      v-for="pet in pets" 
      :key="pet.id"
      :pet="pet"
    />
    
    <AddPetCard @click="$emit('open-modal')" />
  </div>
</template>

<script setup lang="ts">
import PetCard from './PetCard.vue'
import AddPetCard from './AddPetCard.vue'

defineEmits(['open-modal'])

const pets = ref([
  {
    id: 1,
    name: 'Max',
    species: 'Cão',
    breed: 'Beagle',
    age: 3,
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'dog'
  },
  {
    id: 2,
    name: 'Luna',
    species: 'Gato',
    breed: 'Siamês',
    age: 2,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'cat'
  },
  {
    id: 3,
    name: 'Thor',
    species: 'Cão',
    breed: 'Golden Retriever',
    age: 5,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: 'dog'
  }
])
</script>