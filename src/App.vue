<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Oriente</span>
        <span class="font-weight-light">.me</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        v-if="currentUser._id"
        to="/cadastro-professor"
      >
        <span class="mr-2">Cadastrar Professor</span>
      </v-btn>
      <v-btn
        flat
        v-if="currentUser._id"
        to="/cadastro-aluno"
      >
        <span class="mr-2">Cadastrar Aluno</span>
      </v-btn>
      <v-btn
        flat
        v-if="currentUser._id"
        @click="signOut"
      >
        <span class="mr-2">Sair</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <myToast v-if="toast.show" :show="toast.show" :color="toast.color" :message="toast.message" :time="toast.time"/>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import myToast from '@/components/shared/Toast'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    myToast
  },
  computed: { ...mapGetters(['currentUser', 'toast']) },
  methods: {
    signOut() {
      this.resetUser()
      this.$router.push('/')
    },
    ...mapActions(['resetUser'])
  }
}
</script>
