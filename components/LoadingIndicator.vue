<template>
    <div>
        <div v-if="isLoading" class="text-4xl text-red-300">
        I am loading ...
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
const l = useLoadingIndicator()

const { isLoading } = l



</script>
