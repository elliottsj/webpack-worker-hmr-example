# webpack-worker-hmr-example

[![Greenkeeper badge](https://badges.greenkeeper.io/elliottsj/webpack-worker-hmr-example.svg)](https://greenkeeper.io/)
A webpack project demonstrating hot module replacement in a web worker

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

### Installation

```shell
npm install
```

### Usage

```shell
npm start
open http://localhost:8080
```

Then you should see an alert with the message "Hello!". Try editing the `message` value in **src/worker.js**; it will be hot-reloaded when you save the file and your new message will be `alert`'d.
