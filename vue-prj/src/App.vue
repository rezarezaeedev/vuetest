<script>
import SecondRezaComponent from './components/second-component-for-local.vue';
export default {
  components:{
    'second-reza-component':SecondRezaComponent
  }
}
</script>


<template>
  <hello-reza></hello-reza> 
  <br>
  <second-reza-component></second-reza-component>
</template>


<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

</style>
