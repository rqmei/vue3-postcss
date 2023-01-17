<template>
  <div class="hello-world-wrap">
    <h1>{{ msg }}</h1>
   <div class="calc-wrap">
    1、calc计算数字的大小基础文字
    <p>计算变大了2倍</p>
   </div>

   <div class="media-wrap">
   2、 媒体查询相关
    <div class="custom-media-wrap">自定义媒体查询</div>
   </div>

   <div class="selector-wrap">
    3、选择器相关
    <h1>第一个选择器</h1>
    <h2>第二个选择器</h2>
   </div>

   <div class="image-set-wrap">
    4、image-set按不同分辨率加载对应的图片
    <div>
    <!-- <img src="../assets/imgs/1x.jpg" srcset="../assets/imgs/1x.jpg 1200W,../assets/imgs/2x.jpg 800W,../assets/imgs/3x.jpeg 320W" sizes="(max-width: 320px) 300w, 1200w"/> -->
    </div>
    </div>

    <div class="function-wrap">
      5、函数相关
      <div class="color-wrap">color() 函数</div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
@import url("helloWorld.css");

</style>
