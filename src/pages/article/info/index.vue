<template>
  <div id="info">
    <div class="info-head">
      <div class="title">{{info.title}}</div>
      <div class="head-body">
        <div class="ftitle">{{info.sub_title}}</div>
        <div class="time">{{info.add_time}}</div>
      </div>
    </div>
    <div v-html="info.content"></div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>