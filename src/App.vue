<template>
  <div id="app">
    <main>
      <nav class="navbar has-shadow">
        <div class="container" style="justify-content: center;">
          <div class="navbar-tabs">
            <router-link to="/" :class="[ 'navbar-item', 'is-tab', { 'is-active' : false } ]">Order</router-link>
            <router-link to="/cooking" :class="[ 'navbar-item', 'is-tab', {'is-active': false } ]">Cook</router-link>
            <router-link to="/billing" :class="[ 'navbar-item', 'is-tab', {'is-active': false } ]">Bill</router-link>
          </div>
        </div>
      </nav>
      <section class="section">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      route: ''
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
@import "../node_modules/bulma/css/bulma.css";
@import "../node_modules/font-awesome/css/font-awesome.css";

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.router-link-exact-active {
  border-bottom: 3px solid #00d1b2
}

</style>
