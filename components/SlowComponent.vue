<template>
    <div class="lex flex-col items-center justify-center overflow-hidden">
        <div>I have arrived</div>
    </div>
</template>
<script setup lang="ts">
// wait 10 seconds
await new Promise(resolve => setTimeout(resolve, 10_000))
</script>