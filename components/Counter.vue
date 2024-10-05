<template>
    <div class="flex flex-col items-center">
        <p class="flex gap-2">
            Number {{ count }}
        </p>
        <button @click="increment">
            Increment
        </button>
    </div>
</template>

<script setup lang="ts">

const count = ref(0)

function increment() {
    count.value++
}
</script>

