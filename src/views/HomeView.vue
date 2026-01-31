    <script setup>
    import { onBeforeMount, ref, computed } from 'vue';
    import LeagueButton from '@/components/LeagueButton.vue'
    import { useLeaguesStore } from '@/stores/leagues'
    import { storeToRefs } from 'pinia';
    import Search from '@/components/Search.vue';

    const { loadLeagues } = useLeaguesStore()
    const { leagues, loading } = storeToRefs(useLeaguesStore())

    const searchText = ref('')
    const selectedSport = ref('Soccer')

    onBeforeMount(() => {
        loadLeagues()
    })

    const filteredLeagues = computed(() => {
        return leagues.value.filter(league => {
            const matchesName = league.strLeague.toLowerCase().includes(searchText.value.toLowerCase())
            const matchesSport = league.strSport === selectedSport.value
            
            return matchesName && matchesSport
        });
    });
</script>

<template>
    <v-container>
        <h2 class="mt-2 mb-5 text-center">Leagues</h2>
        
        <Search 
            v-model="searchText" 
            v-model:sportValue="selectedSport" 
        />

        <v-skeleton-loader v-if="loading" type="card" />
        <div v-else class="px-4">
            <v-row justify="center">
                <v-col
                    v-for="league in filteredLeagues"
                    :key="league.idLeague"
                    cols="12"
                    sm="6"
                    lg="6"
                >
                    <LeagueButton :league="league" />
                </v-col>

                <v-alert v-if="filteredLeagues.length === 0" type="warning" class="mt-4">
                    No leagues found matching your search.
                </v-alert>
            </v-row>
        </div>
    </v-container>
</template>