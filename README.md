[![](static/logo.png)](https://bbs.myens.shop)

![](https://img.shields.io/github/stars/huarxia/truffle-vue.svg)
![](https://img.shields.io/github/forks/huarxia/truffle-vue.svg)
![](https://img.shields.io/github/issues/huarxia/truffle-vue.svg)
![](https://img.shields.io/github/license/huarxia/truffle-vue.svg)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/huarxia/truffle-vue.svg?style=social)](https://twitter.com/myens_shop)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=social)](https://gitter.im/myens)

# USE Truffle-VUE Box

This box is a Vue based solidity Dapp development framework.
[中文版文档](README_cn.md)

## Getting Started

### Install

> First

```
$ (sudo) npm install -g ethereumjs-testrpc
```

> Second

```
$ (sudo) npm install -g truffle
```

> Third

```
$ truffle unbox huarxia/truffle-vue
```
or

```
$ https://github.com/huarxia/truffle-vue.git
$ cd truffle-vue
```

> Fourth

```
$ npm install
```

> Fifth new shell window
 
```
$ testrpc
```
> Sixth on current window

```
$ truffle compile
$ truffle migration
$ npm run dev
```
### develop shell

> compile

```
$ truffle compile
```
> migration

```
$ truffle migration
```

## use gulp
> Global install gulp

```
$ (sudo) npm install gulp -g
```
> If it is the first use of direct operation `gulp`

```
$ gulp
```
> If it was used second times

```
$ gulp start
```
### Which commands are included?

```
gulp // First compile migrate and run
gulp start // First run
gulp clean // delete build
gulp compile // Compile smart contract and delete build first
gulp migrate // Deploy smart contracts to localgulp reset // Redeploy smart contract to local and restart service
gulp migrate-deploy // Deploying smart contracts to ropsten using infura
gulp deploy // Deploying smart contracts to ropsten using infura and run dev
```
### Thanks for these open source projects
1. [truffle](https://github.com/trufflesuite/truffle)
2. [Vue.js](http://vuejs.org/)
3. [ganache-cli](https://github.com/trufflesuite/ganache-cli) After testrpc is renamed
4. [gulp](http://gulpjs.com/)
5. [webpack](https://webpack.github.io/)
6. [infura.io](https://infura.io/)
7. [solidity](https://github.com/ethereum/solidity)
8. [www.iviewui.com](https://www.iviewui.com)
......

by [huaxia](https://github.com/huarxia)
talk [bbs](https://bbs.myens.shop) for more info.
