<template>
    <div class="p-8 text-8xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">{{title}}</div>
</template>

<script setup lang="ts">

const { title } = defineProps<{
    title: string
}>()

for (let i = 0; i < 10; i++) {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + i + " " + title);
}

</script>