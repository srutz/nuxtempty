<template>
    <div class="flex gap-4 px-4 py-2 bg-white border-b border-gray-300">
        <div class="uppercase select-none tracking-tight">NUXTEMPTY</div>
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/fetch" class="hover:underline">useFetch</NuxtLink>
        <NuxtLink to="/asyncdata" class="hover:underline">useAsyncData</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
    </div>
</template>