<template>
   <div>
    <headers />
    <section>
      <nav class="navbar has-shadow">
        <div class="container" style="justify-content: center;">
          <div class="navbar-tabs">
            <router-link to="/cooking" :class="[ 'navbar-item', 'is-tab', {'is-active': false } ]">Cook</router-link>
            <router-link to="/billing" :class="[ 'navbar-item', 'is-tab', {'is-active': false } ]">Bill</router-link>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import Headers from '@/components/Header'
export default {
  props: [],
  name: 'admin-container',
  components: {
    'headers': Headers
  },
  data () {
    return {
      msg: 'Admin Container'
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style>
</style>

