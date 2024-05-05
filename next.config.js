const withPreact = require('next-plugin-preact');
module.exports = withPreact({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
     // appDir: true,
    },
    cssModules: {
      swapImport: true,
      locateFile: (file) => {
        if (file.startsWith('/_next/static')) {
          return `${file}?css&minified`;
        }
        return `${file}.css`;
      },
    },
  
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          "react/jsx-runtime.js": "preact/compat/jsx-runtime",
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        });
      }
      return config;
    },
  }
);