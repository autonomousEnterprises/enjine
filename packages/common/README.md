# `@enjine/common`

> These are the extended Core Modules as Common Instance Component

## Usage

```js
const { DataGateway } = require('@enjine/common');
const { Databse } = require('@enjine/database');

const db = new Database('.db')

host.add([
  new Instance('', [
    new DataGateway('data', db, (context) => console.log(context))
  ])
]);
```
