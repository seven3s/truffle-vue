// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Web3 from 'web3';
import iView from 'iview';
import moment from 'moment';
import config from '@/common/config';
import SimpleStorageABI from '../build/contracts/SimpleStorage.json';

import 'iview/dist/styles/iview.css';

// your top-menu and footer
// import TopMenu from '@components/top-menu/';
// import XCFooter from '@components/footer/';

// Time format package
moment.locale('zh-cn');
Vue.config.productionTip = false;
Vue.use(iView);

// Vue.component('xc-footer', XCFooter);
// Vue.component('xc-menu', TopMenu);
Vue.config.productionTip = false;
window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 injected browser: OK.');
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('Web3 injected browser: Fail. You should consider trying MetaMask. or using Local web3');
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    }
    const contract = require('truffle-contract');
    const simpleStorage = contract(SimpleStorageABI);
    window.gas = config.GAS;
    simpleStorage.setProvider(window.web3.currentProvider);
    let simpleStorageInstance;
    window.web3.eth.getAccounts((error, accounts) => {
        window.account = accounts[0];
        simpleStorage.deployed().then((instance) => {
            window.instance = instance;
            simpleStorageInstance = instance;
            simpleStorageInstance.owner.call().then((res) => {
                // 使用实际的合约所有者地址为owner
                window.owner = res;
                return simpleStorageInstance;
            }).then(() => {
                /* eslint-disable no-new */
                new Vue({
                    el: '#app',
                    router,
                    template: '<App/>',
                    components: {
                        App
                    }
                });
            });
        });
    });
});
