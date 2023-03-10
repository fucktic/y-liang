<template>
  <section style="padding: 50px 0 40px 0; position: relative">
    <!-- 头像部分  -->
    <div class="avatar-name">
      <div class="avatar">
        <img src="" alt="" style="height: 100%; height: 100%" />
      </div>
      <div class="name-info">
        <span class="name">姓名</span>
        <div>
          <span class=""> UI设计师 </span>
          <span class="info">
            <span class="divier">|</span>
            <span>女</span>
            <span class="divier">|</span>
            <span>5-10年工作经验</span>
          </span>
        </div>
      </div>
    </div>

    <!-- 技能 -->
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <div class="show-window"></div>
  </section>
</template>

<script setup>
const list = [
  "视觉设计",
  "平面设计",
  "PC端",
  "移动端",
  "可视化大屏",
  "Icon设计",
  "Sketch",
  "PS",
];
</script>

<style lang="scss" scoped>
section {
  height: 348px;
  .avatar-name {
    display: flex;
    .avatar {
      width: 80px;
      height: 80px;
      background: #d8d8d8;
      border-radius: 50px;
      margin-right: 20px;
    }
    .name-info {
      .name {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #000000;
        font-weight: 600;
      }
      div {
        margin-top: 10px;

        font-family: PingFangSC-Semibold;

        font-size: 14px;
        color: #333333;
        font-weight: 600;
      }
      .info {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        font-weight: 400;
      }
      .divier {
        margin: 0 10px;
      }
    }
  }
  ul {
    display: flex;
    margin-top: 70px;
    flex-wrap: wrap;
    width: 700px;
    li {
      padding: 7px 10px;
      background: #f7f7f7;
      border-radius: 4px;
      margin-right: 18px;
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #333333;
      font-weight: 600;
    }
  }
  .show-window {
    background: #d8d8d8;
    border-radius: 30px;
    width: 460px;
    height: 258px;
    position: absolute;
    right: 0;
    top: 50px;
  }
}
</style>
