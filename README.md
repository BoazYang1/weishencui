# V-Power-Product 项目

## GitHub Pages 部署指南

本文档将指导您如何将此Next.js项目部署到GitHub Pages上。即使您没有相关基础，也可以按照以下步骤轻松完成部署。

### 前提条件

1. 一个GitHub账号 - 如果没有，请在[GitHub官网](https://github.com/)注册
2. Git安装在您的电脑上 - 可以从[Git官网](https://git-scm.com/downloads)下载安装

### 步骤一：创建GitHub仓库

1. 登录您的GitHub账号
2. 点击右上角的"+"图标，选择"New repository"
3. 填写仓库名称（例如：v-power-product）
4. 选择公开(Public)仓库
5. 点击"Create repository"按钮创建仓库

### 步骤二：初始化本地Git仓库并推送到GitHub

打开命令行工具(如PowerShell或CMD)，执行以下命令：

```bash
# 进入项目目录
cd "C:\Users\Lenovo P520c\Desktop\v-power-product"

# 初始化Git仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "初始提交"

# 添加远程仓库地址（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/v-power-product.git

# 推送到GitHub
git push -u origin main
```

如果您的默认分支是master而不是main，请使用：
```bash
git push -u origin master
```

### 步骤三：修改next.config.mjs文件

我们已经修改了next.config.mjs文件，添加了GitHub Pages所需的配置。您需要取消注释并修改basePath和assetPrefix配置，将'repo-name'替换为您的实际仓库名：

```javascript
// 如果您的仓库名不是用户名.github.io，则需要设置basePath和assetPrefix
basePath: '/v-power-product',
assetPrefix: '/v-power-product/',
```

### 步骤四：使用GitHub Actions自动部署

我们已经创建了GitHub Actions工作流文件(.github/workflows/deploy.yml)，它会在您推送代码到main分支时自动构建并部署项目。

1. 修改完next.config.mjs后，提交并推送更改：

```bash
git add .
git commit -m "配置GitHub Pages部署"
git push
```

2. 在GitHub仓库页面，点击"Actions"标签查看部署进度
3. 部署完成后，前往仓库的"Settings" > "Pages"页面
4. 在"Source"部分，选择"Deploy from a branch"，然后选择"gh-pages"分支和"/(root)"文件夹
5. 点击"Save"保存设置

几分钟后，您的网站将在以下地址可访问：
https://YOUR_USERNAME.github.io/v-power-product/

### 步骤五：手动部署（可选）

如果您想手动部署，可以使用我们添加到package.json的部署脚本：

```bash
npm run deploy
```

这个命令会构建项目并将生成的静态文件部署到gh-pages分支。

### 故障排除

1. **部署后页面空白或资源加载失败**：确保您正确设置了next.config.mjs中的basePath和assetPrefix

2. **GitHub Actions部署失败**：检查Actions日志以获取详细错误信息

3. **本地构建失败**：尝试使用`--legacy-peer-deps`参数安装依赖：
   ```bash
   npm install --legacy-peer-deps
   ```

### 注意事项

- 每次推送到main分支后，GitHub Actions会自动构建并部署您的项目
- 首次部署可能需要几分钟才能生效
- 如果您更改了仓库名称，记得同时更新next.config.mjs中的basePath和assetPrefix