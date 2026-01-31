import { defineStore } from 'pinia'
import { fetchAllLeagues, fetchSeasonBadge } from '@/services/sportsApi'
import { ref } from 'vue'

export const useLeaguesStore = defineStore('leaguesStore', () => {
    const leagues = ref(null)
    const loading = ref(false)
    const badges = ref({})

    const STORAGE_KEY = 'leagues_cache'

    async function loadLeagues() {
        const cached = localStorage.getItem(STORAGE_KEY)
        if (cached) {
            leagues.value = JSON.parse(cached)
            return
        }

        loading.value = true
        leagues.value = await fetchAllLeagues()
        localStorage.setItem(STORAGE_KEY, JSON.stringify(leagues.value))
        loading.value = false
    }

    async function loadBadge(id) {
        if (badges.value[id]) return

        loading.value = true
        let returnedBadge = await fetchSeasonBadge(id)
        if (returnedBadge) {
            badges.value[id] = {
                returnedBadge
            }
        }
        loading.value = false
    }

    return {
        // data
        leagues,
        badges,
        loading,

        // functions
        loadLeagues,
        loadBadge
    }
})
