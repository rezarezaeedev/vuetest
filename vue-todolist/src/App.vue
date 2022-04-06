<script>
import TaskItemComponent  from "./components/task-item-component.vue";
import axios from 'axios';
export default{
  data(){
    return{
      currentTab:'todo',
      url:'https://test4vue-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
      text_input:'',
      items:[
        
      ]
    }
  },

  created(){
   axios.get(this.url)
     .then(res=>{
       Object.entries(res.data).forEach(value=>{
          this.items.push({
            id:value[0],
            ...value[1]
          })
       })
     })
     .catch(err=>console.log(err))
 },

  computed:{
    
 },

  methods:{
    item_list_filtered:function(value){
        return this.items.filter(function(item){
          if (item.status === value)
          {return true}
        })
    },

    item_list: function(currentTab){
          switch (currentTab) {
            case 'todo':
              return this.item_list_filtered(false)
              break;
              
            case 'done':
              return this.item_list_filtered(true)
              break;

            case 'all':
              return this.items
              break;
          }
      },

      id_evaluator(){
        let max = this.items.reduce(function(preval,curval,curindx){
            return curval.id > preval ? curval.id : preval
        },0)
        return max + 1;
      },

      add_task:function(){
        let text = this.text_input;
        if (text.length>0){
          let obj = {
            text:text,
            status:false,
          }
          
          axios.post(this.url, obj)
            .then(res=>{
              this.items.push({
                ...obj,
                id:res.data.name,
              })
            })
            this.text_input = ''

        }
      },
    
      updateTaskItem(newstatus, itemid){   
          let x = this.items.find(function(element){
              if (element.id == itemid){
                return element
              }
          })
        x.status= newstatus;
    

      },

      deleteTaskItem(itemid){
        let i ;
        let x = this.items.find(function(element,indx){
              if (element.id == itemid){
                i = indx
                return element
              }
          })
        axios.delete(`https://test4vue-default-rtdb.europe-west1.firebasedatabase.app/todos/${itemid}.json`)
          .then(res=>this.items.splice(i,1))
          .catch(err=>console.log(err))
        
         
      }
 },
  

  components:{
    'task-item':TaskItemComponent,
  }
}
</script>


<template>
  <div class="container mt-3 col-6 justify-content-around border rounded">
    <div class="row ">
      <span class="fs-2 my-3 text-center">Reza Todo List</span>
      <div class="row">
        <div class="input-group mb-3">
          <input type="text" class="form-control me-5" placeholder="Add a task" aria-label="Add a task"
            aria-describedby="basic-addon2" v-model="text_input">
          <div class="input-group-append ">
            <button class="btn btn-primary rounded-circle" v-on:click="add_task">+</button>
          </div>
        </div>
        <div class="btn-primary"></div>
      </div>
    </div>
    <div class="border row">
      <div class="row justify-content-around">
        <button class="btn col-4 p-2 text-center " :class="currentTab=='all' ? 'btn-primary' : '' " @click="currentTab='all'">All</button>
        <button class="btn col-4 p-2 text-center " :class="currentTab=='todo' ? 'btn-primary' : '' " @click="currentTab='todo'">Todo</button>
        <button class="btn col-4 p-2 text-center" :class="currentTab=='done' ? 'btn-primary' : '' " @click="currentTab='done'">Done</button>
      </div>
      <hr>
      <div class="">
        <!--List item-->
        <task-item v-for="item in item_list(currentTab)"  :data="item" @update-task-item="updateTaskItem" @delete-task-item="deleteTaskItem"></task-item>
      </div>
    </div>
  </div>
</template>


<style>
  *{
      font-family:'Roboto Mono', monospace;
    }
</style>
