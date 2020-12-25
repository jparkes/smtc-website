<template>
  <div>States</div>
  <template v-for="state in states" :key="state.abbreviation">
    <div v-if="state.enabled" @click="handleStateClick(state)">{{ state.name }}</div>
  </template>
</template>

<script>
import states from '../states'

export default {
  data: () => ({
    states,
  }),
  methods: {
    handleStateClick({ abbreviation }) {
      this.$router.push({ name: 'state', params: { stateId: abbreviation.toLowerCase() } })
    },
  },
}
</script>
