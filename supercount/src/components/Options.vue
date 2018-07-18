<template>
  <div id="Options">
    <el-container>
      <!-- <el-header> -->
        <div class="amap-page-container">

          <div class="toolbar">
            <span v-if="loaded">
              location: lng = {{ lng }} lat = {{ lat }}
            </span>
          </div>
        </div>
      <!-- </el-header> -->
      <el-main>
        <router-link :to="{ name: 'Area', params: {} }">
          <el-button >排队</el-button>
        </router-link>
          <el-button>预约</el-button>
          <el-button>理财</el-button>
          <el-button>预填单</el-button>
          <el-button>个人交易信息维护</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Options',
  data () {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      lng: self.lng,
      lat: self.lat,
      loaded: false,
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }]
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Options {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #efefef;
}
#Options .el-container {
  width: 100%;
  height: 100%;
  /*position: absolute;*/
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-button {
  font-size: 26px;
}
</style>
