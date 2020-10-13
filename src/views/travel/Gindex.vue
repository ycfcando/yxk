<template>
  <div>
    <my-top :tongList="guoList" :travelList="travelList.G" />
    <my-mdd :mddList="guoList.mdd" />
    <my-hot :tongList="guoList.topProduct" />
    <my-list :flowTags="guoList.flowTags"/>
  </div>
</template>
<script>
import MyTop from "../../components/travel/Ttop";
import MyHot from "../../components/travel/Thot";
import MyMdd from "../../components/travel/Tmdd";
import MyList from "../../components/travel/Tglist";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    MyTop,
    MyHot,
    MyMdd,
    MyList
  },
  computed: mapState({ guoList: "guoList", travelList: "travelList" }),
  mounted() {
    this.$store.dispatch("getGuoList");
  },
};
</script>
<style lang="less" scoped>
</style>