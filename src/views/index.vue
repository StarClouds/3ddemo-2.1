<template>
  <div class="index">
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
      <el-slider v-model="size" :step="0.1" :max="2" :min="0.5"></el-slider>
    </div>
    <div class="block" style="width:400px">
      <el-button @click="changeStep(1)" type="primary">上一步</el-button>
      <el-button @click="changeStep(2)" type="primary">下一步</el-button>
      当前第{{step}}步
    </div>
    <plugin3D :data="data" :carData="carData" :size="size" :view="view" :step="step"></plugin3D>
  </div>
</template>

<script>
import plugin3D from './Home';
export default {
  name: 'index',
  components: {
    plugin3D,
  },
  data() {
    return {
      data: [
        {
          step: 1,
          QUANTITY: 60,
          ROW: 4,
          COLUMN: 5,
          LAYER: 3,
          LENGTH_POSITION: 0,
          WIDTH_POSITION: 0,
          HEIGHT_POSITION: 60,
          LENGTH: 273.6,
          WIDTH: 342,
          HEIGHT: 288.6,
          color: '#ff7500'
        },
        {
          step: 2,
          QUANTITY: 5,
          ROW: 1,
          COLUMN: 5,
          LAYER: 1,
          LENGTH_POSITION: 273.5,
          WIDTH_POSITION: 0,
          HEIGHT_POSITION: 60,
          LENGTH: 72.5,
          WIDTH: 353.5,
          HEIGHT: 184.5,
          color: '#0eb83a',
        },
        {
          step: 3,
          QUANTITY: 5,
          ROW: 9,
          COLUMN: 5,
          LAYER: 2,
          LENGTH_POSITION: 350,
          WIDTH_POSITION: 0,
          HEIGHT_POSITION: 0,
          LENGTH: 652.5,
          WIDTH: 353.5,
          HEIGHT: 369,
          color: '#9ed048',
        },
        {
          step: 4,
          QUANTITY: 5,
          ROW: 1,
          COLUMN: 5,
          LAYER: 1,
          LENGTH_POSITION: 1002.5,
          WIDTH_POSITION: 0,
          HEIGHT_POSITION: 0,
          LENGTH: 72.5,
          WIDTH: 353.5,
          HEIGHT: 184.5,
          color: '#ff461f',
        },
        {
          step: 5,
          QUANTITY: 5,
          ROW: 7,
          COLUMN: 5,
          LAYER: 1,
          LENGTH_POSITION: 1075,
          WIDTH_POSITION: 0,
          HEIGHT_POSITION: 0,
          LENGTH: 543.9,
          WIDTH: 374.5,
          HEIGHT: 197.2,
          color: '#ff4777',
        },
        {
          step: 6,
          QUANTITY: 5,
          ROW: 1,
          COLUMN: 4,
          LAYER: 1,
          LENGTH_POSITION: 1618.9,
          WIDTH_POSITION: 0,
          HEIGHT_POSITION: 0,
          LENGTH: 77.7,
          WIDTH: 299.6,
          HEIGHT: 197.2,
          color: '#4b5cc4',
        },
      ],
      size: 1,
      view: {
        x: -8,
        y: -28,
        z: 3,
      },
      step: 0,
      maxstep: 0,
      carData: {
        width: 380,
        height: 470,
        length: 1750,
      },
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
    }
  },
  mounted() {
    this.maxstep = this.data.length + 1;
  },
};
</script>

<style>

</style>
