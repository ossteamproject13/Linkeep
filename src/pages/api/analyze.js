import { publicRuntimeConfig } from 'next.config'

export default async function handler(req, res) {
    const response = await fetch(
        publicRuntimeConfig.jsonlink_api_url + `/extract?url=${encodeURIComponent(req.query.url)}&api_key=${process.env.JSONLINK_API_KEY}`
    )

    const data = await response.json()

    res.status(response.status).json(data)
}
