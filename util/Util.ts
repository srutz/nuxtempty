
export function shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function rotateArray<T>(input: T[], k: number) {
    const n = input.length
    k = ((k % n) + n) % n
    return [...input.slice(-k), ...input.slice(0, -k)]
}


