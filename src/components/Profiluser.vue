<template>
<div>
    <div class="col-md-12 mt-4 mb-4">     
        <h1>{{detail.firstname}} bienvenue sur votre profil utilisateur</h1>
        <router-link to="/Gestion" v-if="detail.is_admin">Administrateur</router-link>
        <router-link class="ml-5" to="/Productcrea" >Création d'annonces</router-link>       
    </div> 

<div class="row m-auto">
  <div class="col-md-6">
    <h1>Mes données</h1>
      <form class="text-left border p-3">
    
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
  
      <p @click="updateUser()" type="submit" value="Submit" class="btn btn-primary">modifier</p>
    </form>
 </div>

       <div class="col-md-6">
          <div >
            <h1>Mes annonces</h1>
            <div class="border p-2" v-for="(productuser, index) in prod" :key="index">
              <div>{{prod[index].title}}
              <div @click="SuppProduct(prod[index].id)" class="btn btn-danger">Supp</div>
              <div @click="updateProduct(prod[index].slug)" class="btn btn-success">Modif</div>
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
/* v-if="detail.is_admin" */
</style>