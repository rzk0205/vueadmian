<template>
  <div class="tags-view-container">
    <ul class="tags-view-list">
      <li
        class="tags"
        v-for="(item, index) in tagsView"
        :key="item"
        :class="{ active: item.path === $route.path }"
        @click="handleSelectTag(item.path)"
      >
        {{ item.title }}
        <span
          v-if="$route.path === item.path"
          @click.stop="handleCloseTag(index)"
        >
          x
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, watch } from 'vue'

const store = useStore()
const router = useRouter()
const route = useRoute()
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsview', obj)
    }
  },
  { immediate: true, deep: true }
)
const tagsView = computed(() => {
  return store.getters.tagsView
})
const handleSelectTag = (path) => {
  router.push(path)
}
const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagItem', index)
}
</script>

<style scoped lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  padding: 0 10px;
  box-sizing: border-box;
  // background-color: red;
  overflow-x: scroll;
  .tags-view-list {
    // display: flex;
    // overflow-x: auto;
    .tags {
      list-style: none;
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
    }
  }
  .tags.active {
    background-color: #fff;
    color: #409eff;
    // &::before {
    //   content: '';
    //   background: #fff;
    //   display: inline-block;
    //   width: 8px;
    //   height: 8px;
    //   border-radius: 50%;
    //   position: relative;
    //   margin-right: 4px;
    // }
  }
}
</style>
