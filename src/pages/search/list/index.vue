<template>
  <div id="list">
    <div class="search">
      <div class="search-body">
        <div class="icon" @click="show=true">
          <van-icon name="search" class="icon" color="#707070" size="26rpx" />
          {{district}} 
        </div>
        <input class="search-input" v-model="form.title" placeholder="请输入小区关键字" />
      </div>
    </div>
    <div></div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="httpStoreList()"
      :immediate-check="false"
      class="list"
    >
      <ol-search-card :info="item" v-for="(item,index) in list" :key="index"></ol-search-card>
    </van-list>
        <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="confirm" @cancel="cancel" :value="Areaval" />
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>