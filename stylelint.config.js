module.exports = {
    "plugins": ["stylelint-order", "stylelint-scss"],
    "rules": {
      "at-rule-empty-line-before": [
        "always",
        {
          "except": [
            "first-nested"
          ],
          "ignore": [
            "after-comment",
            "blockless-after-same-name-blockless"
          ],
          "ignoreAtRules": [
            "else"
          ]
        }
      ],
      "at-rule-name-case": "lower",
      "at-rule-disallowed-list": ["debug"],
      "at-rule-no-unknown": null,
      "at-rule-no-vendor-prefix": true,
      "at-rule-semicolon-newline-after": "always",
      "block-no-empty": true,
      "block-opening-brace-space-before": "always",
      "block-opening-brace-newline-after": "always",
      "block-closing-brace-newline-after": [
        "always",
        {
          "ignoreAtRules": [
            "if",
            "else"
          ]
        }
      ],
      "color-hex-case": "lower",
      "color-hex-length": "short",
      "color-named": "never",
      "color-no-invalid-hex": true,
      "comment-no-empty": true,
      "comment-whitespace-inside": "always",
      "declaration-bang-space-after": "never",
      "declaration-bang-space-before": "always",
      "declaration-block-no-duplicate-properties": true,
      "declaration-block-no-redundant-longhand-properties": [
        true,
        {
          "ignoreShorthands": [
            "/flex/"
          ]
        }
      ],
      "declaration-block-no-shorthand-property-overrides": true,
      "declaration-block-semicolon-newline-after": "always",
      "declaration-block-semicolon-space-before": "never",
      "declaration-block-single-line-max-declarations": 1,
      "declaration-block-trailing-semicolon": "always",
      "declaration-colon-space-after": "always-single-line",
      "declaration-colon-space-before": "never",
      "declaration-empty-line-before": "never",
      "declaration-property-value-disallowed-list": {
        "border": ["none"],
        "border-top": ["none"],
        "border-right": ["none"],
        "border-bottom": ["none"],
        "border-left": ["none"]
      },
      "declaration-no-important": true,
      "font-family-name-quotes": "always-unless-keyword",
      "font-family-no-duplicate-names": true,
      "font-family-no-missing-generic-family-keyword": true,
      "font-weight-notation": "named-where-possible",
      "function-calc-no-unspaced-operator": true,
      "function-comma-newline-after": "never-multi-line",
      "function-comma-space-after": "always-single-line",
      "function-comma-space-before": "never",
      "function-linear-gradient-no-nonstandard-direction": true,
      "function-max-empty-lines": 0,
      "function-name-case":"lower",
      "function-parentheses-newline-inside": "never-multi-line",
      "function-parentheses-space-inside": "never",
      "function-url-no-scheme-relative":true,
      "function-url-quotes": "always",
      "function-url-scheme-disallowed-list": ["ftp","/^http:"],
      "function-whitespace-after": "always",
      "indentation": 4,
      "length-zero-no-unit": true,
      "max-empty-lines": 1,
      "max-nesting-depth": [
        4,
        {
          "ignore": [
            "pseudo-classes"
          ],
          "ignoreAtRules": [
            "each",
            "media",
            "supports",
            "include"
          ]
        }
      ],
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-case": "lower",
      "media-feature-name-no-unknown": true,
      "media-feature-name-no-vendor-prefix": true,
      "media-feature-parentheses-space-inside": "never",
      "media-feature-range-operator-space-after":"always",
      "media-feature-range-operator-space-before": "always",
      "media-query-list-comma-newline-after": "never-multi-line",
      "media-query-list-comma-newline-before": "never-multi-line",
      "media-query-list-comma-space-after": "always",
      "media-query-list-comma-space-before": "never",
      "no-duplicate-at-import-rules": true,
      "no-duplicate-selectors": true,
      "no-empty-first-line": true,
      "no-empty-source": true,
      "no-eol-whitespace": true,
      "no-extra-semicolons": true,
      "no-missing-end-of-source-newline": true,
      "no-unknown-animations": true,
      "number-leading-zero": "always",
      "number-no-trailing-zeros": true,
      "order/order": [
        [
          "custom-properties",
          "dollar-variables",
          {
            "type": "at-rule",
            "name": "extend"
          },
          {
            "type": "at-rule",
            "name": "include",
            "hasBlock": false
          },
          "declarations",
          {
            "type": "at-rule",
            "name": "include",
            "hasBlock": true
          },
          "rules"
        ]
      ],
      "order/properties-alphabetical-order": null,
      "property-case": "lower",
      "property-no-unknown": true,
      "property-no-vendor-prefix": [
        true,{
        "ignoreProperties": ["text-size-adjust","appearance"]
        }
      ],
      "rule-empty-line-before": [
        "always-multi-line",
        {
          "except": ["first-nested"],
          "ignore": ["after-comment"]
        }
      ],
      "scss/at-else-closing-brace-space-after": "always-intermediate",
      "scss/at-else-if-parentheses-space-before": "always",
      "scss/at-extend-no-missing-placeholder": true,
      "scss/at-function-parentheses-space-before": "never",
      "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
      "scss/at-import-partial-extension": "never",
      "scss/at-import-no-partial-leading-underscore": true,
      "scss/at-import-partial-extension-blacklist": ["scss"],
      "scss/at-mixin-argumentless-call-parentheses": "never",
      "scss/at-mixin-parentheses-space-before": "never",
      "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+)?$",
      "scss/at-rule-no-unknown": true,
      "scss/declaration-nested-properties": "never",
      "scss/dollar-variable-colon-newline-after": "always-multi-line",
      "scss/dollar-variable-colon-space-after": "always",
      "scss/dollar-variable-colon-space-before": "never",
      "scss/dollar-variable-empty-line-before": [
        "always",
        {
          "except": ["first-nested", "after-comment", "after-dollar-variable"]
        }
      ],
      "scss/dollar-variable-no-missing-interpolation": true,
      "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
      "scss/double-slash-comment-empty-line-before": [
        "always",
        {
          "except": ["first-nested"],
          "ignore": ["between-comments", "stylelint-commands"]
        }
      ],
      "scss/double-slash-comment-whitespace-inside": "always",
      "scss/no-duplicate-mixins": true,
      "scss/operator-no-newline-after": true,
      "scss/operator-no-newline-before": true,
      "scss/selector-no-union-class-name": true,
      "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+)?$",
      "scss/operator-no-unspaced": true,
      "scss/selector-no-redundant-nesting-selector": true,
      "selector-attribute-brackets-space-inside": "never",
      "selector-attribute-operator-space-after": "never",
      "selector-attribute-operator-space-before": "never",
      "selector-attribute-quotes": "always",
      "selector-combinator-space-after": "always",
      "selector-combinator-space-before": "always",
      "selector-class-pattern": [
        "^[a-z0-9\\-]+$",
        {
          "message":
            "Selector should be written in lowercase with hyphens (selector-class-pattern)"
        }
      ],
      "selector-descendant-combinator-no-non-space": true,
      "selector-list-comma-newline-after": "always",
      "selector-list-comma-space-after": "always-single-line",
      "selector-max-class": 4,
      "selector-max-empty-lines": 0,
      "selector-max-compound-selectors": 4,
      "selector-max-id": 0,
      "selector-no-qualifying-type": null,
      "selector-no-vendor-prefix": true,
      "selector-pseudo-element-colon-notation": "single",
      "selector-pseudo-element-no-unknown": true,
      "selector-type-no-unknown": true,
      "shorthand-property-no-redundant-values": true,
      "string-quotes": "single",
      "unit-case": "lower",
      "unit-no-unknown": true,
      "value-list-comma-space-after": "always",
      "value-keyword-case": [
        "lower",
        {
          "ignoreProperties": ["font-family", "unicode-range"]
        }
      ],
      "value-no-vendor-prefix": true
    }
  }
