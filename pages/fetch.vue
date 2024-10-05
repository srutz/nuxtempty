<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden text-xl gap-4 p-4">
        <div>{{joke}}</div>
        <button @click="nextjoke">Load next joke</button>
    </div>
</template>

<script setup lang="ts">

export type Joke = {
    id: string
    joke: string
    status: number
}


const { data, refresh } = await useFetch('https://icanhazdadjoke.com/', {
    headers: {
        Accept: 'application/json',
    },
    key: 'joke123',
    deep: false,
})

const nextjoke = () => {
    refresh()
}

const joke = computed(() => {
    const joke = data.value as Joke
    return joke.joke
})




</script>