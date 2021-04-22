module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/scripts': 'assets/js' });
  config.addPassthroughCopy({ 'src/assets/images': 'assets/img' });
  config.addPassthroughCopy({ 'src/admin': 'admin' })

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: "/data"
    },
  };
};
