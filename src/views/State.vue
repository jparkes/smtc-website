<template>
  <div>State</div>
  <div v-if="test">{{ test.abbreviation }}</div>
</template>

<script>
import states from '../states'

export default {
  props: {
    state: {
      required: true,
      type: String,
    },
  },
  data: () => ({
    states,
    test: null,
  }),
  beforeMount() {
    this.test = states.find(state => state.name.toLowerCase() === this.state);
  },
}
</script>
