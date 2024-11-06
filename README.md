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

- Class and Style bindings
    Dynamically assign html classes `<div :class="{ active: isActive }"></div>` (uses `v-bind:class`) the div has the active class depending on the boolean `isActive`. 
- Conditional Rendering
    `v-if`, `v-else`, `v-else-if`, `v=show`
    Example: 
    ```vue.js
    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    ``` 
    "Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime."
- List Rendering
    `v-for`
    Example:
    ```vue.js
    <li v-for="({ message }, index) in items">
        {{ message }} {{ index }}
    </li>
    <li v-for="item in items">
        <span v-for="childItem in item.children">
            {{ item.message }} {{ childItem }}
        </span>
    </li>
    ```
    Important : Maintaining State with key
    ```vue.js
    <div v-for="item in items" :key="item.id">
        <!-- content -->
    </div>
    ```​
    "It is recommended to provide a key attribute with v-for whenever possible, unless the iterated DOM content is simple (i.e. contains no components or stateful DOM elements), or you are intentionally relying on the default behavior for performance gains.
    The key binding expects primitive values - i.e. strings and numbers. Do not use objects as v-for keys. For detailed usage of the key attribute, please see the key API documentation."

    `v-for` with a component :
    ```vue.js
    <MyComponent
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
    />
    ```
- Event Handling
    Handlers and Event Modifiers

    see `https://vuejs.org/guide/essentials/event-handling.html`

    Key Modifiers
    ```vue.js
    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />

    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>
    ```
- Form Input Bindings
    Modify page depending on different form interactions (checkbox, text input, drop-down menu)
- Lifecycle Hooks


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

**List Rendering**
Be careful with reverse() and sort() in a computed property! These two methods will mutate the original array, which should be avoided in computed getters. Create a copy of the original array before calling these methods:
diff
```
- return numbers.reverse()
+ return [...numbers].reverse()
```

### Computed properties

**Getters should be side-effect free**

It is important to remember that computed getter functions should only perform pure computation and be free of side effects. For example, don't mutate other state, make async requests, or mutate the DOM inside a computed getter! Think of a computed property as declaratively describing how to derive a value based on other values - its only responsibility should be computing and returning that value. Later in the guide we will discuss how we can perform side effects in reaction to state changes with watchers.

**Avoid mutating computed value**​

The returned value from a computed property is derived state. Think of it as a temporary snapshot - every time the source state changes, a new snapshot is created. It does not make sense to mutate a snapshot, so a computed return value should be treated as read-only and never be mutated - instead, update the source state it depends on to trigger new computations.