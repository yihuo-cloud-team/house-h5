<template>
  <div id="list">
    <div class="search">
      <div class="search-body">
        <van-icon name="search" class="icon" color="#707070" size="26rpx" />
        <input class="search-input" v-model="form.title" placeholder="请输入小区关键字" />
      </div>
    </div>
    <div class="house-list">
      <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
        bindtap="o-router"
        data-url="/pages/share/info/info?id={{item.id}}"
      >
        <div class="item-left">
          <div class="item-title">{{item.title}}</div>
          <div class="item-date">{{item.newdata}}</div>
        </div>
        <div class="item-center">
          <div class="fyinfo">
            <div class="item-room">{{item.bedroom+'室'+item.room+'厅'+item.wc+'卫'}}</div>
            <div class="item-fill-to">
              <div class="item-fill">{{item.fill}}</div>
              <div class="item-to">{{item.towards}}</div>
            </div>
          </div>
        </div>
        <div class="item-right">
          <div class="item-price">{{item.price}}</div>
          <div class="item-area">{{item.area}} ㎡</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>