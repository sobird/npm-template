# npm-template
npm template

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]

<!-- Badges -->

[npm]: https://img.shields.io/npm/v/npm-template-sobird.svg
[npm-url]: https://www.npmjs.com/package/npm-template-sobird
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/npm-template/npm-publish.yml?label=CI&logo=github
[build-status-url]: https://github.com/sobird/npm-template/actions
[size]: https://packagephobia.com/badge?p=npm-template-sobird
[size-url]: https://packagephobia.com/result?p=npm-template-sobird

## ts-node with tsconfig-paths

安装完本包后(建议安装到全局)，配置环境变量

```sh
npm i -g npm-template-sobird
export NODE_OPTIONS="--import=/path/to/register.js"
```

## How to publish

```sh
yarn version --patch
yarn version --minor
yarn version --major
```