module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/scripts': 'js' });
  config.addPassthroughCopy({ 'src/assets/images': 'img' });
  config.addPassthroughCopy({ 'src/admin': 'admin' })
  config.addPassthroughCopy({ 'src/_data': 'data' })

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
