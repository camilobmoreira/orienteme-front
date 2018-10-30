<template>
  <v-snackbar
    v-model="show"
    :right="true"
    :timeout="time"
    :top="true"
    :color="color"
  >
    {{ message }}      
  </v-snackbar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Toast',
  props: ['show', 'color', 'message', 'time'],
  created() {
    setTimeout(() => {
      this.resetToast()
    }, this.time)
  },
  methods: {
    ...mapActions(['resetToast'])
  }
}
</script>
