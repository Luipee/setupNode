const { ignore } = require("nodemon/lib/rules");

module.exports = {
  presets:[
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'curent'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      aliás :{
        '@controllers/*': 'controllers/*',
        '@models/*': 'models/*',
        '@views/*': 'views/*',
        '@config/*': 'config/*' 
      }
    }]
  ],
  ignore:[
    '**/*.spec.ts'
  ]
}