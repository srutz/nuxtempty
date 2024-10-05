<template>
    <div class="h-1 grow flex flex-col w-full">
        <MyDataRenderer nuxt-client :data="data" ></MyDataRenderer>
    </div>
</template>

<script setup lang="ts">
import { getPlacesData } from '~/util/Database';

const data = ref<any[]>()
const places = await getPlacesData()
data.value = places  // pass as objects

</script>