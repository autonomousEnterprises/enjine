---
title: Instance
description: ''
position: 5
category: concept
---

An **Instance** wraps your ***Gateways*** and ***Controllers*** into the ***Host***.
> [More about Gateways here](/concept/gateway)

> [More about Controllers here](/concept/controller)

## Under the Hood

```js
class Instance {
  io: socketio,
  app: express.Router,
  server: {
    http,
    https
  },
  gateway: [],
  controller: [],
  middleware: []
}
```
