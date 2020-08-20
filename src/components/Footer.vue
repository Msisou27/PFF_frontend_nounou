<template>
    <div>
        <div class="footer bg-white">
            <div>
            <a class="ml-auto mt-1" href=""><img src="https://img.icons8.com/color/40/000000/google-logo.png"/></a>
            <a class="mt-1" href=""><img src="https://img.icons8.com/fluent/40/000000/facebook-new.png"/></a>
            <a class="mt-1" href=""><img src="https://img.icons8.com/fluent/40/000000/twitter.png"/></a>
            <a class="mr-auto mt-1" href=""><img src="https://img.icons8.com/fluent/40/000000/instagram-new.png"/></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style scoped>
.footer{
  background:#ccc;
  position:fixed;
  bottom:0;
  width:30%; 
  border-radius: 0px 20px 20px 0px;
  border:2px solid #539ee4;
  padding:0.5rem;
}
</style>