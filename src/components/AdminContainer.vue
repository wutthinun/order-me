<template>
   <div>
    <headers />
    <section>
      <div class="tabs is-centered is-boxed">
        <ul>
          <li @click="toggleTabs('cooking')" :class="[{'is-active': tabActive === 'cooking'}]">
            <a>
              <span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
              <span>รายการที่สั่ง</span>
            </a>
          </li>
          <li @click="toggleTabs('billing')" :class="[{'is-active': tabActive === 'billing'}]">
            <a>
              <span class="icon is-small"><i class="fa fa-calculator"></i></span>
              <span>คิดเงิน</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="content">
        <div id="tab-cooking-content" :class="[{'is-hidden': tabActive != 'cooking'}]">
          <cooking />
        </div>
        <div id="tab-billing-content" :class="[{'is-hidden': tabActive != 'billing'}]">
          <billing />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Headers from '@/components/Header'
import Cooking from '@/components/Cooking'
import Billing from '@/components/Bill'
export default {
  props: [],
  name: 'admin-container',
  components: {
    'headers': Headers,
    'cooking': Cooking,
    'billing': Billing
  },
  data () {
    return {
      tabActive: 'cooking'
    }
  },
  methods: {
    toggleTabs (name) {
      this.tabActive = name
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>

