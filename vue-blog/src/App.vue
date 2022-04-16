<template>
    <title>{{settings.navbar_text.text}}</title>
  <!-- Responsive navbar-->
        <navbar-component :tab_list='tab_list'></navbar-component>
        <!-- Page header with logo and tagline-->
        <header-component :title='settings.welcome_text' :desc="settings.desc"></header-component>
        <router-view></router-view>
        <!-- Footer-->
        <footer-component :copyright_text='settings.copyright_text'></footer-component>
        <link href="./css/styles.css" rel="stylesheet" />

</template>

<script>
 
import navbarComponent from './components/navbar-component.vue';
import headerComponent from './components/header-component.vue';
import footerComponent from './components/footer-component.vue';


export default{
    

    components:{
        'navbar-component':navbarComponent,
        'header-component':headerComponent,
        'footer-component':footerComponent,

    },

   methods:{
       getCurrentYear(){
            return (new Date).getFullYear()
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


            
        }
    },

}
</script>


<style>
    a{
        user-select: none;
    }
</style>
