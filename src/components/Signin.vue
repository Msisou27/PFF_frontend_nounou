<template>
    <div>
        <h1>Log in to an existing account</h1>

        <!-- <div v-if="this.error" class="alert alert-danger mt-3" role="alert">
                {{ this.error }}
            </div> -->
      <form >
          <div class="form-group col-lg-4 border m-auto p-3">
        
        <label for="inputPassword5">Email</label>
        <input type="email" v-model="email" id="email" name="email" class="form-control" aria-describedby="passwordHelpBlock">
            <small id="passwordHelpBlock" class="form-text text-muted">
            Votre email doit contenir tous les caracteres email valides (@/.fr).
            </small>
            <label for="inputPassword5">Password</label>
        <input type="password" v-model="password" id="inputPassword5" class="form-control sm-3" aria-describedby="passwordHelpBlock">
            <small id="passwordHelpBlock" class="form-text text-muted">
            Votre password doit contenir 8 caracteres minimum.
            </small>

        <div type="submit" value="Submit" @click="signinUser()" class="btn btn-primary">Submit</div>
        <small id="passwordHelpBlock" class="form-text text-muted">
            Don't have an account? Sign up.
            </small>
            </div>
      </form>
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
}),
methods: {
    signinUser: async function () {
        // this.error = "";

        var params = {
        email: this.email,
        password: this.password,
        }
        console.log(params)
        let res = await nounou.loginUser(params);
        console.log(res);

        
            localStorage.setItem('token', this.$store.state.token + res.data.token)
            location.href='/Annonces'
            console.log(res.data.email)
            console.log(res.data.token)
        
    },
    
  },
    


}
</script>

<style scoped>
    
</style>