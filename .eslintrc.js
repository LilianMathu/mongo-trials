module.exports = {
    'env': [
      'eslint:recommended',
      'plugin:vue/essential'
    ],

    'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],

    'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},

    'parserOptions': {
		'ecmaVersion': 2018
	},

    'plugins': [
		'vue'
	],

    'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},

    root: true,

    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true
    },

    rules: {
      indent: [
        'error',
        'tab'
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      quotes: [
        'error',
        'single'
      ],
      semi: [
        'error',
        'always'
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },

    parserOptions: {
      ecmaVersion: 2018,
      parser: 'babel-eslint'
    }
};
