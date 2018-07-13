module.exports = {
	extends: [
		'xo/esnext',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:unicorn/recommended'
	],
	env: {
		browser: true,
		jquery: true,
		jest: true
	},
	plugins: ['security', 'filenames', 'unicorn', 'import'],
	rules: {
		'padded-blocks': 'off',
		'operator-assignment': 'off',
		eqeqeq: ['error', 'allow-null'],
		'no-eq-null': 'off',
		'quote-props': ['error', 'as-needed'],
		'capitalized-comments': 'warn',
		curly: ['error', 'multi-line'],
		'arrow-parens': 'off',
		'no-console': 'warn',
		'no-debugger': 'warn',
		'linebreak-style': 'warn',
		'filenames/match-exported': ['error', 'kebab'],
		'unicorn/explicit-length-check': 'off'
	}
};
