<template>
<div style="height: 100%">
  <ul>
    <li v-for="queue in bsadata.QUEUE_TYPE">
      <router-link :to="{ name: 'IDCard', query: { orgid: online_orgid, orgname: online_orgname } }">
        <button class="online" v-if="parseInt(queue)===0">
          <label class="online-graphic">
            <div class="online-graphic__pic">
              <img src="http://placehold.it/80x60/123123/ffffff">
            </div>
            <div class="online-graphic__word">
              <div class="word-strong">
                <span>身份证排队</span>
              </div>
              <div class="word-common">
                <span>到网点前，用身份证获取排队号</span>
              </div>
            </div>
          </label>
        </button>
      </router-link>

      <router-link :to="{ name: 'IDCard', query:{ orgid: online_orgid, orgname: online_orgname } }">
        <button class="online" v-if="parseInt(queue)===1">
          <label class="online-graphic">
            <div class="online-graphic__pic">
              <img src="http://placehold.it/80x60/123123/ffffff">
            </div>
            <div class="online-graphic__word">
              <div class="word-strong">
                <span>银行卡排队</span>
              </div>
              <div class="word-common">
                <span>到网点前，用银行卡获取排队号</span>
              </div>
            </div>
          </label>
        </button>
      </router-link>

      <router-link :to="{ name: 'QrCode', query: { orgid: online_orgid, orgname: online_orgname } }">
        <button  class="online" v-if="parseInt(queue)===2">
          <label class="online-graphic">
            <div class="online-graphic__pic">
              <img src="http://placehold.it/80x60/123123/ffffff">
            </div>
            <div class="online-graphic__word">
              <div class="word-strong">
                <span>二维码排队</span>
              </div>
              <div class="word-common">
                <span>已在网点，请出示微信二维码</span>
              </div>
            </div>
          </label>
        </button>
      </router-link>

      <router-link :to="{ name: 'QrCode', query: { orgid: online_orgid, orgname: online_orgname  } }">
        <button class="online" v-if="parseInt(queue)===3">
          <label class="online-graphic">
            <div class="online-graphic__pic">
              <img src="http://placehold.it/80x60/123123/ffffff">
            </div>
            <div class="online-graphic__word">
              <div class="word-strong">
                <span>新客户排队</span>
              </div>
              <div class="word-common">
                <span>到达网点前，先扫码关注</span>
              </div>
            </div>
          </label>
        </button>
      </router-link>
      <router-view></router-view>
    </li>
  </ul>

</div>

</template>

<script>
export default {
  data() {
    return {
      bsadata: [],
      online_orgid: '',
      online_orgname: ''
    }
  },
  created() {
    console.log(this.$router.currentRoute.query)

    let _online_orgid = this.$router.currentRoute.query.orgid
    this.online_orgid = _online_orgid

    let _online_orgname = this.$router.currentRoute.query.orgname
    this.online_orgname = _online_orgname

    // console.log(_online_orgid)
    // console.log(_online_orgname)
  },
  mounted() {
    // vue-resource 异步请求方法
    this.$http.post('http://139.196.145.67:9001/padServer/PreFilledServer/getQueueType',{
      ORGID: this.online_orgid
    }).then((response) => {
      this.bsadata = response.data.bsadata;
      console.log(response);
    })
  }
}
</script>

<style scoped>
.online {
  width: 100%;
  height: 100px;
  margin-top: 16px;
  background: #ffffff;
  border: none;
  outline:none;
  position: relative;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
}
.online-graphic {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.online-graphic__pic {
  position: relative;
  width: 30%;
  height: 100%;
}
.online-graphic__pic img {
  width: 80%;
  height: 60%;
  margin-top: 18%;
}
.online-graphic__word {
  position: relative;
  width: 68%;
  height: 100%;
  margin-top: 2%;
}
.word-strong span {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  padding-left: 0px;
}
.word-common span {
  font-size: 16px;
  line-height: 16px;
  padding-top: 20px;
}
</style>
