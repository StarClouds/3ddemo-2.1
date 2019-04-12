<template>
  <div class="index" style="width: 100%;">
   <div style="width:100%;overflow: hidden">
     <div style="float: left;width: 33%;">
       <div class="block" style="width:400px">
         <span class="demonstration">视角x</span>
         <el-slider v-model="view.x" :max="180" :min="-180"></el-slider>
       </div>
       <div class="block" style="width:400px">
         <span class="demonstration">视角y</span>
         <el-slider v-model="view.y" :max="180" :min="-180"></el-slider>
       </div>
       <div class="block" style="width:400px">
         <span class="demonstration">视角z</span>
         <el-slider v-model="view.z" :max="180" :min="-180"></el-slider>
       </div>
       <div class="block" style="width:400px">
         <span class="demonstration">视距</span>
         <el-slider v-model="size" :step="0.1" :max="3" :min="0.5"></el-slider>
       </div>
       <div class="block" style="width:400px">
         <el-button @click="changeStep(1)" type="primary">上一步</el-button>
         <el-button @click="changeStep(2)" type="primary">下一步</el-button>
         当前提货点{{step}}步
       </div>
     </div>
     <div class="infomation" style="float: left; width: 33%;">
       <ul v-if="infomation.vehicle">
         <li>
           <div class="title">
             车牌号:
           </div>
           <div class="content">
             {{infomation.vehicle.carLicenseNo}}
           </div>
         </li>
         <li>
           <div class="title">
             装载方案ID:
           </div>
           <div class="content">
             {{infomation.vehicle.loadingId}}
           </div>
         </li>
         <li>
           <div class="title">
             体积利用率（%）:
           </div>
           <div class="content">
             {{infomation.loadingProfile.volumeUtilization}}
           </div>
         </li>
         <li>
           <div class="title">
             载重利用率（%）:
           </div>
           <div class="content">
             {{infomation.loadingProfile.weightUtilization}}
           </div>
         </li>
         <li>
           <div class="title">
             货物数量:
           </div>
           <div class="content">
             {{infomation.loadingProfile.materialQuantity}}
           </div>
         </li>
         <li>
           <div class="title">
             货物体积:
           </div>
           <div class="content">
             {{infomation.loadingProfile.materialVolume}}m³
           </div>
         </li>
         <li>
           <div class="title">
             货物重量:
           </div>
           <div class="content">
             {{infomation.loadingProfile.materialWeight}}kg
           </div>
         </li>
         <li>
           <div class="title">
             长度剩余:
           </div>
           <div class="content">
             {{infomation.loadingProfile.lengthRemain}}
           </div>
         </li>
         <li>
           <div class="title">
             宽度剩余:
           </div>
           <div class="content">
             {{infomation.loadingProfile.widthRemain}}
           </div>
         </li>
         <li>
           <div class="title">
             高度剩余:
           </div>
           <div class="content">
             {{infomation.loadingProfile.heightRemain}}
           </div>
         </li>
       </ul>
     </div>
     <div style="float: left; width: 20%;">
       <el-select @change="changepoint" v-model="pointColor" placeholder="请选择">
         <el-option
           v-for="item in pointData"
           :key="item.color"
           :label="item.pickPoint"
           :value="item.color">
         </el-option>
       </el-select>
     </div>
   </div>
    <plugin3D :data="data" :carData="carData" :size="size" :view="view" :step="step"></plugin3D>
  </div>
</template>

