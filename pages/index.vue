<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden">
        <div>Hello World</div>
        <div>{{ windowWidth }} x {{  windowHeight }}</div>
        <pre>{{ JSON.stringify(query, null, 4) }}</pre>
    </div>
</template>
<script setup lang="ts">

/* use our own composable */
const { windowWidth, windowHeight } = useWindowSize()

/* use a composable from nuxt and show the query */
const { query } = useRoute()



</script>