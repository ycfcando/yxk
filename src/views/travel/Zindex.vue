<template>
  <div>
    <my-top :tongList="tongList" :travelList="travelList.Z" />
    <my-hot :tongList="tongList.popularPlay" />
    <my-day :plate="tongList.plate" />
    <my-list :flowTags="tongList.flowTag" />
  </div>
</template>
<script>
import MyTop from "../../components/travel/Ttop";
import MyHot from "../../components/travel/Thot";
import MyDay from "../../components/travel/Tday";
import MyList from "../../components/travel/Tzlist";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    MyTop,
    MyHot,
    MyDay,
    MyList,
  },
  computed: mapState({ tongList: "tongList", travelList: "travelList" }),
  mounted() {
    this.$store.dispatch("getTongList");
  },
  methods: {},
};
</script>
