<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Official network community</h2>
        <ul>
            <li><a href="https://myens.shop" target="_blank">Exchange ENS</a></li>
            <li><a href="https://bbs.myens.shop" target="_blank">BBS</a></li>
            <li><a href="https://gitter.im/myens" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/myens_shop" target="_blank">Twitter</a></li>
            <li><a href="https://t.me/myens" target="_blank">Telegram</a></li>
        </ul>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
        <div class="test">
            <Alert type="success">The value that has just been set is: {{storageVal}}</Alert>
            <InputNumber
                v-model="value"
                :number="true"
                :autofocus="true"
                placeholder="Enter something..."
                style="width: 418px"></InputNumber>
            <Button type="primary" @click="setValue">setValue</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    props: ['web3', 'instance', 'account', 'gas'],
    data() {
        return {
            msg: 'Welcome to Your truffle-vue Dapp',
            value: 0,
            storageVal: 'null'
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {},
        setValue() {
            this.instance.set(this.value, {from: this.account}).then((res) => {
                if (!!res) {
                    this.instance.get.call({from: this.account}).then((res) => {
                        this.storageVal = res.c[0];
                    });
                }
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
.test {
    margin: 20px auto;
    width: 500px;
}
</style>
