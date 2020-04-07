<template>
  <div id="list">
    <!-- <view class="share-list" bindtap="o-router" data-url="/pages/share/info/info?id={{item.id}}">
            <view class="share-article">
                <image class="img" src="{{item.link}}"></image>
                <image class="img" mode="aspectFill" src="{{item.img_list.length > 0 ? item.img_list[0] : ''}}"></image>
                <view class="share-article-box">
                    <view class="share-article-name">{{item.title}}</view>
                    <view class="share-article-time">
                        {{item.bedroom}}室{{item.room}}厅{{item.wc}}卫
                    </view>
                    <view class="share-article-info">
                        {{item.fill}} | {{item.towards}} | {{item.area}} ㎡
                        <text>²</text>
                    </view>
                </view>
                <view class="left-article">{{item.price}} 万元</view>
            </view>
    </view>-->
    <van-pull-refresh v-model="isLoading" @refresh="updateInit">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="update">
        <div class="box">
          <div
            v-for="(item,index) in list"
            :key="index"
            class="card"
            @click="$router.push(`/share/info?id=${item.id}`)"
          >
            <van-image
              class="move-image"
              fit="cover"
              :src="item.img_list.length>0?item.img_list[0]:''"
              alt
            />
            <div class="card-body">
              <div class="title-name">{{item.title}}</div>
              <div class="roominfo">{{item.bedroom}}室{{item.room}}厅{{item.wc}}卫</div>
              <div class="info">{{item.fill}} | {{item.towards}} | {{item.area}} ㎡</div>
              <div class="price">￥{{item.price}}</div>
            </div>
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