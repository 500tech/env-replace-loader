# env-replace-loader

Find and replace string from replacements file based on NODE_ENV

Created and used in [kick](http://angular-kick.com)


## Usage

preLoaders: [{
  test: /\.*/,
  loaders: ['env-replace?prefix=@@&file=' + __dirname + '/environments.json']
}]


## Options

* __prefix__: how to find strings for substitutions, for example prefix=@@ will find strings like @@ENV and @@API_URL
* __file__: path to json file with replacements


## Example of replacements file:

```
{
  "development": {
    "ENV": "development",
    "API_URL": "http://localhost:3000"
  },
  "production": {
    "ENV": "production",
    "API_URL": "http://example.com"
  }
}
```


## License

MIT Licensed

Copyright (c) 2015, [500Tech](http://500tech.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sub-license, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
