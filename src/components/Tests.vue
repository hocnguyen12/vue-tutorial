<template>
    <div id="counter">
      <button @click="increment">
        Count is: {{ count }}
      </button>
    </div>
    <div>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </div>
  </template>
  
  <!-- regular way to manually expose states and methods via setup()

  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const count = ref(0)

      function increment() {
        count.value++
      }

      return { 
        count,
        increment
       }
    },
  };
  </script>
-->

<script setup>
import { ref, reactive, computed } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// COMPUTED PROPERTIES
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// Writable computed property
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>


  
  <style scoped>
  button {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
  }
  </style>
  