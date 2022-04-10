module.exports={
    "env": {
        "browser": true,
        "es2021": true
    }, 
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'prettier',
        "taro/react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins":['react', '@typescript-eslint', 'prettier'],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        'react/react-in-jsx-scope': 0,
      'prettier/prettier': 2,
      '@typescript-eslint/no-shadow': 2,
      'react/self-closing-comp':2
    },
    "settings": {
        "react": {
            "version": "detect",
        }
    }
}
