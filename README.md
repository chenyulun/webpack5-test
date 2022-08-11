# webpack5-test


> Everything that can be configured is configured, but still cannot be converted to ES5

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  target: ['web', 'es5'],
  output: {
    environment: {
      arrowFunction: false,
      const: false,
      destructuring: false,
      forOf: false
    },
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
input code 
```js
const abc =  {
  c() {
    return {cc: 1}
  }
}
console.log(abc)
```
output code 
```js
console.log({c:()=>({cc:1})}); // Hopefully there's no arrow function
```

Webpack target should actively configure Terser's options.compress.arrows = False if ES5 is present

```js
terserOptions = {
  //...
compress: {
    ecma: 5,
    // ...
    arrows: false,
  },
  // ..
}
```