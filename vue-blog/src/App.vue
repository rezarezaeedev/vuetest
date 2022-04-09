<template>
    <title>{{settings.navbar_text.text}}</title>
  <!-- Responsive navbar-->
        <navbar-component :tab_list='tab_list'></navbar-component>
        <!-- Page header with logo and tagline-->
        <header-component :title='settings.welcome_text' :desc="settings.desc"></header-component>
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
                    <paginator-component :currentPageNumber='currentPageNumber' :length='parseInt(getPaginatedPosts().length/1.5)' @update-current-page='updateCurrentPage' url='http://localhost:3000/blog'></paginator-component>
                </div>
                <div v-else class="text-primary fs-5 text-center mt-4">Is loading posts</div>
                <!-- Side widgets-->
                <sidebar-component></sidebar-component>
            </div>
        </div>
        <!-- Footer-->
        <footer-component :copyright_text='settings.copyright_text'></footer-component>
</template>

<script>
import navbarComponent from './components/navbar-component.vue';
import headerComponent from './components/header-component.vue';
import footerComponent from './components/footer-component.vue';
import sidebarComponent from './components/sidebar-component.vue';
import featuredPostComponent from './components/featured-post-component.vue';
import postComponent from './components/post-component.vue';
import paginatorComponent from './components/paginator-component.vue';
import postapi from './components/apis/postapis';

export default{
    created(){
        postapi.get(`/posts?_limit=${this.countdata}}`)
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
                  
        postapi.get(`/photos?_limit=${this.countdata}`)
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

    components:{
        'navbar-component':navbarComponent,
        'header-component':headerComponent,
        'footer-component':footerComponent,
        'sidebar-component':sidebarComponent,
        'sidebar-component':sidebarComponent,
        'featured-post-component':featuredPostComponent,
        'post-component':postComponent,
        'paginator-component':paginatorComponent,

    },

   methods:{
       randomDate() {
            let start =new Date(2000, 1, 1)
            let end =new Date()
            let randomdate= new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return randomdate.toDateString()
        },

       logger(){
           console.log(this.posts)
       },

        getPageUrl(n){
            let url=this.url;
            return `${url}?page=${n}`
        },
        
        updateCurrentPage(n){
            this.currentPageNumber=n;
            // window.location = this.getPageUrl(n)
        },

        getCurrentYear(){
            return (new Date).getFullYear()
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
    },

    provide(){
        return {
            settings:this.settings,
            getPageUrl:this.getPageUrl,
        }
    },

    data(){
        return {
            currentPageNumber:1,

            tab_list:[
                {
                    id:1,
                    text:'home',
                    url:'#'
                },

                {
                    id:2,
                    text:'About',
                    url:'#'
                },

                {
                    id:3,
                    text:'Contact',
                    url:'#'
                },

                {
                    id:4,
                    text:'blog',
                    url:'/blog'
                },
            ],

            settings:{
                welcome_text:'Welcome to Reza blog!',
                desc:'A blog about news and hot events',
                navbar_text:{
                    text:'Reza Blog',
                    url:'#'
                },
                copyright_text:`Reza Rezaee ${this.getCurrentYear()}`,
            },

            posts:[

            ],

            featured_post:{
            },

            loaded:false,
            countdata:40,
        }
    },

}
</script>


<style>

</style>
