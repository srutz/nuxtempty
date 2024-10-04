
import * as fs from 'fs/promises';

const LOGFILE_NAME = "/tmp/requests.log"

export default defineEventHandler(async (event) => {
    const fields = [
        "REQUEST",
        new Date().toUTCString(),
        event.method,
        event.path,
    ]
    const logline = fields.join(":") + "\n"
    fs.appendFile(LOGFILE_NAME, logline).then(() => { })
    console.log("REQUESTLOG: ", logline)
})
