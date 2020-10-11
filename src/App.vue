<template>
  <div id="app">
    <router-view></router-view>
    <foot-nav/>
  </div>
</template>

<script>

import footNav from './components/index/footNav';

export default {
  components: {
    footNav
  }
}

</script>

<style lang="less">
</style>
