module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/images': 'assets/img' });
  config.addPassthroughCopy({ 'src/admin': 'admin' })

  return {
    dir: {
      input: 'src/views',
      output: 'public',
      layouts: "_includes/layouts"
    },
  };
};
