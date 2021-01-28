<template>
  <div class="topbar">
    <div class="logo">
      <img src="./../../assets/img/8.svg"  alt="">
      <b>logo</b>
    </div>
    <div class="text_top" style="margin-left: 10px;">
      员工中心
    </div>
    <div class="tabs_topbar">
      <el-tabs v-model="activeName" @tab-click="handleClick" >
        <el-tab-pane
            v-for="(item,index) in tabBarList"
            :label="item.label"
            :name="item.name"
            :data-list="item.navList"
            :key="index"
            :index="item.url"
        />
      </el-tabs>
      <el-link icon="el-icon-s-operation" class=""></el-link>
      <div class="top_mall" hidden="hidden" ref="more" @mouseleave="mouseLeave">
       <el-button type="primary" class="el-button">招聘</el-button>
       <el-button type="primary" class="el-button">人事</el-button>
       <el-button type="primary" class="el-button">薪酬</el-button>
       <el-button type="primary" class="el-button">培训</el-button>
       <el-button type="primary" class="el-button">考核</el-button>
       <el-button type="primary" class="el-button">简报</el-button>
       <el-button type="primary" class="el-button">计划</el-button>
       <el-button type="primary" class="el-button">社区</el-button>
       <el-button type="primary" class="el-button">流程</el-button>
       <el-button type="primary" class="el-button">内容</el-button>
       <el-button type="primary" class="el-button">日程</el-button>
      </div>
    </div>

<!--    <el-link class="search_top" icon="el-icon-search"></el-link>-->
    <div class="logout_top">
      <span>Admin</span>
      <el-link  icon="el-icon-switch-button" @click.native="logout"></el-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { eventBus } from "scripts/utils/BUS";
import url from "api";
import store from "scripts/store";
import * as types from "scripts/store/mutation-types";
export default {
  data() {
    return {
      myHidden:false,
      buttons:[
        {
          label:'招聘',
          name: "zp",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'人事',
          name: "ren_shi",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'薪酬',
          name: "xin_chou",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'培训',
          name: "pei_xun",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'考核',
          name: "kao_he",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'简报',
          name: "jian_bao",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'计划',
          name: "ji_hua",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'社区',
          name: "she_qu",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'流程',
          name: "liu_cheng",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'内容',
          name: "nei_rong",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label:'日常',
          name: "ri_cheng",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
      ],
      roleName:null,
      eventBus:'password_eventBus',
      home_url:"/home",
      activeName: "mh",
      tabBarList: [
        {
          label:'门户',
          name: "mh",
          navList: [
            { name: '主页', url: "/home" }
          ]
        },
        {
          label: '会议',
          name: "hy",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '资产',
          name: "zc",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '报销',
          name: "bx",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '名片制作',
          name: "mpzz",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '考勤',
          name: "kq",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '.',
          name: "more",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '常用',
          name: "cy",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
        {
          label: '人事申请',
          name: "rssq",
          navList: [
            { name: '日报管理', url: "/book" },
          ]
        },
      ],
      isShow:false,
      form:{},
      index:0,
      title:"",
    };
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },

  mounted() {
    this.roleName = store.getters.username;
    document.title = '开发者中心';
    eventBus.$emit("navList", this.tabBarList[0].navList);
  },

  methods: {
    mouseLeave(){
      this.$refs.more.hidden='hidden';
      this.myHidden = false;
    },
    handleClick(tab) {
      if (this.tabBarList[tab.index].name=='more'){
        this.myHidden? this.myHidden=false:this.myHidden=true;
        if (this.myHidden){
          this.$refs.more.removeAttribute('hidden');
        }else {
          this.$refs.more.hidden='hidden';
        }
      }else {
        this.$refs.more.hidden='hidden';
        this.myHidden = false;
      }
      eventBus.$emit("navList", this.tabBarList[tab.index].navList);
    },

    logout() {
      this.$confirm('确定要退出登录吗？?', '退出系统确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$router.push("/login");
      })
    },
  }
};
</script>
<style lang="scss" scoped>

/deep/.el-link.is-underline:hover:after{
  border-bottom:0;
}
/deep/.el-link.el-link--default:hover {
  color: #ffc440;
}
.logout_top{
  display: flex;
  align-content: flex-end;
  align-items: center;
  height: 70px;
  position: fixed;
  right: 10px;
  a{
    font-size: 22px;
    color: white;
  }
  span{
    font-size: 14px;
    margin-right: 10px;
    color: white;
  }
}
.search_top{
  display: flex;
  align-content: flex-end;
  align-items: center;
  height: 70px;
  position: absolute;
  top:4px;
  left: 1100px;
  font-size: 22px;
  color: white;
}
.top_mall{
  padding: 5px;
  position: absolute;
  top: 70px;
  left: 230px;
  width: 360px;
  height: 180px;

  background-color: #0079FE;
  .el-button{
    margin: 5px;
    width: 80px;
    height: 35px;
    border-radius: 0;
  }
}
.logo{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  b{
    position: absolute;
    color: black;
    font-family: 'Arial Normal', 'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }
}

/deep/.el-tabs__item.is-active {
  text-shadow: rgba(255, 255, 255, 0.8) 0px 0px 10px;
}

/deep/.el-tabs__header{
  margin:0;
}
.el-tabs__nav-wrap::after{
  background-color: #0079FE;
}
/deep/.el-tabs__active-bar{
  background-color: #fff;
  height: 5px;
}
/deep/.el-tabs__item {
  padding: 0 30px;
  /*width: 80px;*/
  height: 70px;
  box-sizing: border-box;
  line-height: 70px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 700;
  color: white;
  position: relative;
}
.text_top{
  width: 80px;
  font-weight: 700 !important;;
  font-style: normal;
  font-size: 20px !important;;
  color: white !important;
}
.topbar {
  width: 100%;
  position: relative;
  height: 70px;
  display: flex;
  //justify-content: center;
  align-items: center;
}
.tabs_topbar {
  position: relative;
  margin-left: 80px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
  a{
    position: absolute;
    right: 195px;
    top: 26px;
    font-size: 20px;
    color: white;
  }
}

/*.element.style {*/
/*  color: black;*/
/*  font-size: 10px;*/
/*  position: absolute;*/
/*  left: 50%;*/
/*  !* right: 50%; *!*/
/*  top: 50%;*/
/*  !* bottom: 50%; *!*/
/*  transform: translate(-50%,-50%);*/
/*}*/
</style>
