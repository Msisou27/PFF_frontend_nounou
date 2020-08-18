<template>
    <div>
        <h2 class="col-md-6 vert text-white ml-auto mr-auto mb-3 mt-5 rounded">Inscription</h2>
        <form class="col-md-6 text-left border p-3 m-auto bg-light">
    <div class="form-row">
    <div class="form-group col-md-6">
       <label for="validationCustom01">First name</label>
      <input v-model="firstname" id="firstname" name="firstname" type="text" class="form-control" placeholder="First name">
    </div>
    <div class="form-group col-md-6">
        <label for="validationCustom01">Last name</label>
      <input v-model="surname" type="text" class="form-control" placeholder="Last name">
    </div>
   </div>
   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Mot de passe</label>
      <input v-model="password" type="password" class="form-control" id="inputPassword4" placeholder="Mot de passe">
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-2">
    <label for="inputAddress">N°</label>
    <input v-model="number_adress" type="text" class="form-control" id="inputAddress" placeholder="1234">
  </div>
  <div class="form-group col-md-10">
    <label for="inputAddress2">Addresse</label>
    <input v-model="adress" type="text" class="form-control" id="inputAddress2" placeholder="Adresse">
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Villes</label>
      <input v-model="town" type="text" class="form-control" id="inputCity" placeholder="Nom de ville">
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">CP</label>
      <input v-model="location" type="text" class="form-control" id="inputZip" placeholder="code postal">
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Mobile</label>
      <input v-model="phone" type="phone" class="form-control" id="inputphone" placeholder="N° de mobile">
    </div>
  </div>
  
  <p @click="newUser()" type="submit" value="Submit" class="btn bleu text-white mt-4">Valider son inscription</p>
</form>
        
    </div>
</template>

<script>

import nounou from '@/services/nounou'


export default {
    name:'Signup',
      data: ()=>({
        firstname:'',
        surname:'',
        email:'',
        password:'',
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
  methods:{
      newUser: async function () {
        // this.error = "";

        var params = {
        firstname: this.firstname,
        surname: this.surname,
        email: this.email,
        password: this.password,
        number_adress: this.number_adress,
        adress: this.adress,
        location: this.location,
        town: this.town,
        phone: this.phone,
        }

        console.log(params);
        let res = await nounou.createUser(params);
        location.href = '/Profil';
        location.reload();
        console.log(res);        
    },
  
  },
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