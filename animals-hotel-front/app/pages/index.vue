<template>
    <div>
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
// Redireciona automaticamente para a página de login
    console.log('Redirecting to login page');
    navigateTo('/login')
</script>