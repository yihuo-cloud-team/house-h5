<template>
  <div id="test">
    <ol-house-card :info="item" v-for="item in list " :key="item.id"></ol-house-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>