<template>
    <div>detail {{ $route.params.id }}
        <van-swipe class="detail-swipe" :autoplay="3000" @change="onChange" v-if="detailInfo.imgArr">
            <van-swipe-item v-for="(item, index) in detailInfo.imgArr" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/{{ detailInfo.imgArr.length }}
                </div>
            </template>
        </van-swipe> 
    </div>
</template>

<script>
export default {
   data() {
       return {
            productId: '',
            current: 0
       }
   },
    created() {
        this.productId = this.$route.params.id
    },
    computed: {
        detailInfo() {
            return this.$store.state.detailInfo
        }
    },
    mounted() {
        this.$store.dispatch('getDetail', {
            productId: this.productId
        })
    },
    // 动态参数改变时触发
    beforeRouteUpdate(to) {
        // console.log(to)
            this.productId = to.params.id
            this.$store.dispatch('getDetail', {
            productId: this.productId
        })
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onChange(index) {
            this.current = index
        },
    },
};
</script>
<style lang='less' scoped></style>


