<template lang="html">
  <div id="branche">
    <div class="branche-swiper">
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,val) in bsadata.org_LoopPhoto" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="branche-option">
      <el-row :gutter="0">
        <router-link :to="{ name: 'Online', query: {orgid: this.branche_orgid, orgname: this.branche_orgname } }">
          <ul>
            <li v-for="elcol in bsadata.org_Biz">
              <el-col :span="6"><div class="grid-content bg-purple">{{elcol}}</div></el-col>
            </li>
          </ul>
        </router-link>
      </el-row>
    </div>

    <ul>
      <li v-for="market in bsadata.org_Marketing">
        <div class="branche-push" v-if="parseInt(market.type)===0">
          <div class="branche-push__img">
            <img :src="market.photo">
          </div>
          <div class="branche-push__desc">
            <p @click="showDetail">{{ market.datails }}</p>
          </div>
        </div>

        <div class="branche-active" v-if="parseInt(market.type)===1">
          <div class="branche-active__img">
            <img :src="market.phono">
            <div class="img-desc">
              <h4>Title:{{ market.title }}</h4>
            </div>
          </div>
        </div>

        <div class="branche-topic" v-if="parseInt(market.type)===3">
          <div class="branche-topic__word">
            <h4>Title:{{ market.title }}</h4>
            <p @click="showDetail">{{ market.datails }}</p>
          </div>
        </div>

        <!-- 弹层  transition="fade"动画效果  -->
        <div v-show="detailShow" class="detail">
          <div class="detail-wrapper">
            <!-- 弹层大图 -->
            <div class="detail-wrapper__img">
              <img :src="market.photo">
            </div>
            <!-- 弹层内容 -->
            <div class="detail-main">{{market.datails}}</div>

          </div>
          <div class="detail-close">
            <!-- 弹层下方X图标 -->
            <img src="../../assets/business/cancel.png" @click="hideDetail">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bsadata: {},
      branche_orgid: '',
      branche_orgname: '',
      detailShow: false
    }
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },
  created() {
    // vue-resource 异步请求方法
    this.$http.post('http://139.196.145.67:9001/padServer/PreFilledServer/getOrgDetails',{
      ORGID: this.branche_orgid
    }).then((response) => {
      this.bsadata = response.data.bsadata;
      // console.log(this.$router.currentRoute.query.orgid)
      console.log(response);
    })
    let _branche_orgid = this.$router.currentRoute.query.orgid
    this.branche_orgid = _branche_orgid

    let _branche_orgname = this.$router.currentRoute.query.orgname
    this.branche_orgname = _branche_orgname

    // console.log(_branche_orgid)
    // console.log(_branche_orgname)
  }
}
</script>

<style scoped>
a {
  color: inherit;
}
#branche {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(239, 239, 239, 0.5);
}
.branche-swiper {
  width: 100%;
  height: 200px;
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 32px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}.
.el-col-6 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.bg-purple {
  display:block;/*内联对象需加*/
  word-break:keep-all;/* 不换行 */
  white-space:nowrap;/* 不换行 */
  overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}
#branche .branche-option {
  margin-top: 12px;
  height: 160px;
  width: 100%;
  position: absolute;
  text-align: center;
  line-height: 80px;
  font-size: 10px;
  word-wrap: break-word;
  word-break: normal;
}

.grid-content {
  border-radius: 0px;
  border: 1px solid #cccccc;

}
.el-row {
  margin-top: 0px;
  margin-bottom: 0px;
  background: #ffffff;
}
#branche .branche-push {
  margin-top: 190px;
  width: 100%;
  height: 160px;
  display: flex;
  background-color: #00ffff;
}
.branche-push__img,.branche-push__desc {
  width: 50%;
  height: 100%;
  line-height: 140px;
}

.branche-push__desc p {
  width: 90%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
.branche-push__img {
  text-align: center;
}
.branche-push__img img {
  width: 160px;
  height: 100px;
  margin-top: 30px;
}
.branche-push__desc p {
  width: 90%;
  margin-left: 6px;
  margin-top: 30px;
  font-size: 16px;
  line-height: 16px;
}
#branche .branche-active,.branche-topic {
  margin-top: 12px;
  width: 100%;
  height: 160px;
  background: #ffffff;
}
.branche-active__img img {
  width: 100%;
  height: 160px;
  z-index: -1;
  display: flex;
}
.branche-active__img .img-desc {
  margin-left: 20px;
  margin-top: -50px;
}
.branche-topic__word {
  width: 96%;
  height: 150px;
}
.branche-topic__word h4 {
  padding-top: 12px;
  padding-left: 12px;
}
.branche-topic__word p {
  width: 88%;
  margin: 12px 10% auto 8%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
.detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: all 1s;
  background: rgba(0, 17, 27, 0.4);
  font-weight: 700;
  font-size: 0px;
}
.detail-wrapper {
  width: 90%;
  height: 80%;
}
.detail-wrapper__img img {
  width: 100%;
  height: 200px;
  margin-top: 36px;
  margin-left: 5%;
}
.detail-main {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  margin-left: 5%;
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
}
.detail-close {
  width: 100%;
  height: 32px;
  text-align: center;
}
.detail-close img {
  width: 32px;
  height: 32px;
  margin-top: 20px;
}
</style>
