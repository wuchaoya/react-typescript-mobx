const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

const fs = require('fs');

const apiMocker = require('mocker-api');

const theme = require('./src/config/theme.ts');

const WebHost = require('./src/config/webHost.ts');

const TARGET = process.env.npm_lifecycle_event.split(':').length === 2 ?
	process.env.npm_lifecycle_event.split(':')[1] : process.env.npm_lifecycle_event;

const Mock = process.env.MOCK;

let mockFiles

fs.readdir('./src/mock', (err, files) => {
	mockFiles = files.map(file => path.resolve('./src/mock', file))
	}
)


const {
	addLessLoader, override,
	addWebpackAlias, addBundleVisualizer,
	fixBabelImports, overrideDevServer
} = require('customize-cra');

const addBefore = before => config => {
	Mock && (config.before =  before)
	return config
}

const addProxy = proxy => config => {
	config.proxy = proxy
	return config
}

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
		addLessLoader({javascriptEnabled: true, modifyVars: theme}),
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
	
	devServer: overrideDevServer(
		addBefore(app => apiMocker(app,mockFiles)),
		addProxy({
			'/api': {
				target: WebHost[TARGET],
			},
			'/log': {
				target: 'http://172.16.2.220:8768',
				pathRewrite: {'^/log': ''}
			},
			'/pub': {
				target: WebHost[TARGET],
			}
		})
	),
	
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