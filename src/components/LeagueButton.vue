<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = defineProps({
    league: {
      type: Object,
      default: null,
      required: true
    }
  })

  function selectLeague() {
     router.push({
      name: 'league',
      params: { id: props.league.idLeague }
    })
  }
</script>

<template>
  <v-card
    min-height="100px"
    class="rounded-lg elevation-1 pa-2 cursor-pointer"
    @click="selectLeague()"
  >
    <div>{{ league.strLeague }}</div>
    <div>{{ league.strSport }}</div>
    <div>{{ league.strLeagueAlternate }}</div>
  </v-card>
</template>