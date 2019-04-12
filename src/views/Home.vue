<template>
  <div class="home">
    <div id="bigbox" :style="`transform-style: preserve-3d;position: relative;transform: rotateY(${view.y}deg) rotateX(${view.x}deg) rotateZ(${view.z}deg);`">
      <div class="3d-content" v-html="box3D">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: ['data', 'size', 'view', 'carData', 'step', 'changeFlag'],
  data() {
    return {
      box3D: '',
      data2: [],
      carData2: {},
    };
  },
  methods: {
    renderBox() {
      this.box3D = '';
      const carData = this.carData2
      const aopBACKW = `<div style=" width: ${carData.width}px;
                        height:${carData.height}px;
                        position: absolute;
                        background: #44cef6;
                        transform: translateZ(-1px) translateY(0px);
                        top: ${-carData.height + 2}px;"></div>`;
      const aopBACKW1 = `<div style=" width: ${carData.width}px;
                        height:${carData.beibugaodu}px;
                        position: absolute;
                        background: #44cef6;
                        transform: translateZ(-1px) translateY(0px);
                        top: ${-carData.height + 2}px;"></div>`;
      const aopBACKW2 = `<div style=" width: ${carData.width}px;
                        height:${carData.beibugaodu2}px;
                        position: absolute;
                        background: #44cef6;
                        transform: translateZ(${carData.dobuchangdu2}px) translateY(0px);
                        top: ${-carData.beibugaodu2 + 2}px;"></div>`;
      const aopLEFTW = `<div style=" width: ${carData.length}px;
                        height:${carData.height}px;
                        position: absolute;
                        left: ${(carData.width - carData.length) / 2}px;
                        background: #70f3ff;
                        transform:rotateY(90deg) translateZ(${-carData.width / 2}px) translateX(${-carData.length / 2}px);
                        top: ${-carData.height + 2}px;"></div>`;
      const aopBOTTOMW = `<div style=" width: ${carData.width}px;
                        height:${carData.length}px;
                        position: absolute;
                        top: ${(carData.height - carData.length) / 2}px;
                        background: #177cb0;
                        transform:rotateX(90deg) translateZ(${carData.height/2 - 2}px) translateY(${carData.length / 2}px);
                        "></div>`;
      const aopBOTTOMW1 = `<div style=" width: ${carData.width}px;
                        height:${carData.dobuchangdu}px;
                        position: absolute;
                        top: ${(carData.height - carData.dobuchangdu) / 2}px;
                        background: #177cb0;
                        transform:rotateX(90deg) translateZ(${carData.height/2 - 2}px) translateY(${carData.dobuchangdu / 2 + carData.dobuchangdu2}px);
                        "></div>`;
      const aopBOTTOMW2 = `<div style=" width: ${carData.width}px;
                        height:${carData.dobuchangdu2}px;
                        position: absolute;
                        top: ${(carData.height - carData.dobuchangdu2) / 2}px;
                        background: #177cb0;
                        transform:rotateX(90deg) translateZ(${carData.height/2 - 2 + carData.beibugaodu2}px) translateY(${carData.dobuchangdu2 / 2}px);
                        "></div>`;
      for (let i = 0; i < this.data2.length; i++) {
        const item = this.data2[i];
        const color = 'pink';
        console.log(item,'1')
        const box = `<div class="box" style="transform:translateX(${item.WIDTH_POSITION}px) translateY(-${(item.HEIGHT)+item.HEIGHT_POSITION}px) translateZ(${(item.LENGTH/2) + item.LENGTH_POSITION}px)">`;
        const aopCLOSE = `</div>`;
        const aopUP1 = `<div style="background: ${color};top: ${(item.HEIGHT - item.LENGTH) / 2}px;width: ${item.WIDTH}px;height: ${item.LENGTH}px; transform: rotateX(90deg) translateZ(${item.HEIGHT/2}px);" class="aop up" >`;
        const aopDOWN1 = `<div style="background: ${color};top: ${(item.HEIGHT - item.LENGTH) / 2}px;width: ${item.WIDTH}px;height: ${item.LENGTH}px; transform: rotateX(270deg) translateZ(${item.HEIGHT/2}px);" class="aop up" >`;
        const aopLEFT1 = `<div style="background: ${color};left: ${(item.WIDTH - item.LENGTH) / 2}px;width: ${item.LENGTH}px;height: ${item.HEIGHT}px; transform: rotateY(90deg) translateZ(${-item.WIDTH/2}px);" class="aop left" >`;
        const aopRIGHT1 = `<div style="background: ${color};left: ${(item.WIDTH - item.LENGTH) / 2}px;width: ${item.LENGTH}px;height: ${item.HEIGHT}px; transform: rotateY(90deg) translateZ(${item.WIDTH/2}px);" class="aop right">`;
        const aopBEFORE1 = `<div style="background: ${color};width: ${item.WIDTH}px;height: ${item.HEIGHT}px; transform: rotateZ(0deg) translateZ(${item.LENGTH/2}px);" class="aop before">`;
        const aopAFTER1 = `<div style="background: ${color};width: ${item.WIDTH}px;height: ${item.HEIGHT}px; transform: rotateZ(0deg) translateZ(${-item.LENGTH/2}px);" class="aop after">`;
        let aopROW = '';
        let aopROW2 = '';
        let aopCOLUMN = '';
        let aopCOLUMN2 = '';
        let aopLAYER = '';
        let aopLAYER2 = '';
        if (item.ROW > 1) {
          for (let i = 0; i < item.ROW; i++) {
            const heightItem = item.LENGTH / (item.ROW) * i;
            aopROW += `<div class="linelap" style="bottom: ${heightItem}px;"></div>`;
            aopROW2 += `<div class="linelap2" style="left: ${heightItem}px;"></div>`;
          };
        };
        if (item.COLUMN > 1) {
          for (let i = 1; i < item.COLUMN; i++) {
            const heightItem = item.WIDTH / (item.COLUMN) * i;
            aopCOLUMN += `<div class="linelap" style="bottom: ${heightItem}px;"></div>`;
            aopCOLUMN2 += `<div class="linelap2" style="left: ${heightItem}px;"></div>`;
          };
        };
        if (item.LAYER > 1) {
          for (let i = 1; i < item.LAYER; i++) {
            const heightItem = item.HEIGHT / (item.LAYER) * i;
            aopLAYER += `<div class="linelap" style="bottom: ${heightItem}px;"></div>`;
            aopLAYER2 += `<div class="linelap2" style="left: ${heightItem}px;"></div>`;
          };
        };
        // ------UP
        const aopUP = aopUP1 + aopROW + aopCOLUMN2 + aopCLOSE;
        const aopDOWN = aopDOWN1 + aopROW + aopCOLUMN2 + aopCLOSE;
        const aopLEFT = aopLEFT1 + aopROW2 + aopLAYER + aopCLOSE;
        const aopRIGHT = aopRIGHT1 + aopROW2 + aopLAYER + aopCLOSE;
        const aopBEFORE = aopBEFORE1 + aopCOLUMN2 + aopLAYER + aopCLOSE;
        const aopAFTER = aopAFTER1 + aopCOLUMN2 + aopLAYER + aopCLOSE;
        this.box3D += box + aopUP + aopDOWN + aopLEFT + aopRIGHT + aopBEFORE + aopAFTER + aopCLOSE;
      };
      // this.box3D = this.box3D + aopBACKW + aopLEFTW + aopBOTTOMW;
      this.box3D = this.box3D + aopBACKW1 + aopBACKW2 + aopLEFTW + aopBOTTOMW1 + aopBOTTOMW2;

    },
    renderBoxLOSER1() {
      for (let i = 0; i < this.data2.length; i++) {
        const item = this.data2[i];
        console.log(item,'1')
        const lump1 = `<div class="box" style="transform:translateX(${item.WIDTH_POSITION}px) translateY(-${(item.HEIGHT)+item.HEIGHT_POSITION}px) translateZ(${(item.LENGTH/2) + item.LENGTH_POSITION}px)">
                        <div style="top: ${(item.HEIGHT - item.LENGTH) / 2}px;width: ${item.WIDTH}px;height: ${item.LENGTH}px; transform: rotateX(90deg) translateZ(${item.HEIGHT/2}px);" class="aop up" ></div>
                        <div style="top: ${(item.HEIGHT - item.LENGTH) / 2}px;width: ${item.WIDTH}px;height: ${item.LENGTH}px; transform: rotateX(90deg) translateZ(${-item.HEIGHT/2}px);" class="aop down" ></div>
                        <div style="left: ${(item.WIDTH - item.LENGTH) / 2}px;width: ${item.LENGTH}px;height: ${item.HEIGHT}px; transform: rotateY(90deg) translateZ(${-item.WIDTH/2}px);" class="aop left" ></div>
                        <div style="left: ${(item.WIDTH - item.LENGTH) / 2}px;width: ${item.LENGTH}px;height: ${item.HEIGHT}px; transform: rotateY(90deg) translateZ(${item.WIDTH/2}px);" class="aop right"></div>
                        <div style="width: ${item.WIDTH}px;height: ${item.HEIGHT}px; transform: rotateZ(0deg) translateZ(${-item.LENGTH/2}px);" class="aop after"></div>
                        <div style="width: ${item.WIDTH}px;height: ${item.HEIGHT}px; transform: rotateZ(0deg) translateZ(${item.LENGTH/2}px);" class="aop before"></div>
                      `;
        let lumpLayer = '';
        if (item.LAYER > 0) {
          let layerItem = '';
          for (let i = 0; i < item.LAYER; i++) {
            const heightItem = item.HEIGHT / (item.LAYER) * i;
            console.log(item.HEIGHT,'2222')
            layerItem += `<div style="top: ${(item.HEIGHT - item.LENGTH) / 2}px;width: ${item.WIDTH}px;height: ${item.LENGTH}px; transform: rotateX(90deg) translateZ(${-item.HEIGHT / 2 + heightItem}px);" class="aop up aop2" >charu</div>`;
          };
          lumpLayer = layerItem;
          console.log(lumpLayer,'lumpLayer');
        }
        const lumpCharu = lumpLayer;
        const lump2 = '`</div>`';
        const lump = lump1 + lumpCharu + lump2;
        this.box3D += lump;
      };
    },
    copyArr(arr) {
      let res = []
      for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
      }
      return res;
    },
    getdata2(num) { // 通过数据处理完成视距缩放
      this.data2 = JSON.parse(JSON.stringify(this.handleStep(this.step)));
      for (let i = 0; i < this.data2.length; i++) {
        this.data2[i].LENGTH_POSITION = this.data2[i].LENGTH_POSITION / num;
        this.data2[i].WIDTH_POSITION = this.data2[i].WIDTH_POSITION / num;
        this.data2[i].HEIGHT_POSITION = this.data2[i].HEIGHT_POSITION / num;
        this.data2[i].LENGTH = this.data2[i].LENGTH / num;
        this.data2[i].WIDTH = this.data2[i].WIDTH / num;
        this.data2[i].HEIGHT = this.data2[i].HEIGHT / num;
      };
      this.carData2.width = this.carData.width / num;
      this.carData2.height = this.carData.height / num;
      this.carData2.length = this.carData.length / num;
      this.carData2.underPanHeight = this.carData.underPanHeight / num;
      this.carData2.crankHeight = this.carData.crankHeight / num;
      this.carData2.crankLength = this.carData.crankLength / num;
      this.carData2.beibugaodu = this.carData2.height - this.carData2.crankHeight + this.carData2.underPanHeight;
      this.carData2.beibugaodu2 = this.carData2.crankHeight - this.carData2.underPanHeight;
      this.carData2.dobuchangdu = this.carData2.length - this.carData2.crankLength;
      this.carData2.dobuchangdu2 = this.carData2.crankLength;

    },
    handleStep(num) {
      let resArr = [];
      for (let i = 0; i < num; i++) {
        resArr.push(this.data[i]);
      };
      return resArr;
    },
  },
  mounted() {
    this.getdata2(this.size);
    this.renderBox();
    console.log(this.carData2, 'carData2carData2')
  },
  watch: {
    size() {
      this.getdata2(this.size);
      this.renderBox();
    },
    step() {
      console.log(this.step);
      this.handleStep(this.step);
      this.getdata2(this.size);
      this.renderBox();
    },
    changeFlag() {
      this.getdata2(this.size);
      this.renderBox();
    }
  },
};
</script>

<style lang="less">
  #bigbox{
    margin-left: 800px;
    margin-top: 500px;
    .linelap{
      height: 0px;
      width: 100%;
      border: 1px solid #000;
      position: absolute;
    }
    .linelap2{
      width: 0px;
      height: 100%;
      border: 1px solid #000;
      position: absolute;
    }
  }
  .box{
    transform-style: preserve-3d;
    position: absolute;
  }
  .box>div{
    position: absolute;
    font-size: 38px;
  }
  .aop{
    border: 1px solid #000;
    background: red;
    position: absolute;
  }

</style>
