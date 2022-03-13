<template>
    <div class="container ">
        <h2 class="title">{{title}}</h2>
        <!-- <button class="mybtn" @click="$emit('delete-navbar', 12)">Delete</button> -->
        <button class="mybtn" v-on:click="send_for_delete(items)">Delete</button>
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="{title} in items">
            <!-- <button class="nav-link" v-bind:class="current_tab == title ? 'active':'' " type="button" v-on:click="current_tab=title">{{title}}</button> -->
            <button class="nav-link" v-bind:class="{ 'active' : current_tab==title }" type="button" v-on:click="current_tab=title">{{title}}</button>
            </li>
        </ul>

        <div class="tab-content p-3">
            <!-- <div class="tab-pane fade" v-for="{title,content} in items"  v-bind:class="current_tab == title ? 'show active' : ''"  >{{ content }}</div> -->
            <!-- <div class="tab-pane fade show active" v-for="{title,content} in items"><span  v-if="current_tab==title">{{ content }}</span></div> -->
            <div class="tab-pane fade show active" v-for="{title,content} in items"  v-show="current_tab==title">{{ content }}</div>
        </div>
    </div>
</template>

<script>

    export default {
        props:{  // for get and validation props (data input components)
            items:{
                type:Array,
                required:true,
                validator:function(value){
                    let res=true;
                    for (const i of value) {
                        res *= i.hasOwnProperty('title') * i.hasOwnProperty('content')                      
                    }
                    return res
                },

            },

            // title:String,
            title:{
                type:String,
                default:'"Default Tab Title :)"',     
            }

        },
        data(){
            return {
            //     items : [
            //           {
            //             title:'Home',
            //             content:'Home Home Home Home Home Home Home Home Home Home Home Home Home Home '
            //           },
            //           {
            //             title:'Profile',
            //             content:'Profile Profile Profile Profile Profile Profile Profile Profile Profile Profile Profile Profile '
            //           },
            //           {
            //             title:'Contact',
            //             content:'Contact us please!!'
            //           },
            //         ],
                    current_tab:this.items[0].title,
            }
        },
        emmit:{  // for validation emits (data output components)
            'delete-navbar':function(value){
                console.log('***', value)
                return true
            }
        },
         methods:{
             send_for_delete(items){
                 this.$emit('delete-navbar',items)
             }
         }
    }
</script>

<style>

.title{
    margin-right: 10px;
    display: inline-block;
}
</style>