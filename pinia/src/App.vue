<!-- <template>
<img alt="Vue logo" src="./assets/logo.png">
<HelloWorld msg="Welcome to Your Vue.js App" />
<FrontBtn />
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import FrontBtn from './components/FrontBtn.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            FrontBtn
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style> -->

<template>
    <div>

        <router-view></router-view>

    </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
export default {
  name : 'App'
}
</script>
