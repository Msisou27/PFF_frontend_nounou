<template>
<div>
    <div class="col-md-12 mt-4 mb-4 row">     
        <h2 class="col-md-6">{{detail.firstname}}, content de vous revoir !</h2>
        <router-link class="col-md-2 ml-auto btn mt-2 text-uppercase route" to="/Productcrea" >Création d'annonces</router-link>
        <router-link class="col-md-2 mr-auto btn mt-2 ml-5 text-uppercase route" to="/Gestion" v-if="detail.is_admin">Administrateur</router-link>       
    </div> 

<div class="row m-auto">
  <div class="col-md-6">
    <h2 class="bleu text-white rounded">Mes données</h2>
      <form class="text-left border p-3 bg-light">
    
   <div class="form-row"> 
    <div class="form-group col-md-6">
       <label for="validationCustom01">Pénom</label>
      <input v-model="firstname" id="firstname" name="firstname" type="text" class="form-control" placeholder="First name">
    </div>
    <div class="form-group col-md-6">
        <label for="validationCustom01">Nom</label>
      <input v-model="surname" type="text" class="form-control" placeholder="Last name">
    </div>
   </div>
  
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Adresse mail</label>
        <input v-model="email" type="email" class="form-control" id="inputEmail4">
      </div>
     <div class="form-group col-md-6">
        <label for="inputZip">Numéro de mobile</label>
        <input v-model="phone" type="phone" class="form-control" id="inputphone">
      </div>
  </div>
  
  <div class="form-row">
      <div class="form-group col-md-2 ">
        <label for="inputAddress">N°</label>
        <input v-model="number_adress" type="text" class="form-control" id="inputAddress" placeholder="1240">
      </div>
      <div class="form-group col-md-10">
        <label for="inputAddress2">Adresse</label>
        <input v-model="adress" type="text" class="form-control" id="inputAddress2" placeholder="Adresse">
      </div>
   </div> 

    <div class="form-row"> 
      <div class="form-group col-md-6 ">
        <label for="inputZip">Code postal</label>
        <input v-model="location" type="text" class="form-control" id="inputZip">
      </div>
       <div class="form-group col-md-6">
        <label for="inputCity">Ville</label>
        <input v-model="town" type="text" class="form-control" id="inputCity">
      </div>
    </div>
  
      <p @click="updateUser()" type="submit" value="Submit" class="btn bleu text-white">Modifier mes données utilisateur</p>
    </form>
 </div>

       <div class="col-md-6">
          <div >
            <h2 class="vert text-white rounded">Mes annonces</h2>
            <div class="border-bottom p-2" v-for="(productuser, index) in prod" :key="index">
                  
          <div class="row bg-light">        
            <div class="col-md-6 pt-2 text-left row "> 
                <p class="ml-2">{{prod[index].created_at|formatDate}}</p>
                <p class="ml-3">| {{prod[index].title}}</p>
            </div>          
              <div class="col-md-4 ml-auto mt-auto mb-auto">         
                <div @click="SuppProduct(prod[index].id)" class="btn bleu text-white mr-2">Supp</div>
                <div @click="updateProduct(prod[index].slug)" class="btn vert text-white">Modifier</div>
             </div>
           </div> 

            </div>
          </div>
        </div>
  </div>
</div> 
</template>

<script>

import nounou from '@/services/nounou'

export default {
    name:'Profiluser',
    data: ()=>({
    prod:[],
    detail:[],
//---[ Update User ]--
    firstname:'',
    surname:'',
    email:'',
    number_adress:'',
    adress:'',
    location:'',
    town:'',
    phone:'',
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

    const resp = await nounou.recupUserDetail()
    this.detail =resp.data.user
    console.log(this.detail)

    this.firstname = this.detail.firstname
    this.surname = this.detail.surname
    this.email = this.detail.email
    this.number_adress = this.detail.number_adress
    this.adress = this.detail.adress
    this.phone = this.detail.phone
    this.town = this.detail.town
    this.location = this.detail.location 


  },
  methods:{
    updateUser: async function () {
    
      var params = {
      id: this.detail.id,
      firstname: this.firstname,
      surname: this.surname,
      email: this.email,
      number_adress: this.number_adress,
      adress: this.adress,
      location: this.location,
      town: this.town,
      phone: this.phone,
      }

      console.log(params);
      let res = await nounou.modifyUser(params);
      // location.href = '/Profil';
      // location.reload();
      console.log(res);        
    },
     SuppProduct : async function (id) {
        var verify = null
        var result = null
            console.log(id)
        verify = confirm('Are you sure, do you want to delete this product ?')
        if (verify){
        result = await nounou.deleteProduct(id)
        console.log(result)

        }
    },
    updateProduct: function(slug){
          var url = 'Updateproduct/'+slug
          location.href=url
      },

  },
}
</script>

<style scoped>
.vert {
  background-color: #00c5ad;
}
.bleu {
  background-color: #539ee4;
}
.route {
 background-color: rgba(83, 158, 228, 0.2);
 color:gray;
 border-bottom: 2px solid #539ee4;
 text-decoration: none;
 border-left: 2px solid #539ee4;
}
</style>