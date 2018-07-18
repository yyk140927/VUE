<template>
  <div class="area">

    <div class="best" v-for="bsa in bsadata" v-if="parseInt(bsa.CHARACTERISTIC)===0">
      <router-link :to="{ name: 'Branche', query: { orgid: bsa.ORG_ID, orgname: bsa.ORG_NAME } }">
        <div class="best-pic">
          <img :src="bsa.ORG_BIG_LOGO">
        </div>
        <p>{{bsa.ORG_NAME}}</p>
        <div class="best-match">
          <div class="best-match__same">
            <div class="same-closest">
              <span>最近</span>
            </div>
            <div class="same-bank">
              <span>开户行</span>
            </div>
          </div>

          <div class="best-match__address">
            <div class="address-info">
              <div class="address-info__detail">
                <span>{{bsa.ORG_FEATURES}}</span>
              </div>
            </div>
            <div class="address-score">
              <el-rate v-model="bsa.ORG_STARS" disabled score-template="{value}"></el-rate>
              <span>{{bsa.ORG_STARS}}/{{parseInt(bsa.ORG_EVALUATE_NUM)}}条</span>
            </div>
          </div>

          <div class="best-match__option">
            <div class="option-info">
              <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_TIME)?'option-info__time':''">
                <div class="time"></div>
              </div>

              <div class="option-info__node">
                <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_TYPE)?'node':'atm'"></div>
              </div>

              <div class="option-info__busy">
                <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_CASH)?'money':''"></div>
              </div>

              <div class="option-info__busy">
                <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_CASH)?'remit':''"></div>
              </div>
            </div>
            <div class="option-distance">
              <div class="distance"></div><br>
              <span>{{bsa.DISTANCE}}m</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>


    <ul class="commons">
      <li v-for="bsa in bsadata" v-if="parseInt(bsa.CHARACTERISTIC)===1">
        <router-link :to="{ name: 'Branche', query: { orgid: bsa.ORG_ID, orgname: bsa.ORG_NAME } }">
          <div class="common">
          <div class="common-left">
            <div class="common-left__img">
              <img :src="bsa.ORG_LOGO">
            </div>
            <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_TIME)?'busy-ok':'busy-no'"></div>
          </div>

          <div class="common-right">
            <p>{{bsa.ORG_NAME}}</p>
            <div class="common-right__info">
              <div class="common-right__address">
                <div class="address-info">
                  <span>{{bsa.ORG_FEATURES}}</span>
                </div>
                <div class="address-score">
                  <div class="block">
                    <el-rate v-model="bsa.ORG_STARS" disabled score-template="{value}"></el-rate>
                  </div>
                  <span>{{bsa.ORG_STARS}}/{{parseInt(bsa.ORG_EVALUATE_NUM)}}条</span>
                </div>
              </div>
              <div class="common-right__option">
                <div class="option-info">
                  <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_TIME)?'option-info__time':''">
                    <div class="time">
                    </div>
                  </div>

                  <div class="option-info__node">
                    <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_TYPE)?'node':'atm'">
                    </div>
                  </div>

                  <div class="option-info__busy">
                    <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_CASH)?'money':''">
                    </div>
                  </div>

                  <div class="option-info__busy">
                    <div :class="parseInt(bsa.ORG_TARGET.ORG_TARGET_CASH)?'remit':''">
                    </div>
                  </div>
                </div>
                <div class="option-distance">
                  <div class="distance"></div><br><br>
                  <span>{{bsa.DISTANCE}}m</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Area',
  data() {
    return {
      bsadata: [],
      star: [],
      longitude: '',
      latitude: ''
    };
  },
  mounted() {
    // vue-resource 异步请求方法
    this.$http.post('http://139.196.145.67:9001/padServer/PreFilledServer/getNearOrg', {
      USER_LONGITUDE:'115.825405',
      USER_LATITUDE:'28.701739'
    }).then((response) => {
      this.bsadata = response.data.bsadata;
      console.log(response);
    })
  }
}
</script>

