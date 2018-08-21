<template>
  <v-container fluid class="main-container">
    <v-layout>
      <nav class="navbar navbar-fixed">
        <ul>
          <!-- <li><i class="material-icons">home</i></li> -->
          <li><img src="../assets/shield.svg" alt="Shield"></li>
          <!-- <li><a href="javascript:;">ABOUT</a></li> -->
          <!-- <li><a href="javascript:;">SKILLS</a></li> -->
          <!-- <li><a href="javascript:;">PROJECTS</a></li> -->
          <!-- <li><a href="javascript:;">CONTACT</a></li> -->
          <li><a href="javascript:;">LOREM</a></li>
          <li><a href="javascript:;">IPSUM</a></li>
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
    <v-layout class="v-skills">
      <!-- <h1>&rsaquo; Skills</h1> -->
      <h1>&rsaquo; Lorem</h1>
      <section class="skills">
        <div class="skills-left">
          <div class="block-left">
            <ul>
              <li v-for="skill in skillsLeft">
                <span>{{ skill.label }}</span>
                <v-progress-linear v-model="skill.value" color="lighten-1 blue"></v-progress-linear>
              </li>
            </ul>
          </div>
          <div class="block-right">
            <ul>
              <li v-for="skill in skillsRight">
                <span>{{ skill.label }}</span>
                <v-progress-linear v-model="skill.value" color="red"></v-progress-linear>
              </li>
            </ul>
          </div>
        </div>
        <div class="skills-right">
          <ul>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                class="blue-cap"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                color="red"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                class="blue-cap"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                color="red"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                class="blue-cap"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                color="red"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                class="blue-cap"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
            <li>
              <v-progress-circular
                :rotate="-90"
                :size="160"
                :width="20"
                :value="value"
                color="red"
              >
                {{ value }} Lorem
              </v-progress-circular>
            </li>
          </ul>
        </div>
      </section>
    </v-layout>
    <v-layout class="v-gallery">
      <section>
        <ul>
          <li v-for="item in gallery">
            <div class="gallery-item">
              <header>{{ item.header }}</header>
              <img :src="item.src" :alt="item.alt">
              <span>{{ item.about }}</span>
            </div>
          </li>
        </ul>
      </section>
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
    valueDeterminate: 50,
    interval: {},
    value: 0,
    skillsLeft: [
      { label: 'Lorem', value: (Math.random() * 100) },
      { label: 'Ipsum', value: (Math.random() * 100) },
      { label: 'Dolor', value: (Math.random() * 100) },
      { label: 'Sit', value: (Math.random() * 100) },
      { label: 'Amet', value: (Math.random() * 100) },
      { label: 'Lorem', value: (Math.random() * 100) },
      { label: 'Ipsum', value: (Math.random() * 100) },
    ],
    skillsRight: [
      { label: 'Lorem', value: (Math.random() * 100) },
      { label: 'Ipsum', value: (Math.random() * 100) },
      { label: 'Dolor', value: (Math.random() * 100) },
      { label: 'Sit', value: (Math.random() * 100) },
      { label: 'Amet', value: (Math.random() * 100) },
      { label: 'Lorem', value: (Math.random() * 100) },
      { label: 'Ipsum', value: (Math.random() * 100) },
    ],
    gallery: [
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
      { header: 'Lorem Ipsum', src: require('../assets/header.jpg'), alt: 'Lorem Ipsum', about: 'Lorem Ipsum Dolor Sit Amet'},
    ]
  }),
  methods: {},
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value >= 100) {
        return (this.value = 0)
      }

      this.value += this.getRandomValue(1, 10)

    }, 1000)
    this.getRandomValue = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)

      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.main-container
  padding 0

.header
  height 800px
  width 100vw
  background-image url('../assets/shield.jpg')
  background-size cover
  background-position 0
  padding 0

.welcome-msg
  display flex
  color aliceblue
  font-family 'Ubuntu', sans-serif
  height 100%
  justify-content space-between

  & .left
    padding-top 15rem
    padding-left 10rem

  & .right
    display flex
    align-self flex-end
    flex-direction column
    padding-bottom 16rem
    padding-right 10rem

    & span
      align-self flex-end

  & h1
    font-size 56px
    text-shadow 0px 4px 3px rgba(0,0,0,0.4),
                0px 8px 13px rgba(0,0,0,0.1),
                0px 18px 23px rgba(0,0,0,0.1)

  & span
    font-size 24px
    text-shadow 0px 4px 3px rgba(0,0,0,0.4),
                0px 8px 13px rgba(0,0,0,0.1),
                0px 18px 23px rgba(0,0,0,0.1)

.navbar
  position absolute
  color aliceblue
  width 100%
  font-size 22px

  & ul
    position relative
    display flex
    justify-content flex-end
    list-style none
    right 5rem
    top 1rem

    & li
      padding 0.5rem

    & li i
      font-size 32px

    & li img
      height 32px
      width 32px

    & li a
      text-decoration none
      color aliceblue
      text-shadow 0px 4px 3px rgba(0,0,0,0.4)
      -o-transition .5s
      -ms-transition .5s
      -moz-transition .5s
      -webkit-transition .5s
      transition .5s all

    & li a:hover
      background-image linear-gradient(141deg, red 0%, white 50%, #2cb5e8 75%)
      background-clip text
      -webkit-background-clip text
      color transparent

/** skills **/
.v-skills
  padding 5rem
  display flex
  flex-direction column

  & h1
    font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    font-size 32px

.skills
  display flex

  & ul
    list-style none
    padding 1rem

.skills-left
  display flex
  flex 1

  & .block-left
    flex 1

  & .block-right
    flex 1

.skills-right
  flex 1

  ul
    list-style none
    display flex
    flex-wrap wrap

    li
      padding 1rem


.v-progress-circular
  margin 1rem

.blue-cap
  color #2cb5e8

.blue-cap-bg
  background #2cb5e8

.v-gallery
  display flex
  background-color gray

  section
    ul
      display flex
      flex-wrap wrap
      list-style none

      li
        padding 1.5rem

        &:hover span, &:hover header
          opacity 1

    .gallery-item
      display flex
      flex-direction column
      color white
      position relative

      header
        opacity 0
        position absolute
        padding 1rem
        transition opacity 0.5s

      img
        max-width 30rem

      span
        opacity 0
        position absolute
        bottom 0
        padding 1rem
        transition opacity 0.5s

</style>
