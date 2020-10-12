<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="service" text="联系客服"  color="#ffd800" @click="onClickIcon" />
            <van-goods-action-icon icon="star-o" text="收藏" @click="onClickIcon" />
            <van-goods-action-icon icon="friends-o" text="进群" @click="onClickIcon" />
            <van-goods-action-button
                type="warning"
                text="立即报名"
                @click="onClickButton"
            />
        </van-goods-action>
    </div>
</template>


<script>
import { Toast } from 'vant';
export default {
  methods: {
    onClickIcon() {
      Toast('已经成功');
    },
    onClickButton() {
      Toast('报名成功');
    },
  },
}
</script>