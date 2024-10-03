<template>
    <div class="grow h-1 flex flex-col items-center overflow-hidden pt-8">
        <div v-if="fetchStatus === 'pending'">
            <div>Sending data...</div>
        </div>
        <form v-else @submit.prevent="submitForm" class="flex flex-col gap-4 items-start">
            <div class="grid grid-cols-[auto_1fr] gap-4 items-baseline">
                <div for="firstname">Firstname</div>
                <input id="firstname" v-model="form.firstname" type="text" />
                <div for="lastname">Nachname</div>
                <input id="lastname" v-model="form.lastname" type="text" />
                <div for="message">Ihre Nachricht</div>
                <select id="category" v-model="form.category">
                    <option value="compliment">Lob</option>
                    <option value="complain">Beschwerde</option>
                    <option value="suggestion">Vorschlag</option>
                </select>
                <div for="message">Ihre Nachricht</div>
                <textarea class="w-[500px]" id="message" v-model="form.message" type="text" rows="10"/>
            </div>
            <Transition name="bounce">
                <div v-if="warning.length > 0" class="text-sm text-red-700">
                    {{ warning }}
                </div>
            </Transition>
            <button type="submit" :disabled="warning.length > 0">Submit</button>
        </form>
    </div>
</template>
<script setup lang="ts">

import type { AsyncDataRequestStatus } from '#app'



export type FeedbackCategory = 'compliment' | 'complain' | 'suggestion'

export type Feedback = {
    firstname: string
    lastname: string
    message: string
    category: FeedbackCategory
}

const form = ref({
    firstname: '',
    lastname: '',
    message: '',
    category: 'compliment' as FeedbackCategory,
} satisfies Feedback)

const warning = ref("")

watchEffect(() => {
    warning.value = ""
    if (form.value.firstname.length < 1) {
        warning.value = "Bitte geben Sie Ihren Vornamen ein."
    } else if (form.value.lastname.length < 1) {
        warning.value = "Bitte geben Sie Ihren Nachnamen ein."
    } else if (form.value.message.length < 1) {
        warning.value = "Bitte geben Sie Ihre Nachricht ein."
    }
})

const fetchStatus = ref<AsyncDataRequestStatus>('idle')

const submitForm = async () => {
    try {
        fetchStatus.value = 'pending'
        const response = await fetch('/api/saveform', {
            method: 'POST',
            body: JSON.stringify(form.value),
        })
        const data = await response.json()
        fetchStatus.value = 'success'
        console.log("data", toRaw(unref(data)))
        form.value = {
            firstname: '',
            lastname: '',
            message: '',
            category: 'compliment' as FeedbackCategory,
        }
    } catch (e) {
        const error = e as any
        console.error(error.message || 'Failed to submit the form.')
        fetchStatus.value = 'error'
    }
}


</script>