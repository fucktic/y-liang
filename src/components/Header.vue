<template>
  <header>
    <ul>
      <li
        @click="handleClickTab(item)"
        v-for="(item, index) in tabList"
        :key="index"
        :class="item.select ? 'is-select' : ''"
      >
        {{ item.name }}
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from "vue";
const tabList = ref([
  {
    name: "移动端",
    select: true,
  },
  {
    name: "PC",
    select: false,
  },
  {
    name: "可视化大屏",
    select: false,
  },
  {
    name: "平面设计",
    select: false,
  },
]);
const emits = defineEmits(["tab-change"]);
const handleClickTab = (item) => {
  tabList.value.forEach((ele) => {
    ele.select = false;
  });
  item.select = true;
  emits("tab-change", []);
};
</script>

<style lang="scss" scoped>
header {
  border-top: 1px solid rgba(218, 216, 216, 0.78);
  background: #ffffff;
  height: 64px;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    height: 36px;
    overflow-x: auto;
    li {
      padding: 7px 16px;
      border-radius: 18px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #000000;
      font-weight: 500;
      margin-right: 12px;
      background: #f7f9fa;
    }
    .is-select {
      color: #ffffff;
      background: #000000;
    }
  }
}
</style>
