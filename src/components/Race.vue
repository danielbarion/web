<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center row fill-height>
        <blockquote class="main">
          <h2>Nice to meet you {{ name }},</h2>
          <span>Now you need to tell me your race before we continue,</span>

            <v-container fluid grid-list-md>
              <v-data-iterator
                :items="races"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
                content-tag="v-layout"
                row
                wrap
              >
                <v-flex
                  slot="item"
                  slot-scope="props"
                  xs12
                  sm6
                  md4
                  lg3
                >
                <v-card>
                  <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                  <v-divider></v-divider>
                  <v-list dense v-for="(value, stat) in props.item.stats" :key="stat">
                    <v-list-tile>
                      <v-list-tile-content>{{ stat }}:</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ value }}</v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-list class="class-info">
                    <div class="class-info-content" v-for="(value, index) in props.item.tree" :key="index">
                      <v-tooltip bottom>
                        <v-btn
                          slot="activator"
                          class="class-info-button"
                          outline
                          color="info"
                          @click="info"
                        >{{ value }}</v-btn>
                        <span>Click to read</span>
                      </v-tooltip>
                    </div>
                  </v-list>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-content>{{ props.item.description }}:</v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-data-iterator>
          </v-container>
            <v-btn
              color="info"
              :disabled="!valid"
              @click="submit"
            >Next</v-btn>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import store from '../vuex/store'
import races from '../game/races'

export default {
  props: {
    msg: String
  },
  data: () => ({
    valid: false,
    name: store.state.me.name || null,
    nameRules: [
      v => !!v || 'Name is required',
      v => /^[a-zA-Z]+$/.test(v) || 'No special character allowed',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters'
    ],
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    races
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        $store.state.name = this.name
        // this.$router.push()
      }
    },
    info () {
      if (this.$refs.form.validate()) {
        $store.state.name = this.name
        // this.$router.push()
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
  width: auto;
}
.class-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}
.class-info-button {
  margin: 0.2rem;
}
</style>
