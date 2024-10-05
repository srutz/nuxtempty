<template>
    <pre class="h-1 grow overflow-auto text-sm" style="font-size: 12px; width: 100%; padding: 8px; overflow: auto;">{{ data }}
    </pre>
</template>

<script setup lang="ts">

/* get the data and renders it on the server side */
/* attention: classes from tailwindcss are not working on the server side */

import { getPlacesData } from '~/util/Database';

const data = ref("")
const places = await getPlacesData()
data.value = JSON.stringify(places, null, 2)

</script>