<template>
  <div class="qrcode">
      <div class="qrcode-ownInfo">

      </div>

      <div class="qrcode-option">
        <el-row :gutter="4">
          <el-col :span="8"><div class="grid-content bg-purple">个人现金</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">外币业务</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">开户、销户</div></el-col>
        </el-row>
        <el-row :gutter="4">
          <el-col :span="8"><div class="grid-content bg-purple">转账</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">挂失、改密</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">签约、理财</div></el-col>
        </el-row>
        <el-row :gutter="4">
          <el-col :span="16"><div class="grid-content bg-purple">签约、理财</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">签约、理财</div></el-col>
        </el-row>
        <el-row :gutter="4">
          <el-col :span="24"><div class="grid-content bg-purple">签约、理财</div></el-col>
        </el-row>
      </div>

      <router-link to="/LineSuccess">
        <label class="qrcode-submit">
          <button type="button">排队取号</button>
        </label>
      </router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
      bsadata: []
    }
  },
  mounted() {
    // vue-resource 异步请求方法
    this.$http.post('http://139.196.145.67:9001/padServer/PreFilledServer/getCustInfo',{CSUT_ID_NO:'360281199010214339',ORGID:'000002'})
      .then((response) => {
        this.bsadata = response.data.bsadata;
        console.log(response);
      })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.qrcode{
  height: 100%;
  width: 100%;
  position: absolute;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  z-index: 9999;
}
.qrcode .qrcode-ownInfo {
  margin-top: 60px;
  height: 34.9%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.qrcode  .qrcode-option {
  margin-top: 60%;
  height: 41.5%;
  width: 98%;
  margin-left: 1%;
  position: absolute;
  z-index: -1;
  background: ffffff;
  text-align: center;
  line-height: 66px;
  font-size: 18px;
}
.qrcode .qrcode-submit button {
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
  font-size: 32px;
  background: #19ad19;
  color: #ffffff;
  border-radius: 6px;
  margin-top: 146%;
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
</style>
