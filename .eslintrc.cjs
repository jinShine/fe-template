module.exports = {
  env: {
    // 전역 변수 사용을 정의합니다. 추가하지 않으면 ESLint 규칙에 걸리게 됩니다.
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended", // ESLint에서 기본 제공
    "plugin:prettier/recommended", // plugin과 eslint-config-prettier 설정을 한번에 합니다.
    "plugin:@typescript-eslint/recommended", // 해당 플러그인의 권장 규칙을 사용합니다.
    "plugin:react/recommended", // eslint-plugin-react
    "plugin:react-hooks/recommended", // eslint-plugin-react-hooks
    "plugin:@next/next/recommended", // @next/eslint-plugin-next
  ],
  parser: "@typescript-eslint/parser", // ESLint 파서를 지정합니다.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX를 파싱할 수 있습니다.
    },
    ecmaVersion: "latest", // Modern ECMAScript를 파싱할 수 있습니다.
    sourceType: "module", // import, export를 사용할 수 있습니다.
  },
  plugins: [
    "react", // eslint-plugin-react
    "@typescript-eslint", // @typescript-eslint/eslint-plugin
  ],
  rules: {
    // <ForSpaceLab lint rules
    "no-implicit-coercion": "error",
    "no-warning-comments": [
      "warn",
      {
        terms: ["TODO", "FIXME", "XXX", "BUG"],
        location: "anywhere",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@next/next/no-img-element": "off",
    "no-trailing-spaces": "error",
    "curly": "error",
    "brace-style": "error",
    "no-multi-spaces": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "no-whitespace-before-property": "error",
    "func-call-spacing": "error",
    "space-before-blocks": "error",
    "keyword-spacing": ["error", { before: true, after: true }],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "space-in-parens": ["error", "never"],
    "block-spacing": "error",
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "key-spacing": ["error", { mode: "strict" }],
    "arrow-spacing": ["error", { before: true, after: true }],
    "@typescript-eslint/no-empty-function": "off",
    "react-refresh/only-export-components": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        selector: "variable",
        leadingUnderscore: "allow",
      },
      { format: ["camelCase", "PascalCase"], selector: "function" },
      { format: ["PascalCase"], selector: "interface" },
      { format: ["PascalCase", "UPPER_CASE"], selector: "typeAlias" },
    ],
    // ForSpaceLab lint rules>
  },
  settings: {
    react: {
      version: "detect", // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
    },
  },
};
