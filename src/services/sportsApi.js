import axios from 'axios'

const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3'

export async function fetchAllLeagues() {
    try {
        const response = await axios.get(`${API_BASE}/all_leagues.php`)
        return response.data.leagues
    } catch (e) {
        console.error(e)
    }
    return null
}

export async function fetchSeasonBadge(id) {
    try { 
        const response = await axios.get(`${API_BASE}/search_all_seasons.php?badge=1&id=${id}`)
        return response.data.seasons?.[0]
    } catch (e) {
        console.error(e)
    }
    return null
}