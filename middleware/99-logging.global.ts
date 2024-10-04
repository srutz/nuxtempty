import * as fs from 'fs/promises';
const LOGFILE_NAME = "/tmp/requests.log"


export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client) {
        return
    } 
    const fields = [
        "ROUTE",
        new Date().toUTCString(),
        to.fullPath
    ]
    console.log("ROUTEMIDDLEWARE: ", to)
    const logline = fields.join(":") + "\n"
    fs.appendFile(LOGFILE_NAME, logline).then(() => { })
    console.log("REQUESTLOG: ", logline)
})