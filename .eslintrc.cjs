module.exports = {
  root: true,
  extends: [
    'sobird/base.cjs',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'sobird/typescript.cjs',
      ],
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/no-unknown-property': 'off',
        'prefer-promise-reject-errors': 'off',
      },
    },
  ],
  rules: {
    'import/no-import-module-exports': ['error', {
      exceptions: ['**/*'],
    }],
    'arrow-body-style': ['error', 'always'],
  },
};