<style>
.el-rate__icon {
    font-size: 15px;
     margin-right: 1px;
    color: #b4bccc;
    -webkit-transition: .3s;
    transition: .3s;
}
a {
  text-decoration: none;
  color: inherit;
}
.area {
  color: #000000;
  width: 100%;
  height: 100%;
  position: absolute;
}
.area .best {
  width: 100%;
  height: 240px;
  background-color: #00cc00;
  position: absolute;
}
.area .best-pic img{
  width: 94%;
  height: 154px;
  margin-top: 6px;
  margin-left: 3%;
  /* position: absolute; */
}
.area .best p {
  /* margin-top: 42%; */
  font-size: 18px;
  margin-left: 3%;
}
.area .best .best-match {
  width: 94%;
  height: 23%;
  margin-top: 6px;
  margin-left: 3%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  text-align: center;
}
.area .best .best-match .best-match__same {
  width: 22%;
  margin-top: 6px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.area .best .best-match .best-match__same .same-closest,.same-bank {
  width: 36px;
  height: 36px;
  line-height: 18px;
  background: #ffff00;
  border-radius: 50%;
  font-size: 14px;
}
.area .best .best-match .best-match__same .same-closest span {
  line-height: 36px;
}
.area .best .best-match .best-match__address {
  width: 42%;
  height: 50%;
}
.area .best .best-match .best-match__address .address-info,.address-score {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.area .best .best-match .best-match__address .address-score {
  margin-top: 4px;
}
.area .best .best-match .best-match__option {
  width: 23%;
  text-align: center;
}
/*公共样式*/
.option-info {
  display: flex;
  text-align: center;
  float: right;
  font-size: 60%;
  /*justify-content: space-between;*/
}

.option-info .option-info__time .time {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  background:url(../../assets/business/day.png);
}
.option-info .option-info__time span {
  margin-top: 3px;
  margin-left: -6px;
  position: absolute;
}

.option-info .option-info__node .node {
  width: 36px;
  height: 20px;
  margin-right: 6px;
  background:url(../../assets/business/node.png);
}
.option-info .option-info__node .atm {
  width: 36px;
  height: 20px;
  margin-right: 6px;
  background:url(../../assets/business/atm.png);
}

.option-info .option-info__busy .money {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  background:url(../../assets/business/money.png);
}
.option-info .option-info__busy .remit {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  background:url(../../assets/business/remit.png);
}
.option-distance {
  margin-bottom: 8%;
  margin-left: 46%;
}
.option-distance span {
  margin-top: 12px;
}
.distance {
  width: 34%;
  height: 10px;
}
/*公共样式*/

.area .commons {
  width: 96%;
  margin-left: 2%;
  margin-top: 70%;
}
.area .commons .common {
  width: 99%;
  height: 16%;
  margin-top: 20px;;
  display: flex;
  border: 1px solid rgba(00,00,00,0.1);
  justify-content: space-between;
  background: #e4e4e4;
}
.area .commons .common .common-left {
  width: 26%;
  height: 100%;
}
.area .commons .common .common-left .common-left__img img {
  width: 66%;
  height: 56%;
  margin-top: 20%;
  margin-left: 14%;
}
.area .commons .common .common-left .busy-ok,.busy-no {
  width: 80%;
  height: 30%;
  margin-top: 8px;
  margin-left: 8%;
  background: #ffffff;
  text-align: center;
}
.busy-ok::after {
  content: "营业中";
}
.busy-no::after {
  content: "待营业";
}
.area .commons .common .common-right {
  width: 72%;
}
.area .commons .common .common-right p {
  margin-top: 4%
}
.area .commons .common .common-right .common-right__address {
  margin-top: 2%;
  /* font-size: 0.8em; */
  width: 66%;
}
.area .commons .common .common-right .common-right__address .address-info{
  margin-top: 3%;
  width: 70%;
}
.area .commons .common .common-right .common-right__info .common-right__option {
  margin-top: 3%;
  margin-left: 4%;
  width: 38%;
}
.area .commons .common .common-right .common-right__info {
  display: flex;
}
</style>
