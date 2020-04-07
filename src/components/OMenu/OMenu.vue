<template>

  <div class="nav-list">
    <div v-if="!item.group" :class="['nav-item',{'active':getActive(item)}]" @click.stop="$router.push(item.url)" v-for="item in list" :key="item.url">
      <i :class="`icon `+item.icon" v-if="item.icon"></i>
      <div class="label">{{item.label}}</div>
      <slot></slot>
    </div>
    <div v-else class="nav-group-title">
      {{item.group}}
    </div>
  </div>
  <!-- <el-menu v-if="false" router class="o-menu" background-color="#fff" text-color="#333" active-text-color="#333">
      <el-submenu index="job">
        <template slot="title">
          <span>招聘管理</span>
        </template>
        <el-menu-item index="/job/list" :route="{path:'/job/list'}">职位列表</el-menu-item>
      </el-submenu>
      <el-submenu index="liuyan">
        <template slot="title">
          <span>留言系统</span>
        </template>
        <el-menu-item index="/liuyan/list" :route="{path:'/liuyan/list'}">用户留言</el-menu-item>
      </el-submenu>
      <el-submenu index="tuwen">
        <template slot="title">
          <span>图文系统</span>
        </template>
        <el-menu-item index="/tuwen/list" :route="{path:'/tuwen/list'}">图文列表</el-menu-item>
      </el-submenu>
      <el-submenu index="store">
        <template slot="title">
          <span>门店管理</span>
        </template>
        <el-menu-item index="/store/list" :route="{path:'/store/list'}">门店列表</el-menu-item>
      </el-submenu>
      <el-submenu index="app">
        <template slot="title">
          <span>应用管理</span>
        </template>
        <el-menu-item index="/app/list" :route="{path:'/app/list'}">应用列表</el-menu-item>
      </el-submenu>
      <el-submenu index="domain">
        <template slot="title">
          <span>组织管理</span>
        </template>
        <el-menu-item index="/domain/list" :route="{path:'/domain/list'}">组织列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/goods" :route="{path:'/goods'}">商品管理</el-menu-item> -->

  <!-- <el-submenu index="goods">
      <template slot="title">
        <span>商品管理</span>
      </template>
      <el-menu-item index="/goods/list" :route="{path:'/goods/list'}">商品列表</el-menu-item>
    </el-submenu> -->
  <!-- </el-menu> -->

</template>
<script src="./OMenu.js"></script>
<style lang="scss" scoped>
@import "OMenu.scss";
</style>