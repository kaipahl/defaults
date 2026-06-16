/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  defaultSeverity: 'error',
  ignoreFiles: [
    'build/**/*.*',
    'public/**/*.*',
    'dist/**/*.*'
  ],
  rules: {
    'alpha-value-notation': 'number',
    'annotation-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'color-hex-length': 'long',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: [
          'first-nested'
        ]
      }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-no-missing-var-function': true,
    'custom-property-empty-line-before': 'never',
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: [
          '/flex/',
          '/grid/'
        ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-value-keyword-no-deprecated': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': [
      'numeric',
      {
        ignore: [
          'relative'
        ]
      }
    ],
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'import-notation': 'string',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 4,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': false,
    'no-irregular-whitespace': true,
    'no-unknown-animations': true,
    'number-max-precision': 6,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        ignore: [
          'after-comment',
          'first-nested'
        ]
      }
    ],
    'selector-anb-no-unmatchable': true,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 3,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 2,
    'selector-max-specificity': '1,4,4',
    'selector-max-type': 2,
    'selector-max-universal': 2,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
    'scss/comment-no-empty': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/load-no-partial-leading-underscore': null,
    'scss/percent-placeholder-pattern': null
  }
};
