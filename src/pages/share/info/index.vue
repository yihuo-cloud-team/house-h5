<template>
  <div id="info">
    <van-swipe :loop="false" :width="226" :show-indicators="false">
      <van-swipe-item v-for="(item,i) in info.img_list" :key="i">
        <img class="swiper-img" v-lazy=" $getUrl(item)" />
      </van-swipe-item>
    </van-swipe>

    <div id="info-card">
      <div id="info-card-title">title</div>
      <div id="info-card-text">text</div>
      <div id="info-card-price">
        <span class="price">&yen;price</span>
        <span class="text">/月</span>
      </div>
    </div>

    <div id="container"></div>

    <div id="info-box">
      <div id="info-box-title">房源信息</div>
      <van-row id="info-box-text">
        <van-col span="12">朝向:  <span class="text">南</span></van-col>
        <van-col span="12">朝向:  <span class="text">南</span></van-col>
        <van-col span="12">朝向:  <span class="text">南</span></van-col>
        <van-col span="12">朝向:  <span class="text">南</span></van-col>
        <van-col span="12">朝向:  <span class="text">南</span></van-col>
      </van-row>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>