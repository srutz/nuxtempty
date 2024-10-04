<template>
    <div class="h-1 grow flex flex-col gap-2 pt-4 items-center" >
        <div class="flex gap-2 items-center">
            <div>Showing Page {{ page + 1 }} of {{ pageCount }}</div>
            <button class="bg-gray-400 p-1" @click="prevPage">Previous</button>
            <button class="bg-gray-400 p-1" @click="nextPage">Next</button>
        </div>
        <div v-if="pending && delayedPending" class="h-1 grow flex flex-col gap-4 p-4 items-center justify-center" v-auto-animate>
            <div class="insets-0 inset-0 fixed bg-black opacity-70 flex flex-col items-center justify-center">
                <div class="text-8xl font-bold uppercase gradient-text">Loading...</div>
            </div>
        </div>
        <div v-else class="h-1 grow flex flex-wrap overflow-y-auto pt-4" v-auto-animate="{duration: 100}">
            <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4" v-for="product in products" :key="product.id" >
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { vAutoAnimate } from '@formkit/auto-animate'
import type { Product, ProductsResponse } from '~/util/Types'
import { debounceSimple } from '~/util/Util';

/* initialize our reactive variables */
const products = shallowRef<Product[]>([])
const pagingInfos = ref({
    limit: 0,
    skip: 0,
    total: 0,
})
const lastDebounce = ref(-1)
const pageSize = 30
const page = ref(0)
const skip = computed(() => page.value * pageSize)
const pageCount = computed(() => Math.ceil(pagingInfos.value.total / pageSize))
const delayedPending = ref(false)

/* fetch the products from the server
 * this run when the component's setup is executed on the client and(!) the server
 */
const { data, pending, error } = await useFetch('https://dummyjson.com/products', {
    query: {
        skip: skip,
        limit: pageSize,
    },
    key: 'products',  // so prending fetches are cancelled also when params change
    server: false,
    deep: false,
})

/* watch the data and update the products and pagingInfos
 * this will trigger a reload since "skip" is a ref and a param to the useFetch-Query
 */
watchEffect(() => {
    const response = data.value ? data.value as ProductsResponse : { products: [], limit: 0, skip: 0, total: 0 }
    //products.value = response.products
    products.value.splice(0, products.value.length)
    products.value.push(...response.products)
    pagingInfos.value = {
        limit: response.limit,
        skip: response.skip,
        total: response.total,
    }
    if (error.value) {
        console.error(">>> ERROR", error.value)
    }
    if (pending.value) {
        if (lastDebounce.value >= 0) {
            clearTimeout(lastDebounce.value)
        }
        lastDebounce.value = debounceSimple(() => {
            delayedPending.value = pending.value
        }, 1_000)
    } else {
        delayedPending.value = pending.value
    }
})

/* navigate to previous or next page */
const prevPage = () => { goToPage(page.value - 1) }
const nextPage = () => { goToPage(page.value + 1) }
const goToPage = (newPage: number) => {
    if (newPage >= 0 && newPage < pageCount.value) {
        page.value = newPage
    }
}


</script>