<template>
  <div class="ol-house-card">
    <div class="list" >
      <div class="item-img">
        <van-image
          :radius="4"
          :width="105"
          :height="80"
          fit="cover"
          :src="$getUrl(info.img_list[0])"
        ></van-image>
      </div>
      <div class="item-info">
        <div class="title">{{info.title}}</div>
        <div class="info">{{info.bedroom}}室{{info.room}}厅 ‧ {{info.area}}㎡ </div>
 
        <div class="label">
          <van-tag
          color='#ACAAAD'

            style="margin-right:3px"
            plain
            v-for="(item,index) in info.label"
            :key="index"
          >{{item}}</van-tag>
        </div>
        <div class="price">
          <span style="  color: #E37D6B;font-weight: bold;">￥</span><span class="span">{{info.price}}</span>/月
        </div>
  
      </div>
    </div>
  </div>
</template>
<script src="./OlHouseCard.js"></script>
<style lang="scss" scoped>
@import "OlHouseCard.scss";
</style>