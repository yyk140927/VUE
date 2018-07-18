<template lang="html">
  <div class="linesuccess">
    <div class="linesuccess-info">
      <img src="../../assets/business/success.png" alt="">
      <div class="linesuccess-info__word">
        <span>您的排队号码是<span>{{bsadata.QUEUEU_NO}}</span>号，请留意叫号！</span><br>
        <span>前面有<span>{{bsadata.QUEUEU_COUNT}}</span>个人，请您耐心等待！</span>
      </div>
    </div>

    <router-link to="">
      <label class="linesuccess-set">
        <button type="button">设置到号通知</button>
      </label>
    </router-link>
    <p>默认到号前{{bsadata.REMIND_COUNT}}位，回微信通知你</p>

    <div class="linesuccess-push">
      <img :src="bsadata.MARKING_INFO" alt="">
    </div>

    <div class="linesuccess-option">
      <el-row :gutter="0">
        <router-link :to="{ name: 'LineNo', query: { orgname: this.linesuccess_orgname } }">
          <el-col :span="12"><div class="grid-content bg-purple">查看排队记录</div></el-col>
        </router-link>
        <el-col :span="12"><div class="grid-content bg-purple">返回公众号</div></el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      successnum: 7,
      linenum: 123456,
      input: '',
      bsadata: [],
      linesuccess_orgname: ''
    }
  },
  created() {
    // console.log(this.$router.currentRoute.query)
    let _linesuccess_orgname = this.$router.currentRoute.query.orgname
    this.linesuccess_orgname = _linesuccess_orgname
    // console.log(_linesuccess_orgname)
  },
  mounted() {
    // vue-resource 异步请求方法
    this.$http.post('http://139.196.145.67:9001/padServer/PreFilledServer/commitPreFilled',{
      CSUT_ID_NO:'360281199010214339',
      ORGID:'000002'
    }).then((response) => {
      this.bsadata = response.data.bsadata;
      console.log(response);
    })
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.linesuccess {
  width: 100%;
}
.linesuccess p {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 6px;
  color: #999999;
}
.linesuccess .linesuccess-info {
  min-height: 246px;
  width: 100%;
  background: #00cc00;
}
.linesuccess .linesuccess-info img {
  margin-top: 16%;
  margin-left: 28%;
}
.linesuccess .linesuccess-info .linesuccess-info__word {
  width: 90%;
  margin-left: 5%;
  font-size: 20px;
  margin-top: 6%;
  text-align: center;
}
.linesuccess .linesuccess-info .linesuccess-info__word span{
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 30px;
  color: #000000;
}
.linesuccess .linesuccess-info .linesuccess-info__word span span {
  font-size: 28px;
  color: #ffffff;
}
.linesuccess .linesuccess-set button {
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
  font-size: 26px;
  background: #19ad19;
  color: #ffffff;
  border-radius: 6px;
  margin-top: 20px;
}
.linesuccess .linesuccess-push img {
  width: 90%;
  height: 30%;
  margin: 20px 5% 10px;
}
.linesuccess .linesuccess-option {
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  background: #ffffff;
}
.grid-content {
  border-radius: 0px;
  border: 1px solid #cccccc;
}
</style>
