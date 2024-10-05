import { Pool } from 'pg'

const pool = new Pool({
    user: 'hans',
    host: 'localhost',
    database: 'db1',
    password: 'secret123',
    port: 5432,
})

export type Places = {
    id: number
    title: string
    rating: number
}

export async function getPlacesData() {
    let places: Places[]
    const client = await pool.connect()
    try {
        const result  = await client.query('SELECT id, title, rating FROM places')
        places = result.rows
    } finally {
        client.release()
    }
    return places
}

