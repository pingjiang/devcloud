# devcloud framework

## 构建命令

``` sh
# set CYPRESS_INSTALL_BINARY=0
export CYPRESS_INSTALL_BINARY=0

# 安装依赖
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build -- --report

# run lint
npm run lint
npm run lint -- --fix

# run unit tests
npm run test:unit

# run e2e tests
npm run test:e2e

# 安装到本地后，用于app开发调试
npm link
```

## 框架提供的能力

* 采用vue/vue-router/vuex/iview技术栈（应用不要修改这些依赖的版本）；
* 封装axios作为网络请求库（支持cookie），可以使用`$http`调用；
* 封装`vue-wait`作为加载状态跟踪库，可以使用`$wait`调用；
* 封装了接口请求结果跟踪，可以使用`$waitData`调用；
* 封装`echarts`，可以使用`<BaseChart>`调用；
* 封装了`utils`库，可以使用`$utils`调用，支持`dayjs`日期处理和`lodash`函数式编程；
* 提供公共导航等组件，提供用户管理，项目管理等公共能力；

## 使用框架开发应用

```sh
git clone http://git.io/devcloud-starter devcloud-hello

export CYPRESS_INSTALL_BINARY=0
npm install

# 本地开发devcloud-framework测试可以使用npm link测试最新框架能力
npm run link:framework
```

## 开源库

* https://github.com/iamkun/dayjs
* https://github.com/f/vue-wait
* https://github.com/vouill/vuex-api 感觉不好用
* https://github.com/christianmalek/vuex-rest-api 
