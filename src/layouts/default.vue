<template>
  <div class="default">
    <nuxt class="view-body" />
    <van-tabbar route v-model="active" :fixed="false" active-color="#55C7C7">
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/share/list" icon="fire-o">热门推荐</van-tabbar-item>
      <!-- <van-tabbar-item replace to="/idea/add" icon="comment-o">XX</van-tabbar-item> -->
      <van-tabbar-item replace to="/user/info" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "root",
  data() {
    return {
      active: 0
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
