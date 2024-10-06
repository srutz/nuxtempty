<template>
    <div class="flex text-2xl md:text-4xl lg:text-8xl uppercase">
        <div v-for="(c,i) in title" :key="i" 
            :style="getStyle && getStyle(i)">{{c == ' ' ? '&nbsp;' : c}}</div>
    </div>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue';

const { title } = defineProps<{ title: String }>()

const getStyle = (i: number) => {
    return {
        animationName: "bounce-in",
        animationDuration: "3s",
        animationTimingFunction: "ease-out",
        animationDirection: "alternate",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationDelay: `${i * 0.1}s`,
    } satisfies CSSProperties
}

if (title?.toLowerCase() == 'angular') {
    throw new Error('Angular is not allowed')
}
</script>