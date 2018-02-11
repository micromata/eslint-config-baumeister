[![npm version](https://img.shields.io/npm/v/eslint-config-baumeister.svg?style=flat)](https://www.npmjs.org/package/eslint-config-baumeister)
[![Build Status](https://travis-ci.org/micromata/eslint-config-baumeister.svg?branch=master)](https://travis-ci.org/micromata/eslint-config-baumeister)
[![devDependency Status](https://david-dm.org/micromata/eslint-config-baumeister/dev-status.svg)](https://david-dm.org/micromata/eslint-config-baumeister#info=devDependencies)
[![peerDependencies Status](https://david-dm.org/micromata/eslint-config-baumeister/peer-status.svg)](https://david-dm.org/micromata/eslint-config-baumeister?type=peer)

# eslint-config-baumeister

> This package provides [Baumeisters](https://github.com/micromata/Baumeister) ESLint settings as an extensible shared config.

The settings are based on [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo), [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security), [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames) with a few adaptions.

## Install

```
$ npm install eslint-config-baumeister --save-dev
$ npx install-peerdeps eslint-config-baumeister --dev --only-peers
```

**Note:**
Installation needs npm `>= 5.2.0` to install the needed peer dependencies via `npx install-peerdeps […]`. If your are using an older npm version you need to install the peer dependencies with:
```
$ npm install eslint eslint-config-xo eslint-plugin-filenames eslint-plugin-import eslint-plugin-security eslint-plugin-unicorn --save-dev
``` 

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
