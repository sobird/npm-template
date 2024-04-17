# npm-template
npm包 模板仓库

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]

<!-- Badges -->

[npm]: https://img.shields.io/npm/v/@sobird/npm-template.svg
[npm-url]: https://www.npmjs.com/package/@sobird/npm-template
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/npm-template/npm-publish.yml?label=CI&logo=github
[build-status-url]: https://github.com/sobird/npm-template/actions
[size]: https://packagephobia.com/badge?p=@sobird/npm-template
[size-url]: https://packagephobia.com/result?p=@sobird/npm-template

## ts-node with tsconfig-paths

安装完本包后(建议安装到全局)，配置环境变量

```sh
npm i -g @sobird/npm-template
export NODE_OPTIONS="--import=/path/to/register.js"
```

## How to publish

```sh
yarn version --patch
yarn version --minor
yarn version --major
```

## 参考

* [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)