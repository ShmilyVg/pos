<template>
  <div id="app">
    <LeftNav></LeftNav>
      <div class="main">
        <Pos></Pos>
        <router-view/>
      </div>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav.vue";
import Pos from "./components/Pos.vue";
export default {
  name: "App",
  components: {
    LeftNav,
    Pos
  }
};
</script>

<style>
#app {
  font-family: "Micorsoft YaHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  width: 95%;
  height: 100%;
  background: #EFF2F7;
  float: left;
  overflow: auto;
}
</style>
