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

### Good practices
**Security Warning** :

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use `v-html` on trusted content and never on user-provided content.

**TIP**

Functions called inside binding expressions will be called every time the component updates, so they should not have any side effects, such as changing data or triggering asynchronous operations.