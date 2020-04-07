<template>
  <div id="login">
    <p class="text">轻触头像以登录</p>
    <div class="people">
      <img class="img" :src="$getUrl(userInfo.wx_head)" alt @click="submit()" />
      <div class="name">{{userInfo.wx_name}}</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
