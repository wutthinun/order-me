<template>
    <div class="columns columns-menu-margin is-gapless is-mobile">
      <div class="column">
        <div>
          <figure class="image-menu is-48x48">
            <img src="http://bulma.io/images/placeholders/48x48.png">
          </figure>
          <small>Bread</small>
        </div>
      </div>
      <div class="column">
        <div>
          <figure class="image-menu is-48x48">
            <img src="http://bulma.io/images/placeholders/48x48.png">
          </figure>
          <small>Coffee</small>
        </div>
      </div>
      <div class="column">
       <div>
          <figure class="image-menu is-48x48">
            <img src="http://bulma.io/images/placeholders/48x48.png">
          </figure>
          <small>Milk</small>
        </div>
      </div>
      <div class="column">
        <div>
          <figure class="image-menu is-48x48">
            <img src="http://bulma.io/images/placeholders/48x48.png">
          </figure>
          <small>Bingsu</small>
        </div>
      </div>
      <div class="column">
       <div>
          <figure class="image-menu is-48x48">
            <img src="http://bulma.io/images/placeholders/48x48.png">
          </figure>
          <small>Toast</small>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: [],
  name: 'menus',
  data () {
    return {
      msg: 'Menus'
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style>
.image-menu {
  position:relative;
  height: 48px;
}

.columns-menu-margin {
  margin-bottom: 0px!important;
}
</style>
