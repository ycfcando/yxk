<template>
  <div>
    <my-top :tongList="jingList" :travelList="travelList.C" />
    <my-mdd :mddList="jingList.mdd" />
    <my-hot :tongList="jingList.topProduct" />
    <my-tui :recommendList="jingList.recommend" />
    <my-list :flowTags="jingList.flowTags"/>
  </div>
</template>
<script>
import MyTop from "../../components/travel/Ttop";
import MyHot from "../../components/travel/Thot";
import MyMdd from "../../components/travel/Tmdd";
import MyTui from "../../components/travel/Ttui";
import MyList from "../../components/travel/Tclist";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    MyTop,
    MyHot,
    MyMdd,
    MyTui,
    MyList,
  },
  computed: mapState({ jingList: "jingList", travelList: "travelList" }),
  mounted() {
    this.$store.dispatch("getJingList");
  },
};
</script>
<style lang="less" scoped>
</style>