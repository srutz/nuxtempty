
export function formatNumber(n: number, decimals: number = 2): string {
    const format = Intl.NumberFormat('de-DE', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    })
    return format.format(n)
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
    let timeout: any
    return function (this: any, ...args: any[]) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), delay)
    } as T
}

export function debounceSimple(fn: () => void, delay: number) {
    let timeout = -1
    const f = function () {
        clearTimeout(timeout)
        timeout = setTimeout(fn, delay) as unknown as number
    }
    f()
    return timeout
}