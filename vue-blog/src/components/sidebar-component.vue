<script>
import searchboxComponent from './searchbox-component.vue';
import categoryComponent from './category-component.vue';
    export default{
        components:{
            searchboxComponent,
            categoryComponent,
        }
    }
</script>


<template>
    <div class="col-lg-4">
        <!-- Search widget-->
        <div class="card mb-4">
            <searchbox-component></searchbox-component>
        </div>
        <!-- Categories widget-->
        <div class="card mb-4">
            <category-component></category-component>
        </div>
        <!-- Side widget-->
        <div class="card mb-4">
            <div class="card-header">Side Widget</div>
            <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
        </div>
    </div>
</template>



