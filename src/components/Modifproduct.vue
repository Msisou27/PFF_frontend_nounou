<template>
    <div>
        <h2 class="vert text-white col-md-6 ml-auto mr-auto mt-4 mb-4 rounded">Modifier Annonce</h2>
        <form class="col-md-6 text-left border p-3 m-auto bg-light">
    
  <div class="form-row"> 
    <div class="form-group col-md-6">
    <label for="validationCustom01">Titre</label>
      <input v-model="title" id="title" name="title" type="text" class="form-control" placeholder="Titre de l'annonce">
    </div>
    <div class="form-group col-md-6">
       <label for="validationCustom01">Description courte</label>
      <input v-model="description_short" type="text" class="form-control" placeholder="Ex: Jouet enfant 3ans">
    </div>
 </div> 
    
  <div class="form-row ">  
  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect2">Catégories</label>
    <select v-model="category" type="text" class="form-control" id="exampleFormControlSelect2">
      <option>Jeux d'extérieurs</option>
      <option>Jeux d’intérieurs</option>
      <option>Poussettes</option>
      <option>Petit matériel de puériculture</option>
      <option>Lit et couchette</option>
      <option>Produits d’hygiènes</option>
      <option>Produits de sécurité</option>
      </select>
  </div>
  <div class="form-group col-md-6">
    <label for="exampleFormControlSelect1">Condition</label>
    <select v-model="used" type="text" class="form-control" id="exampleFormControlSelect1">
      <option>Comme neuf</option>
      <option>Très bon état</option>
      <option>Bon état</option>
      <option>Etat correct</option>
      <option>Fonctionnel</option>
      </select>
  </div>
  </div>

    <div class="form-group col-md-12 ">
      <label for="inputEmail4">Description longue</label>
      <textarea v-model="description_long" type="text" class="form-control" id="description_long" placeholder="Decritpion détailler de votre annonce"></textarea>
    </div>
  
<div class="form-row">
    <div class="form-group col-md-3">
        <label for="inputAddress2">CP</label>
        <input v-model="location" type="text" class="form-control" id="inputAddress2" placeholder="ex: 83000">
    </div>
    <div class="form-group col-md-5">
      <label for="inputCity">Villes</label>
      <input v-model="town" type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Prix de vente</label>
      <input v-model="price" type="text" class="form-control" id="inputZip">
    </div>
</div>
  
  <p @click="modifProduct()" type="submit" value="Submit" class="col-md-10 ml-5 btn text-white mt-4 bleu">Modification de votre annonce</p>
</form>
  <div v-if="this.message" class="col-md-6 mt-2 ml-auto mr-auto alert alert-success" role="alert">
  {{this.message}}
  </div>
    </div>
</template>

<script>

import nounou from '@/services/nounou'

export default {
    name:'Modifproduct',
    data: ()=>({
      prod:[],
      title:'',
      description_short:'',
      description_long:'',
      category:'',
      used:'',
      location:'',
      town:'',
      price:'',
      message:'',
   }),
    created() {
    if(localStorage.getItem('token')=='null'){
        window.location.href = '/'
    }
  },
  mounted: async function(){  
    const res = await nounou.recupProduct(this.$route.params.slug)
    this.prod = res.data.data
    console.log(this.prod)

    this.title = this.prod.title
    this.category = this.prod.category
    this.used = this.prod.used
    this.description_short = this.prod.description_short
    this.description_long = this.prod.description_long
    this.location = this.prod.location
    this.town = this.prod.town
    this.price = this.prod.price

  },
  methods: {
    modifProduct: async function(){
    this.message='';
    
    var params = {
    id:this.prod.id,       
    title: this.title,
    description_short: this.description_short,
    description_long: this.description_long,
    category: this.category,
    used: this.used,
    location: this.location,
    town: this.town,
    price: this.price,
    }
    console.log(params);
    let res = await nounou.updateProduct(params);
    this.message = res.data.message
    if (this.message){
        setTimeout(()=>{ location.href = '/Profil'; }, 2000)}
    // location.reload();
    console.log(res);
    },
  }
}
</script>

<style scoped>
.bleu {
   background-color: #539ee4;
}
.vert {
  background-color: #00c5ad;
}
</style>