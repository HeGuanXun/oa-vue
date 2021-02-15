<!--  -->
<template>
  <div  v-if="reFresh" class="columnflex" >
    <el-menu ref="menu"navBarbox
             :default-active="menu.defaultActive"
             :router="true"
    >
      <el-menu-item
          v-for="(page, i) in navBar"
          :key="i"
          :index="page.url"
      >
        {{ page.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { eventBus } from "scripts/utils/BUS";
export default {
  data() {
    return {
      reFresh: true,
      navBar: [],
      menu:{
        defaultActive: ''
      }
    };
  },
  components: {},
  mounted() {
    let self = this;
    eventBus.$on("navList", nav => {
      self.navBar = nav.navList;
      this.$store.commit("NAV_TITLE",nav.label)
      console.log(self.navBar[0].url);
      this.$set(this.menu, 'defaultActive', self.navBar[0].url)
      this.$router.push(self.navBar[0].url).catch(err => {
        console.debug(err);
      });
      setTimeout(()=>{
        this.reload();
      },200)
    });
  },

  beforeDestroy() {
    eventBus.$off('navList');
  },
  methods: {
    reload() {
      this.reFresh = false
      this.$nextTick(() => {
        this.reFresh = true
      })
    },
    onActive(){
      this.defaultActive = this.defaultActive.toString();
    },
    openHome() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss">
.el-menu-item {
  border: 0.01px solid #999999;
  color: #8c939d;
}
.el-aside {
  color: #333;
  border: 1px #f2f2f2 solid;
  text-align: center;
  line-height: 0px;
  min-height: 750px;
  height: 100%;
}

  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .content {
    background-color:"#545c64";
    margin: 0 auto; /*水平居中*/
    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
  }
#navBarbox {
  .el-menu {
    border: 1px;
  }
  .erp {
    font-size: 25px;
    color: aliceblue;
    margin-top: 15px;
  }
}
</style>
