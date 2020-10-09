<template>
    <div class="apps">
        <me-header></me-header>
        <me-main></me-main>
        <me-fooder></me-fooder>
    </div>
</template>

<script>

import MeHeader from '../../components/meet.jx/Header'
import MeMain from '../../components/meet.jx/Memain'
import MeFooder from '../../components/meet.jx/Fooder'
export default {
   components:{
       MeHeader,
       MeMain,
       MeFooder
   } 
}
</script>

<style lang="less" scoped>
    
    
</style>