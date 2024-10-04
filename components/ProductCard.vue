<template>
    <div class="max-w-sm rounded border border-gray-300 overflow-hidden shadow-lg bg-white">
        <img class="p-3 w-full h-48 object-cover" :src="product.thumbnail" :alt="product.title" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 truncate">{{ product.title }}</div>
            <p class="text-gray-700 text-base mb-2 truncate">{{ product.description }}</p>
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-900 font-bold">{{ formatNumber(product.discountPercentage) }} €</span>
                <span class="text-sm text-gray-600 line-through">{{ formatNumber(product.price) }} €</span>
            </div>
            <div class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span class="ml-1 text-gray-600">{{ product.rating.toFixed(1) }}</span>
            </div>
            <div class="text-sm text-gray-600">
                Stock: {{ product.stock }} | Brand: {{ product.brand }}
            </div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {{ product.category }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { Product } from '../util/Types'
import { formatNumber as fn } from '../util/Util'
const formatNumber = fn

const { product } = defineProps<{ product: Product }>()


</script>