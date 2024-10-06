<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden">
        <div>The main page</div>
        <Suspense>
            <SlowComponent />
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>
<script setup lang="ts">



</script>