<template>
    <div class="w-32 h-[190px] rounded border border-gray-300 overflow-hidden shadow-lg bg-white">
        <img class="p-3 h-30 object-cover" :src="product.thumbnail" :alt="product.title" />
        <div class="px-6 py-1 text-sm">
            <div class="font-bold truncate">{{ product.title }}</div>
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-900 font-semi-bold">{{ formatNumber(product.discountPercentage * product.price / 100) }} €</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { Product } from '../util/Types'
import { formatNumber as fn } from '../util/Util'
const formatNumber = fn

const { product } = defineProps<{ product: Product }>()


</script>