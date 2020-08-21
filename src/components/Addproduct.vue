<template>
    <div>
        
   <h2 class="vert text-white col-md-6 ml-auto mr-auto mt-4 mb-2 text-decoration-none rounded">Création d'une annonce</h2>
   <!-- <div class="mb-2"><router-link class="retour bleu text-secondary p-1 rounded text-decoration-none" to="/Profil">Retour a mon profil</router-link></div> -->
      <form class="col-md-6 text-left border mt-1 p-3 ml-auto mr-auto mb-2 bg-light">
    
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
  <input class="col-md-10 bg-white border mt-3" type="file" @change="uploadImage">
  <button @click="onUpload">Telecharger</button>

  <p @click="newProduct()" type="submit" value="Submit" class=" btn text-white mt-4 bleu ml-5 mr-auto">Création nouvelle annonce</p>
</form>
    
    <div v-if="this.validation" class="col-md-6 m-auto alert alert-success" role="alert">
    Votre annonce vient d'être publier.
    </div>  
    <div v-else-if="!this.validation" class="col-md-6 m-auto alert alert-secondary" role="alert">
    Veuillez saisir votre annonce. Vous serez redirigé vers votre profi une validée.
    </div>   

 </div>
</template>

<script>

import nounou from '@/services/nounou';


export default {
   name:'Addproduct',
   data: ()=>({
      selectedFile:null,
      prod:[],
      title:'',
      description_short:'',
      description_long:'',
      category:'',
      used:'',
      location:'',
      town:'',
      price:'',
      image:'',
     
      validation:'',
  
   }),
    created() {
    if(localStorage.getItem('token')=='null'){
        window.location.href = '/'
    }
  },
  mounted: async function(){  
    const res = await nounou.recupAllProductsUser()
    this.prod = res.data.data
    console.log(this.prod)


  },
  methods: {
      newProduct: async function(){
      this.validation = "";
      

      var params = {
      title: this.title,
      description_short: this.description_short,
      description_long: this.description_long,
      category: this.category,
      used: this.used,
      location: this.location,
      town: this.town,
      price: this.price,
      // image: this.selectedFile.name,
      }
      console.log(params);
      let res = await nounou.createProduct(params);
      this.validation =  res.data.message
      
      if (this.validation){
        setTimeout(()=>{  location.href = '/Profil'; }, 2000)}
      // location.reload();
      console.log(res);
      },
      uploadImage(e){
        

        console.log(e.target.files[0]);

      },
      onUpload(){
        const formData = new FormData()
        formData.append('myFile', this.selectedFile, this.selectedFile.name)
      }
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
.retour {
  background-color: rgba(83, 158, 228, 0.2);
  border-bottom: 2px solid #539ee4;
}
</style>