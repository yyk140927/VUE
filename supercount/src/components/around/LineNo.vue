<template lang="html">
  <div class="lineno">

    <div class="lineno-time">
      <div class="presentNo"><p>您当前的排队号</p></div>
      <div class="update">
        <div class="update-format">
          <p>{{time | formatDate }}</p>
          <p>刚刚更新</p>
        </div>
      </div>
      <div class="checkNode">
        <div class="checkNode-info">
          <p>{{this.lineno_orgname}}</p>
          <div class="checkNode-info__box"></div>
        </div>
      </div>
    </div>

    <div class="lineno-desc">
      <div class="lineno-desc__info">
        <div class="info-wait">
          <span>排队号 <span>A16</span></span>
        </div>
        <div class="info-wait">
          <span>前面有 <span>6人</span></span>
        </div>
        <div class="info-wait">
            <span>预计等待<span>16分钟</span></span>
        </div>
      </div><br>
      <span>过号请从新取号，谢谢配合!</span>
    </div>

    <div class="lineno-success">
      <div class="lineno-success__option">
        <span>取号成功</span>
        <router-link :to="{ name: 'LineSuccess', params: {} }">
          <span class="cancel">放弃重排</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../common/js/date.js';
export default {
  data() {
    return {
      time: '',
      lineno_orgname:''
    }
  },
  created() {
    this.time = new Date();
    // console.log(this.$router.currentRoute.query)
    let _lineno_orgname = this.$router.currentRoute.query.orgname
    this.lineno_orgname = _lineno_orgname
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>

<style lang="css">
body {
  background: #ffffff;
}
.lineno {
  margin: 0;
  padding: 0;
  width: 100%;
}
.lineno-time {
  margin: 0;
  padding: 0;
  width: 100%;
}
.presentNo {
  min-height: 60px;
  background: #fffdf6;
  font-size: 16px;
}
.presentNo p {
  padding-top: 22px;
  margin-left: 4%;
}
.update {
  min-height: 68px;
  font-weight: bold;
  font-size: 18px;
  background: #f0f0f0;
}
.update-format {
  width: 92%;
  margin-left: 4%;
  display: flex;
  justify-content: space-between;
}
.update-format p {
  margin-top: 25px;
}
.checkNode {
  width: 100%;
  min-height: 52px;
}
.checkNode-info {
  width: 92%;
  margin-left: 4%;
  height: 14px;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
}
.checkNode-info__box {
  width: 10px;
  height: 10px;
  border-top: 1px solid #000000;
  border-right: 1px solid #000000;
  transform:rotate(45deg);
  -ms-transform:rotate(45deg);
}
.lineno-desc {
  width: 92%;
  margin: 20px auto 20px auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(00,00,00,0.2);
  border-bottom: 1px solid rgba(00,00,00,0.2);
}
.lineno-desc__info {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
}
.info-wait {
  width: 26%;
}
.info-wait span {
  font-size: 26px;
  font-weight: bold;
}
.lineno-success {
  padding-bottom: 10px;
  font-size: 22px;
  border-bottom: 1px solid rgba(00,00,00,0.2);
}
.lineno-success__option {
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.lineno-success__option span {
  color: #50ad18;
  text-align: center;
  line-height: 46px;
  padding: 8px;
  margin-top: -8px;
}
.lineno-success__option .cancel {
  border: 1px solid rgba(00,00,00,0.2);
  border-radius: 6px;
  color: #aaaaaa;
}
</style>
