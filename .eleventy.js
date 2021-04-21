module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/scripts': 'js' });
  config.addPassthroughCopy({ 'src/assets/images': 'img' });
  config.addPassthroughCopy({ 'src/admin': 'admin' })

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
