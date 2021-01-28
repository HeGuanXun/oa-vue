<!-- 案列页面 -->
<template>
  <el-container class="full_size">
    <el-header height="70px">
      <el-container class="rowFlex">
        <topbar/>
      </el-container>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <asideNav/>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import asideNav from "./nav.vue";
import topbar from "./topbar.vue";
export default {
  data() {
    return {};
  },
  components: { asideNav, topbar },
};
</script>
<style lang="scss" scoped>
.el-header {
  padding: 0;
  background-color: #0079FE;
}
.el-aside {
  color: #333;
  border: 1px rgb(242, 242, 242) solid;
  text-align: center;
  line-height: 750px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
//.el-header{
//  height: 70px !important;
//  overflow: hidden;
//  background-color: #0079FE;
//}
//.el-aside{
//  background-color:slategray;
//  width: 200px !important;
//  border: 1px black solid;
//}
</style>
