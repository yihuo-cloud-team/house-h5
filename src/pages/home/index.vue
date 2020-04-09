<template>
  <div id="home">
    <div class="search">
     <div class="search-box" @click="$router.push('/search/list')">
      <van-icon name="search" size="18"></van-icon>
      {{info?info:""}}
    </div>
    </div>
    <div class="move">
      <div class="title">
        <div class="title-big">
          <div class="label"></div>房屋动态
        </div>
        <div class="title-more" @click="go">查看更多></div>
      </div>
      <div class="card-box-all">
        <div class="card-box">
          <div class="box" v-for="(item,index) in sharelist" :key="index" @click="o-router">
            <div class="card">
              <van-image
                class="move-image"
                fit="cover"
                :src="item.img_list.length>0?item.img_list[0]:''"
                alt
              />
              <div class="card-body">
                <div class="card-title-info">
                  <div class="title-info-one">{{item.bedroom}}室{{item.room}}厅{{item.wc}}卫</div>
                  <div class="title-info-two">{{item.fill}} | {{item.towards}}</div>
                </div>
                <div class="title-name">{{item.title}}</div>
                <div class="card-price">
                  <div class="price">{{item.price}}</div>
                  <div class="area">{{item.area}} ㎡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list-title">
        <div class="list-title-big">
          <div class="label"></div>新闻动态
        </div>
        <div class="list-title-more" @click="$router.push(`/article/list`)">查看更多></div>
      </div>
      <div class="paper-list" v-for="(item,index) in list" :key="index" @click="details(item)">
        <div class="article">
          <div class="article-info-panel">
            <div class="article-box">
              <div class="article-title">{{item.title}}</div>
              <div class="article-sub_title">{{item.sub_title}}</div>
            </div>
            <div class="article-info">{{item.newdata}}</div>
          </div>
          <van-image class="img" fit="cover" :src="item.first_img"></van-image>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>