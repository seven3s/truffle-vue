[![](static/logo.svg)](https://bbs.myens.shop){:width="300px"}

![](https://img.shields.io/github/stars/huarxia/truffle-vue.svg)
![](https://img.shields.io/github/forks/huarxia/truffle-vue.svg)
![](https://img.shields.io/github/issues/huarxia/truffle-vue.svg)
![](https://img.shields.io/github/license/huarxia/truffle-vue.svg)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/huarxia/truffle-vue.svg?style=social)](https://twitter.com/myens_shop)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=social)](https://gitter.im/myens)

# 使用 Truffle-VUE Box

这是一个基于vue的solidity开发Dapp框架.
[English Doc](README.md)
## 开箱使用

### Install truffle

> 第一步

```
$ (sudo) npm install -g ethereumjs-testrpc
```

> 第二步

```
$ (sudo) npm install -g truffle
```

> 第三步

```
$ truffle unbox huarxia/truffle-vue
```
或者

```
$ https://github.com/huarxia/truffle-vue.git
$ cd truffle-vue
```

> 第四步

```
$ npm install
```

> 第五步 新开一个shell窗口
 
```
$ testrpc
```
> 第六步 回到刚才的 shell窗口

```
$ truffle compile
$ truffle migration
$ npm run dev
```
### develop shell

> 编译智能合约

```
$ truffle compile
```
> 链接本地区块链

```
$ truffle migration
```
## 使用gulp
> 全局安装gulp

```
$ (sudo) npm install gulp -g
```
> 如果是第一次使用直接运行 gulp

```
$ gulp
```
> 如果是第二次

```
$ gulp start
```
### 包含哪些命令？

```
gulp // 首次运行
gulp start // 再次运行
gulp clean // 删除build包
gulp compile // 执行 truffle compile
gulp migrate // 本地开发部署智能合约
gulp reset // 重新编译并部署本地智能合约
gulp migrate-deploy // 使用infura 部署ropsten
gulp deploy // 使用infura 部署ropsten 并在本地运行Dapp
```
### 感谢这些开源项目
1. [truffle](https://github.com/trufflesuite/truffle)
2. [Vue.js](http://vuejs.org/)
3. [ganache-cli](https://github.com/trufflesuite/ganache-cli) 原testrpc
4. [gulp](http://gulpjs.com/)
5. [webpack](https://webpack.github.io/)
6. [infura.io](https://infura.io/)
7. [solidity](https://github.com/ethereum/solidity)
8. [www.iviewui.com](https://www.iviewui.com)
......


by [huaxia](https://github.com/huarxia)
talk [bbs](https://bbs.myens.shop) for more info.
