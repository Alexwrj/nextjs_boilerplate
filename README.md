## Getting Started

The applications has its own store for each module to encapsulate the
model. Each view has access to its store using the observer pattern.
In order have each store as a singletone the app has a DI container.
This allows developer to use a reference to concrete store instead of initialization it.
But the best feature is the injecting one service into another, reducing the
boilerplate code and making the maintenance much easier.

Run the app using the following command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are two pages:
- /exhibitions - page that shows list of exhibitions
- /exhibitions[id] - page that shows information about concrete exhibition

## TODO
Add unit tests
