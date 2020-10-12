<template>
  <div>
    <my-top :tongList="tongList" :travelList="travelList.Z"/>
    <my-hot :tongList="tongList.popularPlay" />
    <my-day :plate="tongList.plate" />
  </div>
</template>
<script>
import MyTop from "../../components/travel/Ttop";
import MyHot from "../../components/travel/Thot";
import MyDay from "../../components/travel/Tday";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    MyTop,
    MyHot,
    MyDay,
  },
  computed: mapState({ tongList: "tongList", travelList: "travelList" }),
  mounted() {
    this.$store.dispatch("getTongList");
  },
  methods: {},
};
</script>
