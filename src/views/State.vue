<template>
  <template v-if="state">
    <div>{{ state.abbreviation }}</div>
    <div v-for="county in state.counties" :key="county" @click="handleCountyClick(county)">{{ county }}</div>
  </template>
</template>

<script>
import states from '../states'

export default {
  props: {
    stateId: {
      required: true,
      type: String,
    },
  },
  data: () => ({
    state: null,
    states,
  }),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.state = states.find(state => state.abbreviation.toLowerCase() === vm.stateId)

      if (!vm.state || !vm.state.enabled) {
        vm.$router.push({ name: 'home' })
      }
    })
  },
  methods: {
    handleCountyClick(county) {
      this.$router.push({ name: 'county', params: { county: county.replace(/\s+/g, '-').replace(/'+/g, '').toLowerCase() } })
    },
  },
}
</script>
