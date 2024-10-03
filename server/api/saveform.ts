import { Feedback } from "~/pages/index.vue"


/* Api Route handler */
export default defineEventHandler(async (event) => {
    try {
        const Feedback = await readBody(event) as Feedback
        await delay(10_000)
        console.log("body", Feedback)
        return { status: "success", formid: "1234" }
    } catch (e) {
        const error = e as any
        console.error("error", error)
        return { error: error?.message || "An error occurred." }
    }
})


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

