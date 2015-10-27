# jsFile-txt [![Build Status](https://secure.travis-ci.org/jsFile/jsFile-txt.png?branch=master)](https://travis-ci.org/jsFile/jsFile-txt) [![Coverage Status](https://coveralls.io/repos/jsFile/jsFile-txt/badge.svg?branch=master&service=github)](https://coveralls.io/github/jsFile/jsFile-txt?branch=master)

Engine for jsFile library to read all files as simple [plain-text](https://en.wikipedia.org/wiki/Text_file) documents (.txt)



## Installation
### via NPM

You can install a <code>jsFile-txt</code> package very easily using NPM. After
installing NPM on your machine, simply run:
````
$ npm install jsfile-txt
````

### with Git

You can clone the whole repository with Git:
````
$ git clone git://github.com/jsFile/jsFile-txt.git
````

### from latest version

Also you can download [the latest release](https://github.com/jsFile/jsFile-txt/tree/master/dist) of `TXT` engine and include built files to your project.


##Usage
````js
import JsFile from 'JsFile';
import JsFileTxt from 'jsfile-txt';

const jf = new JsFile(file, options);
````
`file` - a [plain-text file](https://en.wikipedia.org/wiki/Text_file). You may find information about options and `jsFile` in [documentation](https://github.com/jsFile/jsFile#installation)
