module.exports = {
  root: true,
  extends: '@react-native-community',
  "rules": {
    "react/boolean-prop-naming": [
      "error",
      {
        "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],
        "rule": "^(is|has|should|show)[A-Z]([A-Za-z0-9]?)+",
        "message": "Boolean props need to be prefixed with: is, has, should, or show"
      }
    ],
    "react/jsx-handler-names": "error",
    "react/jsx-pascal-case": "error",
    "react/no-did-update-set-state": "error",
    "react/no-multi-comp": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/style-prop-object": "error",
    "react-hooks/rules-of-hooks": "error",

    "import/unambiguous": "OFF",
    "import/no-unresolved": ["error", { "commonjs": true }],

    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "curly": ["error", "all"],
    "dot-location": ["error", "property"],
    "eqeqeq": "error",
    "max-lines": ["error", 450],
    "multiline-comment-style": ["error", "separate-lines"],
    "new-cap": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-multi-spaces": "error",
    "no-nested-ternary": "error",
    "no-useless-computed-key": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quotes": ["error", "backtick"]
  }
};
