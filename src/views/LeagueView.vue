<script setup>
    import { onBeforeMount, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router'
    import { useLeaguesStore } from '@/stores/leagues'
    import { storeToRefs } from 'pinia';

    const { loadBadge } = useLeaguesStore()
    const { badges, loading } = storeToRefs(useLeaguesStore())

    const route = useRoute()
    const router = useRouter()
    const leagueId = route.params.id

    onBeforeMount(() => {
        loadBadge(leagueId)
    })

    const badgeData = computed(() => {
        return badges.value[leagueId]?.returnedBadge || null
    })
</script>

<template>
    <v-container>
        <v-btn variant="outlined" class="rounded-lg" @click="router.back()">Back</v-btn>
        <h2 class="mt-2 mb-5 text-center">Badges</h2>
        <v-skeleton-loader v-if="!badgeData || loading" type="card" />
        <div v-else class="d-flex flex-column align-center">
            League Season: {{ badgeData.strSeason }}
            
            <v-img 
              :src="badgeData.strBadge"
              :width="300" 
            />
        </div>
    </v-container>
</template>