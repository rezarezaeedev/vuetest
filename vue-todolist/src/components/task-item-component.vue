<script>
export default{
    props:[
        'data'
    ],

    data(){
        return{

        }
    },

    methods:{
        sendDataForUpdate(){
            this.$emit('update-task-item',this.toggleStatus(),this.data.id)
        },

        toggleStatus(){
            return this.data.status == true ? false : true
        },
        
        deleteTaskItem(){
            this.$emit('delete-task-item', this.data.id)
        }
    }   
}
</script>


<template>
    <div class="mt-2 mb-3 py-2 px-2 border rounded d-flex justify-content-between " :class='{"active_item":data.flag}' :key="'mytaskitem'+data.id" >
        <!--Task item-->
        <div class="d-flex align-items-center">
            
            <label>
                <input class="mycheckbox" type="checkbox" :key="'mychekbox'+data.id" v-bind:checked='data.status' @click='sendDataForUpdate'>
                <span class="mx-3" v-text="data.text"></span>
            </label>
        </div>
        <div class="d-flex">
            <button class="rounded bg-danger text-light" type="submit" @click="deleteTaskItem">Delete</button>
            <!-- <button class="mx-3 rounded bg-primary text-light" type="submit">Edit</button> -->
        </div>
    </div>    
</template>


<style>
    .mycheckbox:checked+span {
        text-decoration: line-through;

    }
    *{
        user-select: none;
    }
</style>
