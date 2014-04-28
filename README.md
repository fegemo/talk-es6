<!--

WARNING!! DON'T EDIT THE FILE README.md on the root of the project, that one is a GENERATED FILE!

You should just edit the source file at src/README.md - the one which stars with ## Ecmascript 6: Bring some harmony into your life

-->

## Ecmascript 6: Bring some harmony into your life
<img src="img/cover.jpg" class="logo" />

Flavio Coutinho @ [Avenue Code](http://www.avenuecode.com)

*fcoutinho@avenuecode.com*

Mar 30th, 2014

---

## Agenda

- The history of javascript
- The 'Looks familiar?' series
- Running ES6 today
- Conclusion
- Challenge

---

## Prerequisites
- Experience with real-life javascript
- Open mind

<iframe width="100%" height="300" frameborder="0" allowfullscreen src="http://www.es6fiddle.net/embed/ht0pk9dg/"></iframe>

---

<!-- .slide: data-state="timeline" -->
## The history of javascript

1. |1995| Brendan Eich created javascript for Netscape
1. |1996, August| Micro$oft created JSCript on IE and IIS 3.0
1. |1996, November| Netscape submitted it to Ecma International -> ECMAScript
1. |1997, June| ECMAScript 2
1. |1999, December| ECMAScript 3
1. |2009, December| ECMAScript 5 (?)
1. |2011, June| ECMAScript 5.1
1. |2014| ECMAScript 6

---

## New stuff coming in ES6

<div data-state="itemcloud">
- Block scope
- Classes
- Default function params
- Destructuring
- Rest and Spread operator
- Array comprehension
- Quasi-literals
- Generators
- Modules
- Promises
</div>

---

## The "Looks Familiar" series

asdfasdf

---

## let and const

```js
var jsFuture = "es6";
(function () {
  if (!jsFuture) { var jsFuture = "es5"; }
  console.log(jsFuture);
}());
```

---

## Setting up your repo

1. Sign in on GitHub
1. Fork the repository <https://github.com/acbr/talk-template>
1. Rename it to match your talk name (ex: *talk-design-patterns*)
1. Clone this repository
1. Navigate to its folder on the terminal

----

## Building and running

1. Install [Node.js](http://nodejs.org/)
1. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)
1. On the repo folder, install the npm dependencies
```sh
$ npm install
```
1. Build it, serve it and monitor source files for changes
```sh
$ grunt
```
1. Open <http://localhost:8000> to view your talk

----

## Working

1. Open up *config.json* and fill your talk data such as title, author, email, date and description.
  - That is the *ONLY FILE* you should edit on the project root!
1. Any further change you will do is inside the *src* folder, such as:
  - *src/README.md* to write your talk content in *Markdown*
  - *src/index.html* to modify the HTML
1. Grunt will generate files on the project root as you change *src*.
1. In order to separate slides horizontally, use 3 dashes (---).
1. In order to separate slides vertically, use 4 dashes (----).
1. In order to *call out attention*, put an asterisk around your text:
```
In order to *call out attention*, ...
```

----

## Deploying

1. Make sure your build is not breaking.
  - You should see *Done, without errors.* in the terminal.
1. *git add*, *git commit* and *git push* to *gh-pages* branch.
1. You should see your talk in an address like:
  - http://*your-github-username*.github.io/*your-repo-name*
  - Ex: <http://acbr.github.io/talk-template>

---

## The "Looks Familiar?" series

 - Should last no more than 50 minutes, leave up to 10 minutes for questions.
 - Should not be too deep neither too superficial.
 - Give at least 3 reference links to be followed for further studies.
 - Give a challenge that would be solved using ideas that were covered on the talk.
 - It is ok to go a little bit far (forcing the attendee to do some research), but that should be optional.

----

## Class

```js
function Vehicle(brand, type) {
  this.brand = brand;
  this.type = type;
}

Vehicle.prototype.turnOn = function(options) {
  //...  
};

function Car(brand, type, model) {
  Vehicle.call(this, brand, type);
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.turnOn = function(options) {
  Vehicle.prototype.turnOn.call(this, options);
  // do extra car stuff
}
```

---

## Class: Pros and Cons

 Pros:

 - classes make it *easier for newcomers* to get started with JavaScript
 - have a *language supported inheritance mechanism*
 - very *clear and expressive syntax*

 Cons:

 - do not prevent it from being used *without new*


----

## Communication requirements

1. *COMMUNICATE WELL*. Be sharp on English, no bad words or slangs and use the best words for the audience.
1. *BE A PRO*. Please watch some good screencasts in order to learn how to use your voice and conduct the talk.
1. *BE POLITE*. Be respectful and avoid heavy criticism.
1. *BE PROFESSIONAL*. Use jokes and humor with parsimony.
1. *TRAIN* your full talk at least once before your talk.

----

## The DONT's

1. *DO NEVER SHOW PRIVATE CODE FROM THE CLIENT*. This is CRITICAL and can cause serious problems.
1. *DON'T BE ARROGANT*. Be humble and don't focus the talk on yourself.
1. *DON'T GENERALIZE*, specially stuff that you are not sure about.
1. *DON'T MAKE UP DATA*. Base yourself on trustable references.
1. *DON'T TALK LIKE A ROBOT*. Just be yourself, natural. Relax :)

----

## Tips

 - *ENJOY* your experience by creating the talk, because you will surely learn MUCH MORE than your attendees.
 - *BRING WATER* to drink while you present. You will certainly need it!
 - *BE OPEN* to receive questions and even criticism. You will learn a lot from them.
 - *ALWAYS* be polite when talking to your audience. This will always open doors for you.
 - People might come to you with questions and more complex cases after your talk. Consider it as a gift, it means you represent something good for them!

----

## If you are recording

- Make sure you use a professional microphone when available.
- Don't do *drastic transitions* on your screen, as the recorded amount of frames per second is low.
- Ask atendees to only make questions on the end - so future watchers will just get the real content without interruption.
- Introduce yourself: "Hello everybody, my name is xxxx, I work for Avenue Code and today's talk will be about yyyyy". Finish it like: "That's it, thanks for watching.".
- Problems with recording/connection? Always restart from the beginning of the slide. Don't try to restart from where it fails, its impossible to do a clean cut on the video after that.

---

## Contributing

Should you wish to contribute, please be welcome to!

1. Fork the repository <https://github.com/acbr/talk-template>
1. Create a feature branch for your contribution
```sh
git checkout -b my-new-feature
```
1. Commit your changes
```sh
git commit -am 'Add some feature'
```
1. Push to the branch
```sh
git push origin my-new-feature
```
1. Create a Pull Request

---

## Conclusion

- This talk template rocks!
- Your life should be easier now.

---

## Learn more

1. [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
1. [Use ECMAScript 6 Today, at tutsplus.com](http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582)
1. [Examples of use of let, const and optional params](http://peter.michaux.ca/articles/javascript-is-dead-long-live-javascript)
1. [ES6 Classes](http://www.2ality.com/2012/07/esnext-classes.html)
1. [ES6 Modules](http://www.infoq.com/news/2013/08/es6-modules)
1. [ES6 Fiddle](http://www.es6fiddle.net/)

---

## Challenge

1. Make your awesome talk based on this template.
1. Push it to a gh-pages branch on your GitHub account.
1. Share the URL with the world!