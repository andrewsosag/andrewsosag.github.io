const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/andrewsosag.github.io' : '';

module.exports = {
  basePath,
};