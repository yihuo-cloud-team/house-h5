<template>
  <div id="searchInput">
    <div class="search-box">
      <div class="btn">
        <van-icon class="search-icon" name="search" />
      </div>
      <div class="search-input">
        <van-field
       
        />
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script src="./searchInput.js"></script>
<style lang="scss" scoped>
@import "searchInput.scss";
</style>