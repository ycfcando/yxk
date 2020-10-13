<template>
    <div class="apps">
        <me-header></me-header>

        <router-view></router-view>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'


import MeHeader from '../../components/meet.jx/Header'
import MeMain from '../../components/meet.jx/Memain'
import MeFooder from '../../components/meet.jx/Fooder'
export default {
   components:{
       MeHeader
   },
   
}
</script>

<style lang="less" scoped>
    
   
</style>