<script>
import { getdata, getdata2 } from '../api/data';
import plugin3D from './Home';
export default {
  name: 'index',
  components: {
    plugin3D,
  },
  data() {
    return {
      pointColor: '',
      pointData: [],
      // data: [
      //   {
      //     step: 1,
      //     QUANTITY: 60,
      //     ROW: 4,
      //     COLUMN: 5,
      //     LAYER: 3,
      //     LENGTH_POSITION: 0,
      //     WIDTH_POSITION: 0,
      //     HEIGHT_POSITION: 60,
      //     LENGTH: 273.6,
      //     WIDTH: 342,
      //     HEIGHT: 288.6,
      //     color: '#ff7500'
      //   },
      //   {
      //     step: 2,
      //     QUANTITY: 5,
      //     ROW: 1,
      //     COLUMN: 5,
      //     LAYER: 1,
      //     LENGTH_POSITION: 273.5,
      //     WIDTH_POSITION: 0,
      //     HEIGHT_POSITION: 60,
      //     LENGTH: 72.5,
      //     WIDTH: 353.5,
      //     HEIGHT: 184.5,
      //     color: '#0eb83a',
      //   },
      //   {
      //     step: 3,
      //     QUANTITY: 5,
      //     ROW: 9,
      //     COLUMN: 5,
      //     LAYER: 2,
      //     LENGTH_POSITION: 350,
      //     WIDTH_POSITION: 0,
      //     HEIGHT_POSITION: 0,
      //     LENGTH: 652.5,
      //     WIDTH: 353.5,
      //     HEIGHT: 369,
      //     color: '#9ed048',
      //   },
      //   {
      //     step: 4,
      //     QUANTITY: 5,
      //     ROW: 1,
      //     COLUMN: 5,
      //     LAYER: 1,
      //     LENGTH_POSITION: 1002.5,
      //     WIDTH_POSITION: 0,
      //     HEIGHT_POSITION: 0,
      //     LENGTH: 72.5,
      //     WIDTH: 353.5,
      //     HEIGHT: 184.5,
      //     color: '#ff461f',
      //   },
      //   {
      //     step: 5,
      //     QUANTITY: 5,
      //     ROW: 7,
      //     COLUMN: 5,
      //     LAYER: 1,
      //     LENGTH_POSITION: 1075,
      //     WIDTH_POSITION: 0,
      //     HEIGHT_POSITION: 0,
      //     LENGTH: 543.9,
      //     WIDTH: 374.5,
      //     HEIGHT: 197.2,
      //     color: '#ff4777',
      //   },
      //   {
      //     step: 6,
      //     QUANTITY: 5,
      //     ROW: 1,
      //     COLUMN: 4,
      //     LAYER: 1,
      //     LENGTH_POSITION: 1618.9,
      //     WIDTH_POSITION: 0,
      //     HEIGHT_POSITION: 0,
      //     LENGTH: 77.7,
      //     WIDTH: 299.6,
      //     HEIGHT: 197.2,
      //     color: '#4b5cc4',
      //   },
      // ],
      data: [],
      size: 2,
      view: {
        x: -8,
        y: -63,
        z: 35,
      },
      step: 0,
      maxstep: 0,
      carData: {
        width: 380,
        height: 470,
        length: 1750,
      },
      infomation: {}
    };
  },
  methods: {
    changeStep(type) {
      if (type === 1) {
        if (this.step < 1) {
          this.$message({
            message: '没有上一步了',
            type: 'warning'
          });
          return
        };
        this.step = this.step - 1;
      };
      if (type === 2) {
        if (this.step === this.data.length) {
          this.$message({
            message: '没有下一步了',
            type: 'warning'
          });
          return
        };
        this.step = this.step + 1;
      };
    },
    changeData(arr) {
      // step: 6,
      //   QUANTITY: 5,
      //   ROW: 1,
      //   COLUMN: 4,
      //   LAYER: 1,
      //   LENGTH_POSITION: 1618.9,
      //   WIDTH_POSITION: 0,
      //   HEIGHT_POSITION: 0,
      //   LENGTH: 77.7,
      //   WIDTH: 299.6,
      //   HEIGHT: 197.2,
      //   color: '#4b5cc4',
      this.data = arr
      if (this.pointColor) {
        arr = arr.filter(n => n.color === this.pointColor)
      };
      console.log(arr, '?')
      if (this.infomation.vehicle.lwhUnit === 'm') {
        for (let i = 0; i < arr.length; i++) {
          this.data[i].ROW = arr[i].row;
          this.data[i].COLUMN = arr[i].column;
          this.data[i].LAYER = arr[i].layer;
          this.data[i].LENGTH_POSITION = arr[i].lengthPosition * 100;
          this.data[i].WIDTH_POSITION = arr[i].widthPosition * 100;
          this.data[i].HEIGHT_POSITION = arr[i].heightPosition * 100;
          this.data[i].LENGTH = arr[i].length * 100;
          this.data[i].WIDTH = arr[i].width * 100;
          this.data[i].HEIGHT = arr[i].height * 100;
          this.data[i].color = 'red';
        };
      } else {
        for (let i = 0; i < arr.length; i++) {
          this.data[i].ROW = arr[i].row;
          this.data[i].COLUMN = arr[i].column;
          this.data[i].LAYER = arr[i].layer;
          this.data[i].LENGTH_POSITION = arr[i].lengthPosition;
          this.data[i].WIDTH_POSITION = arr[i].widthPosition;
          this.data[i].HEIGHT_POSITION = arr[i].heightPosition;
          this.data[i].LENGTH = arr[i].length;
          this.data[i].WIDTH = arr[i].width;
          this.data[i].HEIGHT = arr[i].height;
          this.data[i].color = arr[i].color;
        };
      };
    },
    changeCarData(arr) {
      if (this.infomation.vehicle.lwhUnit === 'm') {
        this.carData.width = arr.width * 100
        this.carData.height = arr.height * 100
        this.carData.length = arr.length * 100

      } else {
        this.carData = arr
      }
    },
    changepoint(data) {
      console.log(data)
      this.getData()
    },
    getData() {
      getdata({
        loadingId: '1548320237456'
      }).then(res => {
        console.log(res.data.result)
        this.infomation = res.data.result
        this.changeData(res.data.result.loadingDeatail)
        this.changeCarData(res.data.result.vehicle)
      })
    }
  },
  mounted() {
    this.maxstep = this.data.length + 1;
    console.log(getdata)
    this.getData()
    getdata2({
      loadingId: '1548320237456'
    }).then(res => {
      this.pointData = res.data.result
    })
  },
};
</script>

<style lang="less">
  .infomation{
    margin-left: 50px;
    text-align: left;
    li{
      overflow: hidden;
    }
    .title{
      float: left;
      width: 150px;
    }
    .content{
      float: left;
    }

  }
</style>
