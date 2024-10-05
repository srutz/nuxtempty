<template>
    <div class="h-1 grow flex flex-col w-full">
        <MyDataRenderer nuxt-client :data="places" ></MyDataRenderer>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { getPlacesData, type Places } from '~/util/Database'

import * as fs from 'fs/promises'

/* This is a server only component because of the .server.vue extension 
 * 
 * just work with your node packages here, nothing client-side like
 * onMounted, @click etc will work. This component is never hydrated
 * 
 * However child components with nuxt-client attribute will be hydrated
*/

const places = await getPlacesData()

//fs.appendFile("/tmp/test.txt", "Hello from the serverside" + new Date().toISOString() + places.length + "\n", "utf-8")


</script>