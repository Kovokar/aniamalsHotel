<template>
  <Teleport to="body">
    <Transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen"
        class="relative z-50" 
        aria-labelledby="modal-title" 
        role="dialog" 
        aria-modal="true"
      >
        <div 
          class="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity"
          @click="$emit('close')"
        ></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition
              enter-active-class="ease-out duration-300"
              enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to-class="opacity-100 translate-y-0 sm:scale-100"
              leave-active-class="ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0 sm:scale-100"
              leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div 
                v-if="isOpen"
                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                @click.stop
              >
                <!-- Modal Header -->
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b border-slate-100">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 sm:mx-0 sm:h-10 sm:w-10">
                      <i class="fa-solid fa-paw text-brand-600"></i>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="text-lg font-semibold leading-6 text-slate-900" id="modal-title">Cadastrar Animal</h3>
                      <div class="mt-2">
                        <p class="text-sm text-slate-500">Preencha as informações abaixo para adicionar um novo pet ao seu perfil.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Modal Body / Form -->
                <div class="px-4 py-5 sm:p-6">
                  <form class="space-y-4" @submit.prevent="handleSubmit">
                    <div>
                      <label for="pet-name" class="block text-sm font-medium text-slate-700">Nome do Animal</label>
                      <input 
                        type="text" 
                        v-model="formData.name"
                        name="pet-name" 
                        id="pet-name" 
                        class="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm border px-3 py-2" 
                        placeholder="Ex: Rex"
                      >
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label for="species" class="block text-sm font-medium text-slate-700">Espécie</label>
                        <select 
                          id="species" 
                          v-model="formData.species"
                          name="species" 
                          class="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm border px-3 py-2 bg-white"
                        >
                          <option>Cachorro</option>
                          <option>Gato</option>
                          <option>Outro</option>
                        </select>
                      </div>
                      <div>
                        <label for="age" class="block text-sm font-medium text-slate-700">Idade</label>
                        <div class="relative mt-1 rounded-md shadow-sm">
                          <input 
                            type="number" 
                            v-model="formData.age"
                            name="age" 
                            id="age" 
                            class="block w-full rounded-lg border-slate-300 focus:border-brand-500 focus:ring-brand-500 sm:text-sm border px-3 py-2" 
                            placeholder="0"
                          >
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span class="text-slate-500 sm:text-sm">anos</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label for="breed" class="block text-sm font-medium text-slate-700">Raça</label>
                      <input 
                        type="text" 
                        v-model="formData.breed"
                        name="breed" 
                        id="breed" 
                        class="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm border px-3 py-2" 
                        placeholder="Ex: Golden Retriever"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-slate-700">Foto do Animal</label>
                      <div class="mt-1 flex justify-center rounded-lg border-2 border-dashed border-slate-300 px-6 pt-5 pb-6 hover:bg-slate-50 transition-colors cursor-pointer">
                        <div class="space-y-1 text-center">
                          <i class="fa-regular fa-image text-4xl text-slate-400"></i>
                          <div class="flex text-sm text-slate-600 justify-center">
                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-brand-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2 hover:text-brand-500">
                              <span>Upload um arquivo</span>
                              <input id="file-upload" name="file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">ou arraste e solte</p>
                          </div>
                          <p class="text-xs text-slate-500">PNG, JPG, GIF até 10MB</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <!-- Modal Footer -->
                <div class="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-slate-100">
                  <button 
                    type="button" 
                    @click="handleSubmit"
                    class="inline-flex w-full justify-center rounded-lg border border-transparent bg-brand-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  >
                    Salvar
                  </button>
                  <button 
                    type="button" 
                    @click="$emit('close')"
                    class="mt-3 inline-flex w-full justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const formData = ref({
  name: '',
  species: 'Cachorro',
  age: 0,
  breed: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Aqui você pode adicionar a lógica para salvar o pet
  emit('close')
}
</script>