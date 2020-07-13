module.exports = {
    parser: 'babel-eslint',
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "node": true,
        "jtest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        indent: ['error', 2, { SwitchCase: 1 }],
        'linebreak-style': ["error", "windows"],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': [
        'warn',
        { allow: ['clear', 'info', 'error', 'dir', 'trace'] }
        ]
    }
};
