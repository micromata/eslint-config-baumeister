[![npm version](https://img.shields.io/npm/v/eslint-config-baumeister.svg?style=flat)](https://www.npmjs.org/package/eslint-config-baumeister)
[![Build Status](https://travis-ci.org/micromata/eslint-config-baumeister.svg?branch=master)](https://travis-ci.org/micromata/eslint-config-baumeister)
[![devDependency Status](https://david-dm.org/micromata/eslint-config-baumeister/dev-status.svg)](https://david-dm.org/micromata/eslint-config-baumeister#info=devDependencies)
[![peerDependencies Status](https://david-dm.org/micromata/eslint-config-baumeister/peer-status.svg)](https://david-dm.org/micromata/eslint-config-baumeister?type=peer)

# eslint-config-baumeister

> This package provides [Baumeisters](https://github.com/micromata/Baumeister) ESLint settings as an extensible shared config.

## Install

```
$ npm install --save-dev eslint-config-baumeister
```

***Note:***
*Installation needs npm `>= 5.2.0` to install the needed peer dependencies automatically during the `preinstall` npm lifecycle script via `npx install-peerdeps […]`.*

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "baumeister"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "baumeister"
}
```

## Related

* [Baumeister](https://github.com/micromata/Baumeister) - The frontend build workflow for your needs.
- [cli-error-notifier](https://github.com/micromata/cli-error-notifier) - Sends native desktop notifications when npm scripts fail.


## License

MIT © [Michael Kühnel](https://micromata.de)
