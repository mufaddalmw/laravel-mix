const mix = require('laravel-mix');
const PurifyCSSPlugin = require('purifycss-webpack');
// const glob = require('glob');

mix.js('src/app.js', 'dist')
   .sass('src/app.scss', 'dist')
  //  .sourceMaps()
  //  .webpackConfig({ devtool: "inline-source-map" })
   .copy('src/**/*.html', 'dist')
   .browserSync({
     files: ["dist/**/*"],
     server: "dist",
     proxy:''
   })
   .webpackConfig({
     plugins: [
      new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        // paths: glob.sync(path.join(__dirname, 'src/*.html')),
      })
    ],
    module: {
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader'
      //       // options: {
      //       //   limit: 8192
      //       // }
      //     }
      //   ]
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'dist/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  }




   })
   .options({
     processCssUrls: false,
    //  purifyCss:{
    //     paths: glob.sync(path.join(__dirname, 'src/*.html'))
    //  }
   });


// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
