<template>
  <div id="idcard">

    <input class="input" placeholder="    请输入身份证号" v-model="value" v-on:blur="inputID(value)"></input>
    <img src="../../assets/business/sweep.svg">

    <div class="info-name">
      <span>姓名：{{value?bsadata.CUST_INFO.CUST_NAME:''}}</span><br>
    </div>
    <div class="info-cardnum">
      <span>身份证号：{{value}}</span>
    </div>

    <div class="idcard-option">
      <ul>
        <el-row :gutter="4">
          <li v-for="biz in bsadata.BIZ_TYPE">
            <el-col :span="8"><div class="grid-content bg-purple">{{biz}}</div></el-col>
          </li>
        </el-row>
      </ul>
    </div>

    <router-link :to="{ name: 'LineSuccess', query: { orgname: this.idcard_orgname } }">
      <label class="idcard-submit">
        <button type="button">排队取号</button>
      </label>
    </router-link>

  </div>
</template>

<script>
export default {
  data(){
    return {
      bsadata: {CUST_INFO: {}},
      value: '',
      name: {},
      idcard_orgid: '',
      idcard_orgname: ''
    }
  },
  created() {
    console.log(this.$router.currentRoute.query)
    let _idcard_orgid = this.$router.currentRoute.query.orgid
    this.idcard_orgid = _idcard_orgid

    let _idcard_orgname = this.$router.currentRoute.query.orgname
    this.idcard_orgname = _idcard_orgname

    // console.log(this.idcard_orgid)
    // console.log(this.idcard_orgname)
  },
  methods: {
    // console.log(this.$router.currentRoute),
    inputID: function(value) {
      if(value.length > 0) {
        this.$http.post('http://139.196.145.67:9001/padServer/PreFilledServer/getCustInfo',{
          // {CSUT_ID_NO:'360281199010214339',ORGID:'000002'})
          CSUT_ID_NO:value,
          ORGID:this.$router.currentRoute.query.orgid
        }).then((response) => {
          this.bsadata = response.data.bsadata;
          this.name = response.data.CUST_NAME;
          console.log(response);
        })
      } else {
        alert("请输入正确的身份证号！");
      }
    }
  }
}
</script>

<style scoped>
#idcard {
  width: 100%;
  height: 100%;
  position: absolute;
}
#idcard .input {
  width: 100%;
  height: 46px;
  margin-top: 20px;
  z-index: -1;
  font-size: 20px;
  border-radius: 2px solid #efefef;
  background-color: #ffffff;
  border: none;
  display: block;
}
input:focus {
  outline: none;
}
.el-col {
  border-radius: 0px;
  margin-bottom: 4px;
}
#idcard img {
  width: 26px;
  height: 26px;
  z-index: 99;
  margin-right: 12px;
  position: absolute;
  margin-top: -38px;
  margin-left: 90%;
}
.info-name, .info-cardnum {
  margin-top: 20px;
  font-size: 20px;
  margin-left: 30px;
  display: flex;
}
.idcard-option {
  height: 41.5%;
  width: 98%;
  margin-top: 36px;
  margin-left: 1%;
  position: absolute;
  z-index: -1;
  background: ffffff;
  text-align: center;
  line-height: 66px;
  font-size: 18px;
}
.el-row {
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.idcard-submit button {
  border: none;
  outline:none;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  width: 90%;
  height: 50px;
  line-height: 50px;
  margin-left: 5%;
  margin-top: 360px;
  font-size: 32px;
  background: #19ad19;
  color: #ffffff;
  border-radius: 6px;
}
</style>
