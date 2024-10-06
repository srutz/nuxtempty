<template>
    <div v-if="isLoading" class="text-4xl">Loading ...</div>
    <button @click="load">Load it</button>
</template>
<script setup lang="ts">
const { start, finish, isLoading } = useLoadingIndicator({
    duration: 5_000,
})

const load = async () => {
    start()
    await new Promise((resolve) => setTimeout(resolve, 5_000))
    finish()
}

</script>