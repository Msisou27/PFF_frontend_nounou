<template>
  <div>
    <h1>Home page</h1>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    
    <h2>Les annonces en ligne</h2>

    <div class="col-md-12 row ">
      <div class="col-md-3 border ml-auto mr-3 p-0"> test
        <div class="bleu text-white">test</div>
      </div>
      <div class="col-md-3 border mr-3 p-0"> test
        <div class="bleu text-white">test</div>
      </div>
      <div class="col-md-3 border mr-auto p-0"> test
        <div class="bleu text-white">test</div>
      </div>
    </div>

    <h2>Les Actualités du Coin des nounous</h2>  

    <div class="col-md-12 row ">
      <div class="col-md-3 border ml-auto mr-4 p-0"> Image
        <div class="border">test</div>
      </div>
      <div class="col-md-3 border mr-4 p-0"> Image
        <div class="border">test</div>
      </div>
      <div class="col-md-3 border mr-auto p-0"> Image
        <div class="border">test</div>
      </div>
    </div>
    
 <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Les avantages du sites</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>

  </div>
</template>

<script>
// import nounou from '@/services/nounou'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bleu {
   background-color: #539ee4;
}
</style>
