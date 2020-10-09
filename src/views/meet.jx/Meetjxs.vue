<template>
    <div class="apps">
        <me-header></me-header>
       <me-mainjx></me-mainjx>
        <me-fooder></me-fooder>
    </div>
</template>

<script>

import MeHeader from '../../components/meet.jx/Header'
import MeMainjx from '../../components/meet.jx/Memainjx'
import MeFooder from '../../components/meet.jx/Fooder'
export default {
   components:{
       MeHeader,
        MeMainjx,
       MeFooder
   } 
}
</script>

<style lang="less" scoped>
    
    
</style>