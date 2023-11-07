module.exports = {
  env: {
    // код призначений для виконання в браузері
    browser: true,
  },
  // для аналізу коду використовується парсер TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
	// код використовує модульний синтаксис
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
	// для заборони імен класів, які не є "PascalCase"
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
    ],
	// вимагає відступи у 2 пробіли
    '@typescript-eslint/indent': ['error', 2],
	// встановлює стиль для роздільників полів об'єкта та типів
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
	// рекомендує використовувати ключове слово "namespace"
    '@typescript-eslint/prefer-namespace-keyword': 'error',
	// встановлює стиль використання одинарних лапок для рядків
    '@typescript-eslint/quotes': ['error', 'single'],
	// вимагає завжди ставити крапку з комою
    '@typescript-eslint/semi': ['error', 'always'],
	// встановлює стиль розставлення пропусків в анотаціях типів
    '@typescript-eslint/type-annotation-spacing': ['error', { before: 'never', after: 'never' }],
    // стиль фігурних дужок для блоків коду
	// тут "One True Brace Style" - { в наступному рядку
	'brace-style': ['error', '1tbs'],
	// вимагає стиль camelCase для ідентифікаторів
    camelcase: 'error',
	// вимагає використання строгої рівності (===) 
    eqeqeq: ['error', 'smart'],
	// вказує список заборонених ідентифікаторів.
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'no-eval': 'error',
	// забороняє повторне оголошення змінних
    'no-redeclare': 'error',
	// забороняє пропуски в кінці рядків
    'no-trailing-spaces': 'error',
	// забороняє використання підкреслення в іменах змінних
    'no-underscore-dangle': 'error',
	// забороняє використання небезпечного блоку finally
    'no-unsafe-finally': 'error',
    'no-var': 'error',
	// вимагає пропуски після символу коментаря
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
};
