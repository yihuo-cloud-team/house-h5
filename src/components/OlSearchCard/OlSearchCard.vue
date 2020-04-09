<template>
  <div class="ol-search-card">
    <div class="list" @click="$router.push(`/share/info?id=${info.id}`)">
      <div class="img-box">
        <van-swipe :show-indicators="false" @change="onChange" :loop="false">
          <van-swipe-item v-for="(image, index) in info.img_list" :key="index">
            <div class="house-img" :style="`background-image: url(${$getUrl(image )});`">
            
            </div>
          </van-swipe-item>
        </van-swipe>
          <div class="index">
                {{index}}/{{info.img_list.length}}
              </div>
      </div>

      <div class="title">{{info.title}}</div>
      <div class="config">{{info.bedroom}}居室 ‧ {{info.a | areaToStr}}</div>

      <div class="price">
        <span style="font-size:12px">￥</span>
        {{info.price}}
      </div>
    </div>
  </div>
</template>
<script src="./OlSearchCard.js"></script>
<style lang="scss" scoped>
@import "OlSearchCard.scss";
</style>