<script>
export default {
    props:[
      'post'  
    ],

}
</script>


<template>
    <div class="card mb-4">
        <a :href="post.image"><img class="card-img-top" :src="post.image" alt="..." style="width:410px; height:150px;object-fit:cover" ></a>
        <div class="card-body">
            <div class="small text-muted">{{post.date}}</div>
            <h2 class="card-title h4">{{post.title}}</h2>
            <p class="card-text">{{post.body}}</p>
            <router-link class="btn btn-primary" :to="`/post/${post.id}`">Read more →</router-link>
        </div>
    </div>
</template>
