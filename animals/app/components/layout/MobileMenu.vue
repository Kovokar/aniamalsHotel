<template>
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="md:hidden border-t border-slate-200 bg-white">
      <div class="space-y-1 pt-2 pb-3">
        <NuxtLink 
          to="/dashboard/pets"
          @click="$emit('close')"
          class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
          :class="route.path === '/dashboard/pets'
            ? 'bg-brand-50 border-brand-500 text-brand-700'
            : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'"
        >
          Meus Animais
        </NuxtLink>
        <NuxtLink 
          to="/dashboard/tutors"
          @click="$emit('close')"
          class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
          :class="route.path === '/dashboard/tutors'
            ? 'bg-brand-50 border-brand-500 text-brand-700'
            : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'"
        >
          Tutores
        </NuxtLink>
      </div>
      <div class="border-t border-slate-200 pt-4 pb-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img 
              class="h-10 w-10 rounded-full object-cover" 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt=""
            >
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-slate-800">Ana Silva</div>
            <div class="text-sm font-medium text-slate-500">ana.silva@email.com</div>
          </div>
          <button 
            @click="$emit('logout')"
            class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none"
          >
            <i class="fa-solid fa-arrow-right-from-bracket text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute()

defineEmits(['close', 'logout'])
</script>