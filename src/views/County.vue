<template>
  <div>County</div>
  <div>{{ county }}</div>
  <div @click="handleCemeteryClick()">Cemetery Example</div>
</template>

<script>
import states from '../states'

export default {
  props: {
    county: {
      required: true,
      type: String,
    },
    stateId: {
      required: true,
      type: String,
    },
  },
  data: () => ({ states }),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let state = states.find(state => state.abbreviation.toLowerCase() === vm.stateId);

      if (!state.enabled || !state.counties.find(county => county.replace(/\s+/g, '-').replace(/'+/g, '').toLowerCase() === vm.county)) {
        vm.$router.push({ name: 'home' })
      }
    })
  },
  methods: {
    handleCemeteryClick() {
      this.$router.push({ name: 'cemetery', params: { cemeteryId: 1 } })
    },
  },
}
</script>
