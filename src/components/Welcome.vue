<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <blockquote class="main">
          <h2>Welcome Adventurer</h2>
          <v-form v-model="valid" ref="form">
            <v-text-field
              v-model="name"
              label="What are your name ? "
              :rules="nameRules"
              :counter="30"
              required
            ></v-text-field>
            <v-btn
              block
              color="info"
              :disabled="!valid"
              @click="submit"
            >Next</v-btn>
          </v-form>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import store from '../vuex/store'

export default {
  props: {
    msg: String
  },
  data: () => ({
    valid: false,
    name: null,
    nameRules: [
      v => !!v || 'Name is required',
      v => /^[a-zA-Z]+$/.test(v) || 'No special character allowed',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters'
    ],
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        store.commit('addMe', {
          id: 1,
          name: this.name,
          hp: 100,
          mp: 100,
          atk: 1,
          atkspd: 1,
          atkbar: 0
        })
        this.$router.push('Race')
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  width: 20rem;
}
</style>
