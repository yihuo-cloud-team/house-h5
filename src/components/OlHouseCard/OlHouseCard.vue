<template>
  <div class="ol-house-card">
    <div class="list" v-for="i in 10" :key="i">
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
        <div class="info">合租 | {{info.bedroom}}室{{info.room}}厅 ‧ {{info.area}}㎡ ‧ 2/19层</div>
        <div class="position">距您3.5公里,距9号线松江体育中心站721米</div>
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