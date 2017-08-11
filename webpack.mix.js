const mix = require('laravel-mix');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

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
        paths: glob.sync(path.join(__dirname, 'src/*.html')),
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
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: [':data-src']
      //     }
      //   }
      // }
    ]
  }




   })
   .options({
    //  purifyCss:{
    //     paths: glob.sync(path.join(__dirname, 'src/*.html'))
    //  }
   });
