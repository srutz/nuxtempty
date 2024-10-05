<template>
    <pre @click="onclick" class="h-1 grow overflow-auto text-sm w-full p-4" >{{ data }}
    </pre>
</template>

<script setup lang="ts">

import type { Places } from '~/util/Database'   // this is possible 

const props = defineProps<{
    data: Places[]
}>()
const { data } = props


const onclick = () => {
    /* to check if its hydrated */
    alert("clicked")
}


</script>
