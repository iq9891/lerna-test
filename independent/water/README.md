# water

## 步骤

1. vue-cli 生成
2. npx lerna init --independent

### 新增包
1. 添加一个 **@iq9891lt/text** 命令 -> `npx lerna create @iq9891lt/text`
2. 配置 **@iq9891lt/text** 中 package。json 命令
3. 项目根目录运行 `yarn build` 打包所有

## 参考

- [使用 Lerna 管理模块](https://juejin.im/post/5dbd3570e51d452a251381ef)
- [lerna: 基础使用](https://blog.csdn.net/qq_28387069/article/details/88388824)
- [一步步学习如何用Lerna](https://blog.csdn.net/pwc1996/article/details/86559619)
- [lerna -- 多包管理工具](https://blog.csdn.net/i10630226/article/details/79313970)
- [Lerna 中文教程详解](https://blog.csdn.net/weixin_33695450/article/details/91371655)
- [Lerna 中文教程详解](https://segmentfault.com/a/1190000019350611?utm_source=tag-newest)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
