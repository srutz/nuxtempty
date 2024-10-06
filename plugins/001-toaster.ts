
export type ToasterLevel = 'info' | 'success' | 'error'

export type Toaster = {
    show: (message: string, level: ToasterLevel) => void
}

export default defineNuxtPlugin(nuxtApp => {

    const toaster: Toaster = {
        show: (message: string, level: ToasterLevel) => {
            alert(message)
        }
    }

    nuxtApp.provide('toaster', {
        show: (message: string, level: ToasterLevel) => {
            alert(level + ": " + message)
        }
    })
})


