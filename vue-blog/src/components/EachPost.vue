<script>
import postapis from './apis/postapis'
export default {
    created(){
        postapis.get(`/posts/${this.$route.params.id}`)
            .then(data=>{
                data=data.data
                this.post = data
                this.post.date= this.randomDate()
    
            })

        postapis.get(`/photos/${this.$route.params.id}`)
            .then(data=>{
                let photos=data.data
                this.post.image = photos.url
                this.loaded=true
    
        }) 
    },

    data(){
        return {
            post:{
               
            },
            loaded:false,
        }
    },
    methods:{
        randomDate() {
            let start =new Date(2000, 1, 1)
            let end =new Date()
            let randomdate= new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return randomdate.toDateString()
        },
    }
}
</script>


<template>
    <div class="container">
        <div class="card mb-4" v-if="loaded">
            <a :href="post.image"><img class="card-img-top" :src="post.image" alt="..." style="width:410px; height:150px;object-fit:cover" ></a>
            <div class="card-body">
                <div class="small text-muted">{{post.date}}</div>
                <h2 class="card-title h4">{{post.title}}</h2>
                <p class="card-text">{{post.body}}</p>
            </div>
        </div>
        <div v-else class="text-primary fs-5 text-center my-4">Is Loading...</div>
    </div>

</template>
