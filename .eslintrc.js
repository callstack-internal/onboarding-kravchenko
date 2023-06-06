module.exports = {
  root: true,
  extends: '@callstack',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    // TODO: Figure out a solution to enable the rule
    'import/no-extraneous-dependencies': 'off',
  },
};
