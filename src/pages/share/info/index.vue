<template>
  <div id="info">
    <van-swipe :loop="false" :width="226" :show-indicators="false">
      <van-swipe-item v-for="(item,i) in info.img_list" :key="i">
        <img class="swiper-img" v-lazy=" $getUrl(item)" />
      </van-swipe-item>
    </van-swipe>

    <div id="info-card">
      <div id="info-card-title">{{info.title}}</div>
      <div id="phone-btn-box">
        <van-icon id="phone-btn" name="phone-o" size="28" color='#FFF' />
      </div>
      <!-- <div id="info-card-remarks">
        {{info.remarks}}
      </div> -->
      <div id="info-card-text">
        <span>朝{{info.towards}}</span>
        <span>{{info.area}}m&sup2;</span>
        <span>{{info.type}}</span>
      </div>
      <div id="info-card-price">
        <span class="price">&yen;{{info.price}}</span>
        <span class="text">/月</span>
      </div>
    </div>

    <div id="container"></div>

    <div id="info-box">
      <div id="info-box-title">房源信息</div>
      <van-row id="info-box-text">
        <van-col span="12">编号<span class="text">{{info.id}}</span></van-col>
        <van-col span="12">朝向<span class="text">{{info.towards}}</span></van-col>
        <van-col span="12">户型<span class="text">{{info.bedroom}}室{{info.room}}厅{{info.wc}}卫</span></van-col>
        <van-col span="12">建面<span class="text">{{info.area}}m&sup2;</span></van-col>
        <van-col span="12">风格<span class="text">{{info.fill}}</span></van-col>
        <van-col span="12">楼层<span class="text">{{info.type}}/{{info.floor}}</span></van-col>
      </van-row>
    </div>

    <div id="remarks-box">
      <div id="remarks-box-title">房屋备注</div>
      <div>{{info.remarks}}</div>
      <div class="time-box">
        <span>
          发布：{{info.add_time}}
        </span>
        <span>
          更新：{{info.edit_time}}
        </span>
      </div>
    </div>

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>