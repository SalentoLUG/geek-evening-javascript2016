# GeekEvening: JS in 2016... and beyond

## Preamble

- This is not going to be a JS class
- Let's take a look at some JS code
- and briefly discuss the interesting pieces... --> together! <--

---

## Prepare to use the repo

Clone the repository locally and install the npm dependencies
used in some of the examples (xo, babel and flow):

```
git clone https://github.com/SalentoLUG/geek-evening-javascript2016
cd geek-evening-javascript2016
npm install
```

---

## JavaScript: a Love / Hate relationship

> we love JS:
> - there is a JS VM everywhere
>   - web browsers
>   - command line (nodejs)
>   - embedded in other applications and IoT devices
>     (games/game engines/etc.)

> we also hate JS
> - initial design errors (that cannot be removed, e.g. typeof null == "object")
> - different support level of new features in different engines
>   (e.g. ES6 and ES7 features) and their actual usage by the users
> - errors in our code can be often caught only at runtime

---

## What the heck is ES6/ES7?

> EcmaScript is the name of the standard submitted to the ECMA
> (an international industry association dedicated to the standardization of information and communication systems)
> Recently updated to its version 6, the version 7 is next
> standard version (where new features are being proposed,
> discussed and detailed)

---

## some bits from ES6: var vs. let vs. const

`examples/01-test-var.js`

---

## JavaScript Code Linting: ESLint, XO and Standard

---

## ES6 template strings

`examples/02-template-strings.js`

---

## ES6 Object and Array destructuring

`examples/03-object-destructuring.js`

---

## Babel: Transpiling ES6/ES7 to ES5

let's take a look at `examples/03-object-destructuring.js`

> - run on node6 and node5
> - run using babel-node
> - briefly look into the package.json and the .babelrc
> - run babel on the ES6 source and look at the generated ES5

---

## ES6 Arrow Functions

`examples/04-arrow-functions.js`

---

## ES6: from callbacks to Promises

`examples/05-callback-vs-promise.js`

---

## ES6 generators and ES7 async/await

`examples/06-generator-and-async-functions.js`

---

## Bonus: ES6 modules... hopefully

---

## Bonus: testing JavaScript code

---

## Bonus: type checking JavaScript code with flow

---

Further Readings

- http://exploringjs.com/es6/

- http://calculist.org/blog/2011/12/14/why-coroutines-wont-work-on-the-web/
- http://web.archive.org/web/20151209151711/http://tritarget.org/blog/2012/11/28/the-pyramid-of-doom-a-javascript-style-trap

---

JS Linting:

- https://eslint.org
- https://github.com/sindresorhus/xo
- https://github.com/feross/standard

---

Transpiling ES6/ES7 to ES5:

- https://babeljs.io

---

JS modules bundling:

- https://rollupjs.org
- https://browserify.org/
- https://webpack.github.io

---

- ava testing framework: https://github.com/avajs/ava
- flow type checker: https://flowtype.org
