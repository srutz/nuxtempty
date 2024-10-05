<template>
    <div class="h-1 grow flex flex-col overflow-hidden">
        <div class="flex gap-4 items-center justify-center pt-4">
            <NuxtLink to="/products"><button>Produkt-Overview</button></NuxtLink>
        </div>
        <slot></slot>
    </div> 
</template>
