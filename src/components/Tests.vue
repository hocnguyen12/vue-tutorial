<template>
  <div id="counter">
    <button :style="styleButton" @click="increment">
    Count is: {{ count }}
    </button>
  </div>
  <div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
  <div>
    <label for="name">Enter your name (ex: John Doe):</label>
    <input @keyup.enter="updateName" type="text" id="name" maxlength="40" v-model="nameInput" placeholder="firstname lastname"/>
    <button :style="styleButton" @click="updateName">Submit</button>
    <p>Welcome {{ fullName }} !</p>
  </div>
</template>
  
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

const nameInput = ref(null)
function updateName() {
  fullName.value = nameInput.value
}

const styleButton = reactive ({
  backgroundColor: '#7e7e7e',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease'
})
</script>


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

  
  <style scoped>
  button {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
  }
  </style>
  