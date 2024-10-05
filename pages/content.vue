<template>
    <div class="grow h-1 flex flex-col items-center justify-center overflow-hidden">
        <Banner title="Content page"></Banner>
        <div class="h-1 grow flex flex-col gap-4 m-2 ">
            <pre class="overflow-auto text-sm bg-gray-300 p-4 mb-4">{{ contentData }}</pre>
            <pre class="overflow-auto w-full font-sm">{{ content }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">

import * as fs from 'fs/promises'
import { useContentData } from '~/composable/useContentData';


// running server side code here
const content = ref("")
if (false && !window) {
    (async () => {
        const f = await fs.readFile("/etc/passwd")
        const s = f.toString()
        console.log(s)
    })()
}

// using the useHydration hook to pass data from server to client
// not working yet: https://github.com/nuxt/nuxt/issues/28582
if (false) {
    useHydration<string>(
        "file1",
        () => {
            //const f = await fs.readFile("/etc/passwd")
            //const s = f.toString()
            //return s
            return "yo"
        },
        (s) => {
            const v = s as string
            debugger
            content.value = v
        }
    )
}

// useState and running server code(!) here
// this will result in a hydration text-content warning
const { contentData, setContentData } = useContentData();

//(async () => { setContentData("my content data 123") })();

if (!window) {
    (async () => {
        const f = await fs.readFile("/etc/passwd")
        const s = f.toString()
        //console.log(s)
        setContentData(s)
    })()
}



</script>
