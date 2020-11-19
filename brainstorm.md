This document serves as a general braindump. _Ideally_ this file will be empty (or removed), with its content moving to more organized areas (such as the readme, or features).

# TypeScript "Musical" types

## Event

An event should be an object that consists of:
- a timestamp
- a function

These will be the core of how "things" happen, whether its a note being played or an animation being triggered.

```
interface Event {
  timestamp: Number,
  callback: Function(timestamp),
}
```

_Note: Events can be used to connect to ToneJS via the [schedule](https://tonejs.github.io/docs/14.7.58/Transport#schedule) method on the Transport._
