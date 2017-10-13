<template>
  <div class="login-wrapper columns">
    <div class="column is-8 is-hidden-mobile hero-banner">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div class="container section">
            <div class="has-text-right">
              <h1 class="title is-1">Please Login</h1><br>
              <p class="title is-3">Secure User Account Login</p>
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered">Image © Glenn Carstens-Peters via unsplash</p>
        </div>
      </section>
    </div>
    <div class="column is-4">
      <section class="hero is-fullheight">
        <div class="hero-heading">
          <div class="section has-text-centered">
            <span><strong style="color: #2544E3;font-size: 1.5em;">ORDER</strong>ME</span>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <h1 class="avatar has-text-centered section">
                  <img src="https://placehold.it/128x128">
                </h1>
                <div class="login-form">
                  <div class="field">
                    <div class="control has-icons-left has-icons-right">
                      <input v-model="shopId" @keyup="onChangeShopId" :class="['input', 'shop-id-input',  {'is-danger': isInvalid}]" type="text" placeholder="รหัสร้าน">
                      <span class="icon user">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <p v-if="isInvalid" class="help is-danger">ไม่พบรหัสร้านนี้</p>
                  </div>
                  <p class="control login">
                    <button @click="doLogin" class="button is-success is-outlined is-large is-fullwidth">Login</button>
                  </p>
                </div>
                <div class="section forgot-password">
                  <p class="has-text-centered">
                    <!-- <a href="#">Forgot password</a>
                    <a href="#">Need help?</a> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import db from '../firebase.conf'

export default {
  data () {
    return {
      isInvalid: false,
      shopId: ''
    }
  },
  methods: {
    onChangeShopId () {
      this.isInvalid = false
    },
    doLogin () {
      db.ref('/shop_id/' + this.shopId).once('value').then(snapshot => {
        if (snapshot.val()) {
          this.$router.push({path: 'menus'})
        } else {
          this.isInvalid = true
        }
      })
    }
  }
}
</script>

<style>


.shop-id-input,
.password-input {
  border-radius: 40px;
  font-size: 20px;
  padding-left: 15px;
  color: #95A5A6;
  margin-bottom: 0.3em;
}

.icon.user,
.icon.password {
  margin: 5px 10px 0 0;
}

.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
}

.forgot-password a {
  color: #95A5A6;
  font-weight: bold;
  padding-right: 20px;
}

.login {
  padding-top: 20px;
}

.login button {
  border-radius: 40px;
  font-weight: bold;
}

.hero-body .container {
  margin-top: -100px;
}

.hero.is-dark .section {
  background-color: transparent;
}

.login-wrapper {
  margin: -0.75rem;
  overflow-y: hidden;
}

.hero-banner .hero {
  background: url('https://picsum.photos/2000/1000/?random');
  background-position: center;
  background-size: cover;
  background-blend-mode: screen;
}

.hero-banner .title {
  display: inline-block;
  padding: 5px;
}
</style>
