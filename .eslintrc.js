module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    fetch: false,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
