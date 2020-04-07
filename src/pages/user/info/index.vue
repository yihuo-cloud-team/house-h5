<template>
  <div id="user">
    <div class="user-info">
      <div class="info-image">
        <!-- <img class="img" :src="$getUrl(userInfo.wx_head)" /> -->
        <img class="img" src="http://img3.imgtn.bdimg.com/it/u=378824344,1185609431&fm=26&gp=0.jpg" />
      </div>
      <!-- <div class="user-name">{{userInfo.wx_name}}</div> -->
      <div class="user-name">用户名</div>
    </div>
    <div class="user-member">会员到期时间：2020年3月31日</div>
    <!-- <div>
      <van-cell-group>
        <van-cell title="用户信息" to="/user/save" is-link />
        <van-cell title="会员充值中心" to="/amount/recharge" is-link />
        <van-cell title="我的订单" to="/order/record" is-link />
        <van-cell title="发布任务" to="/task/edit" is-link />
        <van-cell title="我的发布" to="/task/release" is-link />
        <van-cell title="我申请的任务" is-link />
        <van-cell title="我接到的任务" to="/task/join" is-link />
        <van-cell title="平台行业排行榜" is-link />
        <van-cell title="我的提现" to="/amount/cash" is-link />
        <van-cell title="活动" is-link />
        <van-cell title="投诉与建议" to="/user/mention" is-link />
        <van-cell title="帮助说明" to="/user/help" is-link />
      </van-cell-group>
    </div>-->
    <!-- <div class="btn" @click="signOut">退出登录</div> -->
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>