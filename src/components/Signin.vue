<template>
    <div>
        <h3 class="col-lg-5 vert text-white ml-auto mr-auto mb-3 mt-5 rounded">Connectez-vous à un compte existant</h3>              
            
      <form class="">
          <div class="form-group col-lg-5 border m-auto p-3 bg-light">
        
        <label for="inputPassword5">Email</label>
        <input type="email" v-model="email" id="email" name="email" class="form-control t" aria-describedby="passwordHelpBlock" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" required>
            <small id="passwordHelpBlock" class="form-text text-muted">
            Votre email doit contenir tous les caracteres email valides (@/.fr).
            </small>
            <label for="inputPassword5">Password</label>
        <input type="password" v-model="password" id="inputPassword5" class="form-control sm-3 t" aria-describedby="passwordHelpBlock" required>
            <small id="passwordHelpBlock" class="form-text text-muted">
            Votre password doit contenir 8 caracteres minimum.
            </small>

        <div type="submit" value="Submit" @click="signinUser()" class="btn bleu text-white mt-4">Se connecter</div>
        <small id="passwordHelpBlock" class="form-text text-muted mt-2">
            Vous n'avez pas de compte? <router-link class="text-white vert rounded p-1 ml-2" to="/Register">Inscription</router-link>
            </small>
            </div>
      </form>
        <div v-if="this.message" class="alert alert-success col-lg-5 ml-auto mr-auto mt-3" role="alert">{{this.message}}</div>
        <div v-else-if="this.message_error" class="alert alert-danger col-lg-5 ml-auto mr-auto mt-3" role="alert">{{this.message_error}}</div>
    
    </div>   
</template>

<script>

import nounou from '@/services/nounou'

export default {
    name:'singin',
data: ()=>({
    email:'',
    password:'',
    error:'',
    message:'',
    message_error:'',
}),
methods: {
    signinUser: async function () {
        this.message ="";
        this.message_error = "";

        var params = {
        email: this.email,
        password: this.password,
        }
        console.log(params)
        let res = await nounou.loginUser(params);
        this.message = res.data.message
        this.message_error = res.data.message_error
        console.log(res);

        localStorage.setItem('token', this.$store.state.token + res.data.token)
        if (this.message){
        setTimeout(()=>{  location.href = '/Annonces'; }, 2000)}
        // location.href='/Annonces'
        console.log(res.data.email)
        console.log(res.data.token)
        
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
.t {
 border-top:none;
 border-left:none;
 border-right: none;
 border-bottom:1px solid #539ee4 ;
}   
</style>