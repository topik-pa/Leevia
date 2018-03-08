# leevia-test

> Leevia test with Vue.js

## Description
This is the Leevia test project.
Prior to build it, ensure your have installed node.js package manager in your PC.
Then, clone or download the solution in a local directory and follow the following instructions.


> Side note about SEO and VUE. As requested, I have implemented also some "SEO on page" technics (meta tags, title, canonical, microdata, og:meta...). These are rendered as usual for any browser and spider but the page content itself (inside the <div id="app> tag") is rendered by Vue javascript engine. This can lead in some SEO issue for those spiders that cannot reach js rendered content. Also spiders from Google can have issues with that. If you press CTRL+U keys you will able to see the static (no js rendered) content as an ipotetical spider does. This content is almost empty.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
