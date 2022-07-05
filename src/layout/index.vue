<template>
  <div class="app-wrapper">
    <Sideber class="sideber-container"></Sideber>
    <div class="main-container">
      <div class="fixed-header">
        <HeaderNav></HeaderNav>
        <tag-view></tag-view>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from './HeaderNav'
import AppMain from './AppMain.vue'
import Sideber from './Sideber'
import TagView from '../components/TagView'
</script>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.sideber-container {
  height: 100%;
  width: 210px;
  background-color: #545c64;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  /*去除滚动条 */
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}
.main-container {
  width: calc(100% - 210px);
  margin-left: 210px;
  height: 100%;
  position: relative;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 210px);
    z-index: 99;
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
