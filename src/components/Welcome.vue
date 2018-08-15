<template>
  <v-container fluid class="main-container">
    <v-layout>
      <nav class="navbar">
        <ul>
          <!-- <li><i class="material-icons">home</i></li> -->
          <li><img src="../assets/shield.svg" alt="Shield"></li>
          <li><a href="javascript:;">SKILLS</a></li>
          <li><a href="javascript:;">PROJECTS</a></li>
          <li><a href="javascript:;">CONTACT</a></li>
        </ul>
      </nav>
      <header class="header">
        <div class="welcome-msg">
          <div class="left">
            <!-- <h1>Welcome to my Space</h1> -->
            <h1>Lorem ipsum dolor</h1>
            <span>lorem ipsum dolor sit amet</span>
          </div>
          <div class="right">
            <!-- <h1>Welcome to my Space</h1> -->
            <h1>Lorem ipsum dolor</h1>
            <span>lorem ipsum dolor sit amet</span>
          </div>
        </div>
      </header>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/vuex/store'

export default {
  props: {
    msg: String
  },
  data: () => ({

  }),
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  padding: 0;
}
.header {
  height: 800px;
  width: 100vw;
  background-image: url('../assets/shield.jpg');
  /* background-image: url('../assets/header.jpg'); */
  background-size: cover;
  background-position: 0;
  padding: 0;
}
.welcome-msg {
  display: flex;
  color: aliceblue;
  font-family: 'Ubuntu', sans-serif;
  height: 100%;
  justify-content: space-between;
}
.welcome-msg .left {
  padding-top: 15rem;
  padding-left: 10rem;
}
.welcome-msg .right {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  padding-bottom: 16rem;
  padding-right: 10rem;
}
.welcome-msg .right span{
  align-self: flex-end;
}
.welcome-msg h1 {
  font-size: 56px;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1);
}
.welcome-msg span {
  font-size: 24px;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1);
}

.navbar {
  position: absolute;
  color: aliceblue;
  width: 100%;
  font-size: 22px;
}
.navbar ul {
  position: relative;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  right: 5rem;
  top: 1rem;
}
.navbar li {
  padding: 0.5rem;
}
.navbar li i {
  font-size: 32px;
}
.navbar li img {
  height: 32px;
  width: 32px;
}
.navbar li a {
  text-decoration: none;
  color: aliceblue;
  /* background-image: linear-gradient(141deg, red 0%, white 50%, #2cb5e8 75%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */

  text-shadow: 0px 4px 3px rgba(0,0,0,0.4);

  -o-transition: .5s;
  -ms-transition: .5s;
  -moz-transition: .5s;
  -webkit-transition: .5s;
  transition: .5s all;
}
.navbar li a:hover {
  background-image: linear-gradient(141deg, red 0%, white 50%, #2cb5e8 75%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
