<script>
export default {
   props:[
       'currentPageNumber',
       'url',
       'length',
   ],
   
   inject:[
       'getPageUrl'
   ],

   methods:{
       updateCurrentPage(n){
           this.$emit('update-current-page', n)
       },

       prepageNumber(){
           let res=this.currentPageNumber;
           if(this.currentPageNumber!=1){
               res = this.currentPageNumber-1
           }
           return res
       },

       nextpageNumber(){
           let res=this.currentPageNumber;
           let url=this.url;
           if(this.currentPageNumber!=this.length){
               res = this.currentPageNumber+1
           }
           return res
       },
   }
}
</script>

<template>
    <nav aria-label="Pagination">
        <hr class="my-0" />
        <ul class="pagination justify-content-center my-4" v-if="length">
            <li class="page-item mx-4"><a class="page-link"  :href="getPageUrl(1)"  @click.prevent='updateCurrentPage(1)'>First</a></li>
            <li class="page-item"><a class="page-link"  :href="getPageUrl(prepageNumber())"  @click.prevent='updateCurrentPage(prepageNumber())'>Previous</a></li>

            <!-- <li class="page-item" v-for="(page, index) in length" :class="{'active':page==currentPageNumber}"  :key="index" ><a class="page-link" :href="getPageUrl(page)" v-text="page" @click.prevent='updateCurrentPage(page)'></a></li> -->
            <li class="page-item"><a class="page-link"  :href="getPageUrl(prepageNumber())" v-if="currentPageNumber-1 > 0"  @click.prevent='updateCurrentPage(currentPageNumber-1)'>{{currentPageNumber-1}}</a></li>
            <li class="page-item active" ><a class="page-link"  v-text="currentPageNumber" @click.prevent='updateCurrentPage(page)'></a></li>
            <li class="page-item"><a class="page-link"  :href="getPageUrl(prepageNumber())" v-if="currentPageNumber+1<length"  @click.prevent='updateCurrentPage(currentPageNumber+1)'>{{currentPageNumber+1}}</a></li>

            <li class="page-item"><a class="page-link"   tabindex="-1" aria-disabled="true"  :href="getPageUrl(nextpageNumber())" @click.prevent='updateCurrentPage(nextpageNumber())'>Next</a></li>
            <li class="page-item mx-4"><a class="page-link"   tabindex="-1" aria-disabled="true"  :href="getPageUrl(length)" @click.prevent='updateCurrentPage(length)'>Last</a></li>
        </ul>
    </nav>
</template>