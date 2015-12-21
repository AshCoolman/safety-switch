# safety-switch

## Intro

This is a simple, zero-config _safety switch_ which will call `process.exit()`, unless the environment variable SAFETY_SWITCH_IS_RELEASED is equal to `true`


## Usage & tests

```javascript
require('safety-switch@1.2.0')();

```

As its a bad idea to modify environment variables just for testing - the tests and example usage can be found in the online REPL:

[See tests on tonicdev.com](https://tonicdev.com/ashcoolman/safety-switch)
