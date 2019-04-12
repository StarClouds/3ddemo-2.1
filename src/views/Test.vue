<template>
  <div class="Test">
    <div id="bigboxs">
      <ul class="d3-contentss" style="transform-style: preserve-3d; transform:translate(-50%,-50%) rotateX(-45deg)  rotateY(-45deg);">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li style="width:200px;
                        height:200px;
                        position: absolute;
                        background: #44cef6;
                        transform: translateZ(30px) translateY(1px);
                        top: 200px">

        </li>
      </ul>
    </div>
    <ul style="transform-style: preserve-3d; transform:translate(-50%,-50%) rotateX(-45deg)  rotateY(-45deg);">

    </ul>
  </div>

</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
*{
  list-style: none;
}
.Test{
}
ul {
  position: absolute;
  top: 50%;
  left: 50%;
}
.d3-contentss{
  position: absolute;
  top: 50%;
  left: 50%;
}
li {

  width: 200px;
  height: 200px;
  position: absolute;
}
li:nth-of-type(2) {
  background: rgba(255, 10, 230, 0.5);
  transform: rotateX(90deg) translateZ(100px)
}

li:nth-of-type(3) {
  background: rgba(0, 10, 230, 0.5);
  transform: rotateX(90deg) translateZ(-100px)
}
li:nth-of-type(4) {
  background: rgba(25, 100, 230, 0.5);
  transform: rotateY(90deg) translateZ(100px)
}

li:nth-of-type(5) {
  background: rgba(0, 10, 71, 0.5);
  transform: rotateY(90deg) translateZ(-100px)
}
li:nth-of-type(1) {

  background: rgba(40, 200, 100, 1);

  transform: translateZ(100px)

}

li:nth-of-type(6) {
  background: rgba(255, 35, 30, 0.5);
  transform: translateZ(-100px)
}

</style>
