// next.config.js
var path = require('path');
var TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	future: {
    webpack5: true,
  },
	publicRuntimeConfig: {
    GITHUB_TOKEN : process.env.GITHUB_TOKEN
	},
	typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
	
	images: {
    domains: ["avatars.githubusercontent.com"],
  },
	resole : {
		modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
	},
	webpack(config, options) {
		config.experiments = {};
		if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
	}
}