<template>
  <div id="home">
    <div class="search">
      <search-input v-model="search" @change="Jumplist">
        <!-- <choice-area
          class="choice"
          wx:if="{{address.length > 0}}"
          addressinfo="{{addressinfo}}"
          AddressArr="{{address}}"
          slot="before"
          bind:choice="choiceaddress"
        ></choice-area> -->
      </search-input>
    </div>
    <div class="move"></div>
    <div class="list"></div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>