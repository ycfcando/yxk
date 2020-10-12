<template>
  <div>
    <my-top :tongList="guoList" :travelList="travelList.G" />
    <my-mdd :mddList="guoList.mdd" />
    <my-hot :tongList="guoList.topProduct" />
  </div>
</template>
<script>
import MyTop from "../../components/travel/Ttop";
import MyHot from "../../components/travel/Thot";
import MyMdd from "../../components/travel/Tmdd";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    MyTop,
    MyHot,
    MyMdd,
  },
  computed: mapState({ guoList: "guoList", travelList: "travelList" }),
  mounted() {
    this.$store.dispatch("getGuoList");
  },
};
</script>
<style lang="less" scoped>
</style>