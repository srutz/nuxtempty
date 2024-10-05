<template>
    <pre @click="onclick" class="h-1 grow overflow-auto text-sm w-full p-4" >{{ data }}
    </pre>
</template>

<script setup lang="ts">

const props = defineProps<{
    data: any[]
}>()

//for (let i = 0; i < 1000; i++) { console.log("loog 123" + i) }

const onclick = () => {
    /* to check if its hydrated */
    alert("clicked")
}


</script>
