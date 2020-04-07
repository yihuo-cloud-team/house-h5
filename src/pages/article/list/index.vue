<template>
  <div id="list">
    <van-pull-refresh v-model="isLoading" style="height: 100%;" @refresh="updateInit">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="update">
        <div class="paper-list" v-for="(item,index) in list" :key="index" @click="details(item)">
          <div class="article">
            <div class="article-info-panel">
              <div class="article-box">
                <div class="article-title">{{item.title}}</div>
                <div class="article-sub_title">{{item.sub_title}}</div>
              </div>
              <div class="article-info">{{item.newdata}}</div>
            </div>
            <image class="img" mode="aspectFill" :src="item.first_img" />
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>