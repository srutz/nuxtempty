<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden">
        <NuxtErrorBoundary @error="logError">
            <SequenceBanner title="React" />
            <template #error="errorhandle">
                <div class="text-2xl md:text-4xl lg:text-8xl uppercase">
                    <div>Your banner was censored</div>
                </div>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>
<script setup lang="ts">
const logError = (error: any) => {
    console.error(error)
}
</script>