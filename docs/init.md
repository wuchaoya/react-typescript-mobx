### 初始化项目

1. 安装 `create-react-app`

```
yarn add create-react-app -g
```
2. 创建 `typescript` 版本 `react`

```
yarn create react-app ts-qc-web --typescript
```


3. 构建查看构建后包大小

```
yarn build && du -sh build
```

> build 文件夹大小为524k，大小还可以。比 `Ant Design Pro` 构建要小 \frac{1}{4}

4. 分析 Bundle (包) 大小

```
yarn add source-map-explorer
```

然后在 package.json 中，将以下行添加到 scripts 中：

```

"scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```

5. 更换 `webpack` 的 `Analyzer`, 安装 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

```
yarn add -D webpack-bundle-analyzer
```

6. 使用 [react-app-rewired](https://github.com/timarney/react-app-rewired#alternatives) 对 create-react-app 的默认配置进行自定义

 > 引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，还需要安装 customize-cra。


```
$ yarn add react-app-rewired customize-cra
```

```
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * webpack 包分析
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireBundleAnalyzerPlugin(config, env, pluginOptions = {}) {
	config.plugins = (config.plugins || []).concat([
		new BundleAnalyzerPlugin(pluginOptions)
	])
	return config
}

module.exports = function override(config, env) {
	
	config = rewireBundleAnalyzerPlugin(config, env)
	return config;
	
};
```

```
"scripts": {
    "analyze": "react-app-rewired build --report",
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```

运行 `yarn analyze` , 比官网推荐的  `source-map-explorer` 好看多了。

7. 调整项目结构

8. 更改配置

```

```

9. 集成UI 库， 请求，添加less，ramdaJS