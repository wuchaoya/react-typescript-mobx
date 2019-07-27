const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const theme = require('./src/config/theme.ts') ;

const WebHost = require('./src/config/webHost.ts');

const deploy = true;


const {
	addLessLoader, override,
	addWebpackAlias, addBundleVisualizer,
	fixBabelImports
} = require('customize-cra');

module.exports = {
	webpack: override(
		// 按需加载antd
		fixBabelImports('import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: 'css',
			style: true,
		}),
		// less支持
		addLessLoader({javascriptEnabled: true,modifyVars: theme}),
		// 打包后分析包大小
		process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
		// src 设置为根目录
		addWebpackAlias({
			['@']: require('path').resolve(__dirname, 'src'),
		}),
	),
	
	jest: function (config) {
		return config;
	},
	
	devServer: function (configFunction) {
		return function (proxy, allowedHost) {
			if (deploy) {
				const TARGET = process.env.npm_lifecycle_event;
				proxy = {
					'/api': {
						target: WebHost[TARGET],
					},
					'/log': {
						target: 'http://172.16.2.220:8768',
						pathRewrite: {'^/log' : ''}
					},
					'/pub' : {
						target: WebHost[TARGET],
					},
					
				}
			}
			const config = configFunction(proxy, allowedHost);
			
			return config;
		}
	},
	
	paths: function (paths, env) {
		return paths;
	},
}

/**
 * webpack 包分析 废弃
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireBundleAnalyzerPlugin (config, env, pluginOptions = {}) {
	config.plugins = (config.plugins || []).concat([
		new BundleAnalyzerPlugin(pluginOptions)
	])
	return config;
}