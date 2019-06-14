<!--  -->
<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" id="orderHight" class="left">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="点餐" name="first">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column prop="price" label="操作">
                <template scope="scope">
                  <el-button type="text" size="small" @click="removeGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addGoods(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="all-goods">
              数量：
              <span class="cont">{{totalCount}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              金额：
              <span
                class="cont"
              >{{totalPrice}}￥</span>
            </div>
            <el-button type="warning" class="btns">挂单</el-button>
            <el-button type="danger" class="btns" @click="removeAll()">删除</el-button>
            <el-button type="success" class="btns" @click="ok()">结账</el-button>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">热销商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addGoods(goods)">
                <span>{{ goods.goodsName }}</span>
                <span class="o-price">￥{{ goods.price }}</span>
              </li>
            </ul>
          </div>
          <div class="goods-type">
            <el-tabs stretch>
              <el-tab-pane label="汉堡">
                <ul class="cookList">
                  <li v-for="goods in type_1_Goods" :key="goods.goodsId" @click="addGoods(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{ goods.goodsName }}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">小食</el-tab-pane>
              <el-tab-pane label="饮料">饮料</el-tab-pane>
              <el-tab-pane label="套餐">套餐</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeName: "first",
      tableData: [],
      oftenGoods: [],
      type_1_Goods: [],
      totalCount: 0,
      totalPrice: 0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    reHeight() {
      let orderHight = document.body.clientHeight;
      document.getElementById("orderHight").style.height = orderHight + "px";
    },
    getOftenGoods() {
      axios
        .get("http://localhost:8080/bbb")
        .then(response => {
          console.log(response);
          this.oftenGoods = response.data;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    getType_1_Goods() {
      axios
        .get("http://localhost:8080/bbb")
        .then(response => {
          console.log(response);
          this.type_1_Goods = response.data;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    addGoods(goods) {
      console.log("addgoods");
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      if (isHave) {
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        console.log(goods);
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    removeGoods(goods) {
      console.log(goods);
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    getAllMoney() {
      this.totalCount = 0;
      this.totalPrice = 0;
      if (this.tableData) {
        this.tableData.forEach(item => {
          this.totalCount += item.count;
          this.totalPrice += item.price * item.count;
        });
      }
    },
    removeAll() {
      this.tableData = [];
      this.totalCount = this.totalPrice = 0;
    },
    ok() {
      this.$message({
        message: "支付成功，共计"+this.totalPrice+"元",
        type: "success"
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getOftenGoods();
    this.getType_1_Goods();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.reHeight();
  },
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
.left,
.right {
  border: solid 1px #1d8ce0;
}

.btns {
  margin-top: 17px;
}

.title {
  height: 20px;
  padding: 10px;
  background: #f9fafc;
  border: solid 1px #d3dce6;
}
.often-goods-list {
  cursor: pointer;
}
.often-goods-list ul li {
  list-style-type: none;
  background: #fff;
  float: left;
  border: solid 1px #e5e9f2;
  padding: 10px;
  margin: 5px;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 5px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.all-goods {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #606266;
  font-weight: bold;
  font-size: 14px;
  background: #fff;
}
.cont {
  font-size: 20px;
  color: #f00;
}
</style>