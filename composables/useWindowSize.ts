

export type WindowSize = { windowWidth: number, windowHeight: number }

export function useWindowSize() {
    const size = ref<WindowSize>({ windowWidth: -1, windowHeight: -1 })
    onMounted(() => {
        size.value.windowWidth = window.innerWidth
        size.value.windowHeight = window.innerHeight
        const listener = () => {
            size.value.windowWidth = window.innerWidth
            size.value.windowHeight = window.innerHeight
        }
        window.addEventListener("resize", listener)
        onUnmounted(() => {
            window.removeEventListener("resize", listener)
        })
    })
    return toRefs(size.value)
}



