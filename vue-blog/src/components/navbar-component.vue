<script>

export default{
    data(){
        return {

        }
    },
    
    methods:{
        getCurrentUrl(){
            return window.location.pathname
        },
    },

    props:{
        'tab_list':{
            name:'tab_list',
            type:Array,
            required:true,

        }
    },

    inject:[
        'settings'
    ]
}
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" :href="settings.navbar_text.url">{{settings.navbar_text.text}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li v-for="tab in tab_list" :key="tab.id" class="nav-item"><a class="nav-link" :class="{'active':getCurrentUrl() == tab.url}" :href="tab.url">{{tab.text}}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>