<template>
  <div class="index">
    <div class="index">
      <div class="person">
        <div>
          <img class="img" src="./../../assets/img/u605.svg">
        </div>
        <div class="js">
          <div>花木兰 </div>
          <div>|</div>
          <div>技术经理</div>
        </div>
        <div class="js">
          <div>联系电话：17666114600</div>
          <div>邮箱：751762100@qq.com</div>
        </div>
      </div>
      <div class="wait">
        <div class="text1">
          <div style="margin-left: 20px">
            <b>待办事项</b>
          </div>
          <div style="position: absolute;right: 10px">
            》
          </div>
        </div>
        <hr/>
        <div style="display: flex;flex-direction: column">
          <div id="aa">
            <div>
              <el-button type="text">
                待处理
              </el-button>
            </div>
            <div>
              <el-button type="text">
                待查阅
              </el-button>
            </div>
            <div>
              <el-button type="text">
                反馈
              </el-button>
            </div>
          </div>
          <div>
            <el-table :data="tableData"
                      style="width: 100%">
              <el-table-column
                  prop="title"
                  label=""
                  width="460px">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label=""
                  width="80">
              </el-table-column>
              <el-table-column
                  prop="date"
                  label="">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="rl">
        <div style="display: flex;flex-direction: column">
          <div style="height: 80px;display: flex;position: absolute;right: 0px">
            <div class="ss">
              <div>
                <b style="font-size: 32px;color:#469bf9">{{nowDate}}</b>
              </div>
              <div>
                <b style="font-size: 22px">{{nowWeek}}</b></div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div style="margin-top: 60px">
            <el-calendar v-model="value">
            </el-calendar>
          </div>
          <div style="margin-left: 20px;margin-top: -25px">10：00-11：00  XXX会议</div>
          <div style="margin-left: 20px;margin-top: 5px">14：00-16：00  XXXXXX会议</div>
        </div>
      </div>
      <div class="clxr">
        <div class="text1">
          <div style="margin-left: 20px"><b>常用联系人</b></div>
          <hr/>
          <div class="person1">
            <div style="display: flex;margin-top: 180px;margin-left: -80px">
              <div class="centerflex">
                <img src="./../../assets/img/red.png" style="width: 50px;height: 50px;margin: 5px">
              </div>
              <div>
                <p>陈咬金</p>
                <p>xxx</p>
                <p>销售部   销售经理</p>
              </div>
            </div>
            <div style="display: flex;margin-top: 180px;margin-left: 80px">
              <div class="centerflex">
                <img src="./../../assets/img/break.png" style="width: 50px;height: 50px;margin: 5px">
              </div>
              <div>
                <p>陈咬金</p>
                <p>xxx</p>
                <p>销售部   销售经理</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-badge :value="200" :max="5" class="item">
        <el-button @click="ddClick">
          <li class="el-icon-s-comment">工作消息</li>
        </el-button>
      </el-badge>
    </div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="900px">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="ddClick">取 消</el-button>
    <el-button type="primary" @click="ddClick">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  import {eventBus} from "@/scripts/utils/BUS";
  import urls from "@/scripts/api";
  import operation from "@/component/operation.vue";
  export default {
    components: {
      operation
    },
    data() {
      return {
        dialogVisible:false,
        timer: null,
        nowWeek: '',
        nowDate: '',
        nowTime: '',
        value: new Date(),
        //--------------need to edit
        list_url:urls.book_list,
        create_url:urls.book_create,
        update_url:urls.book_update,
        delete_url:urls.book_delete,
        eventBus:'Theme_eventBus',
        editTitle:"编辑书籍",
        addTitle:"新增书籍",
        idType:'bid',
        usePagination:true,
        rules: {
          bookName: [
            {required: true, message: "请输入书籍名字"},
          ],
          author: [
            {required: true, message: "请输入作者名字"},
          ],
          type: [
            {required: true, message: "请输入类型"}
          ],
          publisher: [
            {required: true, message: "请输入发布人或者机构"}
          ],
          publicationDate: [
            {required: true, message: "请选择发布时间"}
          ],
          price: [
            {required: true, message: "请输入价格"}
          ]
        },
        //------------- no edit-------
        title: null,
        searchForm: {},
        form: {
          lightColor:'#409EFF'
        },
        tableData: [
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },
          {
            title:' 名片申请:关于XXX客户的用餐报销',
            name:'花木兰',
            date:'2020-09-42',
          },

        ],
        isEdit: false,
        isShow: false,
        listLoading: false,
      };
    },
    mounted() {
      this.timer = setInterval(() => {
        this.setNowTimes()
      }, 1000);
      eventBus.$on(this.eventBus, (tableData) => {
        if (tableData) {
          this.listLoading = false;
          this.tableData = tableData;
        } else {
          this.isEdit = false;
          this.noPageQuery()
        }
        this.isShow = false;
      });
      //Whether or not to use paging queries
      this.usePagination ? this.query() : this.noPageQuery();
    },

    beforeDestroy() {
      eventBus.$off(this.eventBus)
    },

    methods: {
      ddClick(){
        this.dialogVisible==false?this.dialogVisible=true:this.dialogVisible=false
      },
      setNowTimes () {
        let myDate = new Date()
        // console.log(myDate)
        let wk = myDate.getDay()
        let yy = String(myDate.getFullYear())
        let mm = myDate.getMonth() + 1
        let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
        let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
        let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
        let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
        let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        let week = weeks[wk]
        this.nowDate = dd
        this.nowTime = hou + ':' + min + ':' + sec
        this.nowWeek = week
      },
      reset(){
        this.searchForm = {};
        this.usePagination ? this.query() : this.noPageQuery();
      },
      doDelete(id) {
        let aa = "删除成功"
        this.$axios.get(this.delete_url+'?bid='+id).then(res => {
          this.$alert(aa, '', {
            confirmButtonText: "确定",
            callback: () => {
              this.query()
            }
          });
        }).catch((e) => {
          this.$alert('删除失败', '', {
            confirmButtonText: "OK",
          });
          return false;
        });
      },

      noPageQuery() {
        this.$refs.operation.$noPageQuery(this.list_url, this.eventBus);
      },

      query() {
        this.$refs.pagination.$query(this.list_url, this.searchForm, this.eventBus);
      },

      toAdd() {
        this.isEdit=false,
         this.title = this.addTitle;
        this.form = {};
        this.$nextTick(() => {
          if (this.$refs.form) {
            this.$refs.form.clearValidate()
          }
        });
        this.isShowDialog();
      },

      isShowDialog() {
        this.isShow = this.isShow !== true;
      },

      toEdit(row){
        this.title = this.editTitle;
        this.isEdit = true;
        this.form = JSON.parse(JSON.stringify(row));
        this.isShowDialog();
      },

      //Add with the editor go this method
      confirmData() {
        let url;
        let data;
        let text = "新增成功！";
        if (this.isEdit) {
          text = "修改成功！";
          url = this.update_url;
          data = {
            params: {
              'bid': this.form.bid,
              'bookName': this.form.bookName,
              'author': this.form.author,
              'type': this.form.type,
              'publisher': this.form.publisher,
              'publicationDate': this.form.publicationDate,
              'price': this.form.price,
              'remark': this.form.remark
            }
          }
        } else {
          url = this.create_url;
            data = {
            params: {
              'bookName': this.form.bookName,
              'author': this.form.author,
              'type': this.form.type,
              'publisher': this.form.publisher,
              'publicationDate': this.form.publicationDate,
              'price': this.form.price,
              'remark': this.form.remark
            }
          }
        }

        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$refs.operation.$ConfirmData(url, data, text, this.eventBus);
          } else {
            return false;
          }
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
/deep/.el-main[data-v-038e7047] {
  background-color: white;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
.item {
  position: absolute;
  right: 1px;
  bottom: 5px;
  margin-top: 10px;
  margin-right: 40px;
}
.person1{
  display: flex;
  flex-flow: row wrap;
}
.text1{
  display: flex;
  height: 40px;
  align-items: center
}
.ss{
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.is-selected {
  color: #1989FA;
}
/deep/.el-calendar-table .el-calendar-day {
  box-sizing: border-box;
  padding: 8px;
  height: 40px;
}
#aa{
  height: 30px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  div{
    margin-left: 20px;
  }
}
.js{
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  color: #3E8EF7;
  div{
    margin: 5px;
  }
}
.img{
  width: 60px;
  height: 60px;
}
.index{
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(240, 242, 245, 1);
}
.clxr{
  position: absolute;
  background-color: rgb(255, 255, 255);
  left: 698px;
  top: 503px;
  width: 520px;
  height: 500px;
  display: flex;
  font-family: '微软雅黑', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 20px;
}
.rl{
  border-width: 1px;
  position: absolute;
  background-color: white;
  left: 698px;
  top: 10px;
  width: 520px;
  height: 483px;
  display: flex;
  font-family: '微软雅黑', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  line-height: 20px;
}
.wait{
    position: absolute;
    left: 20px;
    top: 195px;
    width: 650px;
    height: 396px;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(233, 233, 233);
    border-radius: 0px;
    box-shadow: none;
    font-family: 微软雅黑, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    line-height: 20px;
}
.person{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  position: absolute;
  left: 20px;
  top: 10px;
  width: 650px;
  height: 176px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 233, 233);
  border-radius: 0px;
  box-shadow: none;
  font-family: 微软雅黑, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
}
</style>
