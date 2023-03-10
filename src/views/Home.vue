<script setup>
import { computed, ref } from "vue";
import profileVue from "../components/Profile.vue";
import headerVue from "../components/Header.vue";
import img from "../assets/img.png";
import img1 from "../assets/img1.png";

import iconProject from "../assets/icon_project.svg";
const editShow = ref({});
const showDialog = ref(false);
const isTop = ref(false);
//列数
const columns = ref(5);
// 列间距
const columnGap = ref(15);
//列宽
const columnWidth = ref(216);
//获取的值
const imgList = ref([
  {
    url: img,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img1,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img1,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img1,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    url: img1,
    name: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
]);
//格式化多列的值
const formatImageList = computed(() => {
  if (imgList.value.length === 0) return [];
  let list = [];
  for (let i = 1; i <= columns.value; i++) {
    list.push([]);
  }
  let num = 0;
  imgList.value.forEach((ele) => {
    num === columns.value && (num = 0);
    list[num].push(ele);
    num++;
  });
  return list;
});

const handleClickNode = async (val) => {
  editShow.value = val;
  showDialog.value = true;
};
const tabChange = async (val) => {
  imgList.value = val;
};

//#region 监听页面滚动条
const listenter = () => {
  console.log(document.documentElement.scrollTop, "滚动条高度");

  if (window.pageYOffset >= 348) {
    isTop.value = true;
    document.documentElement.scrollTop = 348;
  } else {
    isTop.value = false;
  }
};
window.addEventListener("scroll", listenter);
//#endregion
</script>

<template>
  <profile-vue></profile-vue>
  <header-vue
    :style="{
      'box-shadow': isTop ? '0px 5px 8px 0px rgba(0, 0, 0, 0.03)' : '',
    }"
    @tab-change="tabChange"
  ></header-vue>
  <main>
    <div
      class="img-list"
      :style="{
        height: isTop ? 'calc(100vh - 64px)' : '',
        margin: '0 ' + columnGap * -1 + 'px',
      }"
    >
      <template v-if="formatImageList.length > 0">
        <div
          v-for="(item, ind) in formatImageList"
          :key="ind"
          class="img-list-node"
          :style="{ width: columnWidth + 'px', margin: '0 ' + columnGap + 'px' }"
        >
          <div
            v-for="(ele, index) in item"
            :key="index"
            class="img-item"
            @click="handleClickNode(ele)"
          >
            <div class="img-item_img">
              <img :src="ele.url" />
              <div class="item-img"></div>
            </div>

            <div class="img-item_footer">
              <img :src="iconProject" class="icon" />
              <span class="name">{{ ele.name }}</span>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div style="text-align: center; font-size: 48px; width: 100%">
          ui懒了,我去找她
        </div>
      </template>
    </div>
  </main>
  <div class="to-top">
    <img src="../assets/icon_top.svg" style="height: 21px; width: 18px" />
  </div>
  <transition name="fade">
    <div id="dialog" v-show="showDialog">
      <div class="close-icon" @click="showDialog = false">
        <img src="../assets/icon_close.svg" />
      </div>
      <div class="body">
        <img :src="editShow.url" :style="{ width: parseInt(columnWidth * 2) + 'px' }" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.to-top {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background: #ffffff;
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  height: 40px;
  width: 40px;
  right: 40px;
  bottom: 100px;
}
main {
  overflow-y: auto;
  overflow-x: hidden;
  margin: 30px 0;
  .img-list {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    &-node {
      .img-item {
        margin-bottom: 20px;
        &_img {
          width: 100%;
          position: relative;
          img {
            width: 100%;
            border-radius: 20px;
          }
          .item-img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.02);
          }
        }
        &_footer {
          display: flex;
          align-items: end;
          margin-top: 10px;
          .icon {
            height: 16px;
            width: 16px;
          }
          .name {
            margin-left: 5px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #1e2023;
            font-weight: 400;
            line-height: 16px;
          }
        }
      }
    }
  }
}

#dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  z-index: 99999;

  overflow-y: auto;
  top: 0;
  left: 0;
  .close-icon {
    position: fixed;

    top: 50px;
    right: 100px;

    img {
      height: 40px;
      width: 40px;
    }
  }
  .body {
    margin: 50px 0;
    height: 80vh;
    img {
      object-fit: contain;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
