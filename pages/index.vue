<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden gap-4">
        <div>Hello World</div>

        <button @click="showToast">Show the toast</button>
    </div>
</template>
<script setup lang="ts">

import type { Toaster } from '~/plugins/001-toaster';




const { $toaster } = useNuxtApp() as unknown as { $toaster: Toaster }

const showToast = () => {
    $toaster.show('Hello World', 'info')
}

</script>