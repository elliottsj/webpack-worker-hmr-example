# webpack-worker-hmr-example
A webpack project demonstrating hot module replacement in a web worker

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
