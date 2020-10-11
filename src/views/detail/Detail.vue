<template>
    <div class="detail-wrap">
        <de-tail></de-tail>
        <ma-in></ma-in>
        <foo-ter></foo-ter>
    </div>
</template>

<script>
import DeTail from '../../components/detail/Swiper'
import MaIn from '../../components/detail/Main'
import FooTer from '../../components/detail/Footer'

export default {
    components:{
        DeTail,
        MaIn,
        FooTer
    }
}
</script>