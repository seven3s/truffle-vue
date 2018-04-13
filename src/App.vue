<template>
    <div id="app">
        <img src="./assets/logo.png" width="256">
        <router-view
            :instance="instance"
            :web3="web3"
            :gas="gas"
            :owner="owner"
            :account="account"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            instance: window.instance,
            gas: window.gas,
            web3: window.web3,
            account: window.account,
            owner: window.owner
        };
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
