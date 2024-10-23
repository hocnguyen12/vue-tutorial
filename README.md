# vue-project-tutorial

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Vue.js Essentials
### Concepts
- Creating an Application
    How vue components work, mouting and configuring the app
- Template syntax
    - Text interpolation, rawHTML 
        data binding (display text, ...) using `{{ }}` and `v-html`
    - Attribute binding
        `v-` attributes **sync** the attribute to a variable
        `v-bind:id` or `:id` or `v-bind` without arguments (multiple attributes at once),  `:disabled` (and other boolean attributes) -> for variable content inside of html attributes
    - Using JavaScript Expressions
​       supports js expressions inside all data bindings (`{{ }}`, `:id`, ...), also functions
    - Directives
        `v-if`
    - Arguments
        `v-bind:href`, `:href`, `v-on:click`, `@click`
    - Dynamic Arguments
        `v-on:[eventName]`, `@:[eventName]`
    - Modifiers
        `@submit.prevent`
- Reactivity Fundamentals
    `ref()`, SFC + `script setup`
    `reactive()`
- Computed Properties


### Good practices
**Security Warning** :

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use `v-html` on trusted content and never on user-provided content.

**TIP**

Functions called inside binding expressions will be called every time the component updates, so they should not have any side effects, such as changing data or triggering asynchronous operations.

```vue.js
const raw = {}
const proxy = reactive(raw)

// proxy is NOT equal to the original.
console.log(proxy === raw) // false
```

Only the proxy is reactive - mutating the original object will not trigger updates. Therefore, the best practice when working with Vue's reactivity system is to exclusively use the proxied versions of your state.

### Computed properties

**Getters should be side-effect free**

It is important to remember that computed getter functions should only perform pure computation and be free of side effects. For example, don't mutate other state, make async requests, or mutate the DOM inside a computed getter! Think of a computed property as declaratively describing how to derive a value based on other values - its only responsibility should be computing and returning that value. Later in the guide we will discuss how we can perform side effects in reaction to state changes with watchers.

**Avoid mutating computed value**​

The returned value from a computed property is derived state. Think of it as a temporary snapshot - every time the source state changes, a new snapshot is created. It does not make sense to mutate a snapshot, so a computed return value should be treated as read-only and never be mutated - instead, update the source state it depends on to trigger new computations.