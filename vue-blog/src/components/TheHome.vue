<template>
    <!-- Page content-->
    <div class="container">
        <div class="row">
            <!-- Blog entries-->
            <div class="col-lg-8" v-if="loaded">
                <!-- Featured blog post-->
                <div class="card mb-4">                    
                    <featured-post-component  v-if="Object.keys(featured_post).length!=0" :data='featured_post'></featured-post-component>
                    <p class="text-center text-primary fs-5 my-4" v-else>Not found no feature post for show</p>
                </div>
                <!-- Nested row for non-featured blog posts-->
                <div class="row">
                    <div class="col-lg-6" v-for="(postArray, indexArray) in getPostArrayForShow()" :key="indexArray">
                        <!-- Blog post-->
                        <post-component v-for="(post, index) in postArray" :key="index" :post='post'></post-component>
                    </div>
                </div>
                <!-- Pagination-->
                <paginator-component :currentPageNumber='currentPageNumber' :length='parseInt(getPaginatedPosts().length/2)' @update-current-page='updateCurrentPage' url='settings.url'></paginator-component>
            </div>
            <div v-else class="text-primary fs-5 text-center mt-4">Is loading posts</div>
            <!-- Side widgets-->
            <sidebar-component></sidebar-component>
        </div>
    </div>
</template>

<script>
import sidebarComponent from './sidebar-component.vue';
import featuredPostComponent from './featured-post-component.vue';
import postComponent from './post-component.vue';
import paginatorComponent from './paginator-component.vue';
import postapi from './apis/postapis';

export default {
    components:{
        'sidebar-component':sidebarComponent,
        'sidebar-component':sidebarComponent,
        'featured-post-component':featuredPostComponent,
        'post-component':postComponent,
        'paginator-component':paginatorComponent,

    },

    methods:{
         
        getPaginatedPosts(){
             return this.GroupedList(this.posts, 2)
        },

        getPostArrayForShow(){
            return this.getPaginatedPosts().slice(...this.getPaginatorSliceNumber())
        },

        getPaginatorSliceNumber(){
            let start=-2 + (this.currentPageNumber*2);
            let end = start+2;
            return [start, end]
        },
        randomDate() {
            let start =new Date(2000, 1, 1)
            let end =new Date()
            let randomdate= new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return randomdate.toDateString()
        },

        updateCurrentPage(n){
            this.currentPageNumber=n;
            // window.location = this.getPageUrl(n)
        },

        

        GroupedList(lst,n){
            let counter = 0
            let result_list = []
            let temp_list = []
            lst.forEach(function(item){
                if (counter==n){
                    counter=0
                    result_list.push(temp_list)
                    temp_list=[]
                } 
                temp_list.push(item)
                counter++                                  
            })
            if(temp_list.length!=0){result_list.push(temp_list)}
            return result_list
        },

    },

    data(){
        return{
            countdata:10,
            currentPageNumber:1,
            loaded:false,

            posts:[

            ],

            

            featured_post:{
            },
        }
    },

    created(){
        //first data loading  
        postapi.get(`/posts?_page=${this.currentPageNumber}&_limit=${this.countdata}}`)
            .then((data)=>{
                data = data.data
                this.featured_post=data.shift()
                this.posts.push(...data)
                this.featured_post.date=this.randomDate()
                for (const item of this.posts) {
                    item.date=this.randomDate()
                }
            })
            .catch((err)=>console.log('MyError:',err))
                  
        postapi.get(`/photos?_page=${this.currentPageNumber}_limit=${this.countdata}`)
            .then(data=>{
                let photos=data.data
                this.featured_post.image = photos.shift().url
                for (const item of this.posts) {
                    let photo = photos.shift()
                    item['image'] = photo.url 
                }
                this.loaded=true
        }) 
    },
}
</script>