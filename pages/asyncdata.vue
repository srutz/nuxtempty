<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden text-xl gap-4 p-4">
        <div v-if="status=='pending'">Loading...</div>
        <div v-else>{{joke}}</div>
        <button @click="nextjoke">Load next joke</button>
    </div>
</template>

<script setup lang="ts">

export type Joke = {
    id: string
    joke: string
    status: number
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const { data, refresh, status } = await useAsyncData(
    "jokes456",
    async () => {
        const r = $fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json',
            }
        })
        await delay(5_000)
        return r
    }, 
    {
        deep: false,
        lazy: true,
    }
)

const nextjoke = () => {
    refresh()
}

const joke = computed(() => {
    const joke = data.value as Joke
    return joke.joke
})




</script>