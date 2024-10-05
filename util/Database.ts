import { Pool } from 'postgrejs'

export type Places = {
    id: number
    title: string
    rating: number
}

const pool = new Pool({
    user: 'hans',
    host: 'localhost',
    database: 'db1',
    password: 'secret123',
    port: 5432,
})

export async function getPlacesData() {
    const result  = await pool.query('SELECT id, title, rating FROM places', { cursor: false })
    const places: Places[] = result.rows as Places[]
    return places
}

