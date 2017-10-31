<template>
  <div class="container">
    <div class="columns is-desktop">
      <div class="column is-4">
        <bill-list></bill-list>
      </div>

      <div class="column">
        <bill-detail></bill-detail>
      </div>
    </div>
  </div>
</template>
<script>
import BillList from './BillList'
import BillDetail from './BillDetail'

export default {
  components: {
    'bill-list': BillList,
    'bill-detail': BillDetail
  }
}
</script>

