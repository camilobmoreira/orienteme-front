<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Bem Vindo ao Oriente.me
        </h1>        
      </v-flex>

      <v-container>
        <v-form ref="signInForm" v-model="signInFormValid" lazy-validation>
          <v-layout row  justify-center>
              <v-flex xs6 sm6>
                <v-text-field
                  v-model="login.email"
                  :rules="emailRules"
                  label="Email"                              
                />  
              </v-flex>                   
          </v-layout> 

          <v-layout row  justify-center>
            <v-flex xs6 sm6>
              <v-text-field
                v-model="login.password"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"  
                label="Senha"                                     
                @click:append="showPassword = !showPassword"
              />
            </v-flex> 
          </v-layout> 

          <v-layout row justify-center> 
            <v-flex xs6 sm6>     
              <v-btn raised round @click="clearSignInForm">Limpar</v-btn>      
              <v-btn :disabled="!signInFormValid" :loading="loadSignIn" raised round class="secondary" @click="signIn">Entrar</v-btn>
            </v-flex> 
          </v-layout>                
        </v-form>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'Email é obrigatório',
        v => /.+@.+/.test(v) || 'Digite um email válido'
      ],
      passwordRules: [v => !!v || 'Senha é obrigatória'],
      loadSignIn: false,
      showPassword: false,
      signInFormValid: true
    }
  },
  methods: {
    async signIn() {
      if (this.$refs.signInForm.validate()) {
        this.loadSignIn = true
        try {
          let response = await this.axios.post('/api/authenticate', this.login)
          this.setCurrentUser(response.data.user)
          this.axios.defaults.headers['x-access-token'] = response.data.token
        } catch (error) {
          this.toast({
            color: 'error',
            message: error.response
              ? error.response.data.message
              : 'Problema ao tentar entrar.'
          })
        } finally {
          this.loadSignIn = false
          this.$router.push('/home')
        }
      }
    },
    clearSignInForm() {
      this.$refs.signInForm.reset()
    },
    ...mapActions(['setCurrentUser', 'toast'])
  }
}
</script>

<style>
</style>
