<template>
  <div>
    <p>Results</p>
    <v-btn color="secondary" @click="handleClick">Pick Different Teams</v-btn>
  </div>
</template>

<script>
export default {
  name: "MatchResults",
  data: () => ({}),
  props: ['handleSubmit'],
  methods: {
    handleClick() {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style scoped>

</style>