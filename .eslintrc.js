module.exports = {
    root: true,
    extends: [
        // add more generic rulesets here, such as:
        'standard',
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        // @see https://eslint.org/docs/rules/
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'indent': ['error', 2, { MemberExpression: 0 }],
        'key-spacing': ['error'],
        'object-curly-spacing': ['error', 'never'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
    },
    env: {
        es6: true
    }
}
