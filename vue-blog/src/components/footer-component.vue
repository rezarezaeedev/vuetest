<script>
export default {
    props:[
        'copyright_text'
    ]
}
</script>

<template>
    <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; {{copyright_text}}</p></div>
    </footer>
</template>