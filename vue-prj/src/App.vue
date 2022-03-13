
<template>
  <hello-reza></hello-reza> 
  <br>
  <second-reza-component></second-reza-component>
  <br><br>
  <tab-component @delete-navbar='delete_nav' title="First title" :items="tabs"></tab-component>
  <br>
  <tab-component @delete-navbar='delete_nav' title="Second title" :items="second_tabs"></tab-component>
  <br>
  <tab-component @delete-navbar='delete_nav' :items="third_tabs"></tab-component>
  
</template>


<script>
import SecondRezaComponent from './components/second-component-for-local.vue';
import tabComponent from './components/tab-component.vue';
export default {
  components:{
    'second-reza-component':SecondRezaComponent,
    'tab-component':tabComponent,
  },
  data:function(){
    return {
        tabs : [
              {
                title:'Home',
                content:'Home Home Home Home Home Home Home Home Home Home Home '
              },
              {
                title:'Profile',
                content:'Profile Profile Profile Profile Profile Profile Profile Profile Profile Profile Profile Profile '
              },
              {
                title:'Contact',
                content:'Contact us please!!'
              },
            ],

        second_tabs:[
              {
                title:'Lecture',
                content:'Lecture Lecture Lecture'
              },
              {
                title:'Course',
                content:'Course Course Course'
              },
              {
                title:'Progreses',
                content:'ProgresesProgresesProgreses'
              },
              {
                title:'Shutdown',
                content:'Bye Bye Bye Bye'
              },
          ],

        third_tabs:[
              {
                title:'Advance',
                content:'Advance and Advance'
              },
              {
                title:'More features',
                content:'More features More features More features'
              },
            
          ]
    }
  },
  methods:{
    delete_nav(data){
        for (const key in this) {
          if(this[key] == data){
            this[key] = []
          }
        }
    }
  }
}
</script>


<style>
html{
  margin: 0;
  padding: 0;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

</style>
