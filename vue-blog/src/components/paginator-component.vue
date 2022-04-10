<script>

export default {
   props:{
       length:{
           //Number of totaly page
           type:Number,
           required:true,
           validation:function(){
               if (0<length){return true}
           }
       },
    
       currentPageNumber:{
           //specific current page number
           type:Number,
           required:true,
           validation:function(){
               if (0<currentPageNumber<length+1){return true}
           }
       },
       url:{
           //base url for evaluate each page number button
           type:String,
           required:true,
       },

       paginatorRange:{
           //specific less and more range number than current page number
           required:false,
           type:Number,
           default:3,
       }
   },
   
   inject:[

   ],

   data(){
        return {

        }
    },

   methods:{
       getPageUrl(n){
            let url=this.url;
            return `${url}?page=${n}`
        },
        
       updateCurrentPage(n){
           //send new current page to App.vue
           this.$emit('update-current-page', n)
       },

       prepageNumber(){
           // check previos page is valid and return
           let res=this.currentPageNumber;
           if(this.currentPageNumber!=1){
               res = this.currentPageNumber-1
           }
           return res
       },

       nextpageNumber(){
           // check next page is valid and return
           let res=this.currentPageNumber;
           let url=this.url;
           if(this.currentPageNumber!=this.length){
               res = this.currentPageNumber+1
           }
           return res
       },

       getRangePage(){
           // make valid range in (1 to length) range
           let min = Math.max(1, this.currentPageNumber-this.paginatorRange)
           let max = Math.min(this.length, this.currentPageNumber+this.paginatorRange)
           return Array.range(min, max, 1)
       },


   }
}
</script>

<template>
    <nav aria-label="Pagination">
        <hr class="my-0" />
        <ul class="pagination justify-content-center my-4" v-if="length">
            <!--Previos page-->
            <li class="page-item"><a class="page-link"  :href="getPageUrl(prepageNumber())"  @click.prevent='updateCurrentPage(prepageNumber())'>Previous</a></li>
            <!--Less page-->
            <li class="page-item" v-show="currentPageNumber-paginatorRange > 1"><a class="page-link"  :href="getPageUrl(1)"  @click.prevent='updateCurrentPage(1)'>1</a></li>
            <li class="page-item disabled" v-if="currentPageNumber-paginatorRange > 1"><a class="page-link" href="#!">...</a></li>
            <!--Forloop page-->
            <li class="page-item" v-for="(page, index) in getRangePage()" :class="{'active':page==currentPageNumber}"  :key="index" ><a class="page-link" :href="getPageUrl(page)" v-text="page" @click.prevent='updateCurrentPage(page)'></a></li>
            <!--More page-->
            <li class="page-item disabled" v-if="currentPageNumber+paginatorRange < length"><a class="page-link" href="#!">...</a></li>
            <li class="page-item" v-if="currentPageNumber+paginatorRange < length"><a class="page-link"   tabindex="-1" aria-disabled="true"  :href="getPageUrl(length)" @click.prevent='updateCurrentPage(length)'>{{length}}</a></li>
            <!--Next page-->
            <li class="page-item"><a class="page-link"   tabindex="-1" aria-disabled="true"  :href="getPageUrl(nextpageNumber())" @click.prevent='updateCurrentPage(nextpageNumber())'>Next</a></li>
        </ul>
    </nav>
</template>