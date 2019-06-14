<!--  -->
<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-zhangdan"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-shouye"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-gouwuche"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-wode"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-gouwuche"></i>
        <div>购物车</div>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.left-nav {
  width: 5%;
  height: 100%;
  background: #1d8ce0;
  color: #fff;
  float: left;
  font-size: 10px;
}
.iconfont {
  font-size: 24px;
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
li {
  text-align: center;
  border: solid 1px #20a0ff;
  padding: 10px;
}
</style>