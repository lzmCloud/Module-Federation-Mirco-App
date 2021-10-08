
# 开发环境
1. 到每个项目中先 `yarn` 安装一下依赖
2. `yarn start` 启动每个项目
3. 打开 http://localhost:8080
4. 可以看到本开发环境的整个项目（container为主项目，子应用对应端口8081、8082、 8083）
   
    完-----

# 生产环境
1. `yarn build` 对每个项目（container除外）执行打包命令
2. 每个项目 `cd dist` 使用 `browser-sync start --server --files  **/*` 对打包后的资源启动本地服务
3. 修改 `container` 的 `webpack.pro.config.js` 文件的 `ModuleFederationPlugin` 模块引用地址(对应步骤2中启动的地址端口)
4. `yarn build`打包 `container` 项目。 
5. `cd dist && browser-sync start --server --files  **/*`启动 `container` 项目即可
   
   完-----

[实用工具 Browser Sync](http://www.browsersync.cn/#install)

详情可咨询微信号 bHptbHptOTU=



