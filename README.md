## use-patch-state

[![npm version](https://img.shields.io/npm/v/use-patch-state.svg)](https://npmjs.org/package/use-patch-state)
[![Coverage Status](https://coveralls.io/repos/github/zuze-lab/use-patch-state/badge.svg)](https://coveralls.io/github/zuze-lab/use-patch-state)
[![Build Status](https://travis-ci.com/zuze-lab/use-patch-state.svg)](https://travis-ci.com/zuze-lab/use-patch-state)
[![Bundle Phobia](https://badgen.net/bundlephobia/minzip/use-patch-state)](https://bundlephobia.com/result?p=use-patch-state)

## What is this?

Super tiny package that let's you patch the state returned from [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) hook.

React recommends [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer) for **complex** (read: key-value) state. And `useReducer` is pretty cool. But, often, we don't want to write a reducer, we just want to patch our state object and we find ourselves writing:

```js
setState(existing => ({ ...existing, key: 'value' }))
```

over and over again.

This package let's you do one of two things:

### `patch`

```js
import { patch } from 'use-patch-state';

const MyComponent = () => {

    const [state,setState] = useState({ keyA: 1, keyB: 2 });

    const handleSomeAction = () => setState(patch({ keyA: 2 }))

}
```

### `usePatchState`

```js
import { usePatchState } from 'use-patch-state';
const MyComponent = () => {
    const [state,setState] = usePatchState({ keyA: 1, keyB: 2 })

    const handleSomeAction = () => setState({ keyA: 1 })
}
```

The `setState` returned from `usePatchState`, like `dispatch` returned from `useReducer` is always referentially the same.