<script>
export default {
    props:[
        'data'
    ],

}
</script>


<template>
    
        <a :href="data.image"><img class="card-img-top" :src="data.image" alt="..." style="width:850px !important;height:300px !important;object-fit:cover" ></a>
        <div class="card-body">
            <div class="small text-muted">{{data.date}}</div>
            <h2 class="card-title">{{data.title}}</h2>
            <p class="card-text">{{data.body}}</p>
            <a class="btn btn-primary" :href="data.url">Read more →</a>
        </div>
    
</template>