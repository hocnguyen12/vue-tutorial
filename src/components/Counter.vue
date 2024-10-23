<template>
    <div id="counter">
      <button @click="count++">
        Count is: {{ count }}
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
      return { count };
    },
  };
  </script>
  
  <style scoped>
  button {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
  }
  </style>
  