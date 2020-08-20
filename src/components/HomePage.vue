<template>
  <div>
    <h1></h1>

      <div class="jumbotron jumbotron-fluid jumbor">
        <div class="container">
           <h1 class="display-4 h1">LE SITE D'ANNONCES POUR LES ASSISTANTES MATERNELLES</h1>
       <!--   <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> -->
         
       

        </div> <div class="row ">
          <div class="col-md-2 border-right text1 bg-white bordbas1 ml-auto">Annonces</div>
          <div class="col-md-2 border-right text1 bg-white bordbas1">Chat</div>
          <div class="col-md-2 text1 bg-white bordbas1 mr-auto">Actualités</div>
       </div>
      </div>
    
    <h3>LES ANNONCES EN LIGNES </h3>
    <div class="bleu text-white m-auto">Les catégories les plus populaires</div>

    <div class="col-md-12 row mt-5 mb-5">
      <div class="col-md-3 text1 ml-auto mr-auto p-0 bordbas">
        <img src="@/assets/home.jpg" width="100%" alt="">
        <div class="">Jeux d'extérieurs</div>
      </div>
      <div class="col-md-3 mr-auto ml-auto p-0 bordbas text1">
        <img src="@/assets/home2.jpg" width="100%" alt="">
        <div class="">Poussettes</div>
      </div>
      <div class="col-md-3 mr-auto ml-auto p-0 bordbas text1"> 
        <img src="@/assets/home1.jpg" width="100%" alt="">
        <div class="">Jeux d'intérieurs</div>
      </div>
    </div>

<div class="bg-light">
    <h3 class="pt-4">LES ACTUALIT&Eacute;S</h3> 
    <div class="vert text-white m-auto">L'actualité du site et du moment</div> 

    <div class="col-md-12 row mt-5 mb-5">  
      <div class="col-md-3 mr-4 p-0 mb-5 bordbas1 bg-white text1 ml-auto">
        <img src="@/assets/home3.jpg" width="100%" height="385px" alt="" class="border">
        <div class="bg-white">SANT&Eacute;</div>
      </div>
      <div class="col-md-3 mr-4 p-0 mb-5 bordbas1 text1">
        <img src="@/assets/home4.jpg" width="100%" height="385px" alt="" class="border">
        <div class="bg-white">HYGIENE</div>
      </div>
      <div class="col-md-3 mr-auto mb-5 p-0 bordbas1 text1"> 
        <img src="@/assets/home5.jpg" width="100%" height="385px" alt="" class="border">
        <div class="bg-white">ASSISTANTES MATERNELLES</div>
      </div>
    </div>
  </div>

 <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 h1 text-left">QUELQUES MOTS SUR LE SITE</h1>
          <div>
          <p class="lead text-left m-auto">Un site dédié au assistantes maternelles.<br>
            Un site qui évoluera avec vous et avec vos propositions d'améliorations.<br>
            <span>contactez nous</span></p>
          
          </div>
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
   width:260px;
   border-radius: 15px;
}
.vert {
   background-color: #00c5ad;
   width:250px;
   border-radius: 15px;
}
.text1 {
  font-size: 20px;
  font-weight: bolder;
  border-right: gray;
}
.bordbas {
  border-bottom: 3px solid #539ee4;
}
.bordbas1 {
  border-bottom: 3px solid #00c5ad;
}
.jumbor {
   background-color: rgb(83, 158, 228, 0.5);
}
.h1{
  font-size: 35px;
}

</style>
