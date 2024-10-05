<template>
    <div class="h-1 grow flex flex-col gap-4 items-center justify-center">
        <ProductCard v-if="product && status=='success'" :product="product" />
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/util/Types';


const route = useRoute()
const id = route.params.id

const r = await useFetch("https://dummyjson.com/products/" + id, {
    key: "product" + id,
    deep: false,
})
const { data, status, error } = r

const product = ref<Product>()

if (data.value) {
    product.value = data.value as Product
}


</script>se
