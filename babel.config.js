module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        ["@babel/plugin-transform-flow-strip-types"],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["module-resolver", {
          "alias": {
            "@pages": "./src/pages",
            "@molecules": "./src/components/molecules",
            "@atoms": "./src/components/atoms",
            "@organisms": "./src/components/organisms",
            "@utils": "./src/utils",
            "@routes": "./src/routes",
            "@icons": "./src/assets/icons",
            "@store": "./src/store",
            "@schemas": "./src/schemas",
            "@images": "./src/assets/images",
        },
          "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
          ]
        }],
      ]
    };
  };