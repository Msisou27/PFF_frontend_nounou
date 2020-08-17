<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light #nav bg-secondary">
  <a class="navbar-brand" href="#"><img src="../assets/image2.png" alt="" width="120px" class="p-0"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-link ml-5"><router-link  to="/">Home Page</router-link></li> 
      <li class="nav-link ml-5"><router-link to="/Annonces">Annonces</router-link></li>
      <li class="nav-link ml-5" ><router-link to="/Profil">Mon profil</router-link></li>
      <li class="nav-link ml-5" ><router-link to="/Testtest">Chat</router-link></li>
    </ul>
    <div class="nav-item dropdown mx-auto">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Connexion
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" ><router-link class="text-dark"  to="/Register">Register</router-link></a>
          <a class="dropdown-item" ><router-link class="text-dark" to="/Login">Login</router-link></a>
          <a @click="logout()" class="dropdown-item text-dark" href="">Logout</a>
        </div>
      </div>
  </div>
</nav> 
  
    </div>
</template>

<script>
// import nounou from '@/services/nounou'

export default {
    name: 'Navbar',
    
    methods: {
     logout() {
        localStorage.setItem('token', null)
        this.$router.go()
      },
      
    },
}
</script>

<style scoped>
#nav {
  background-color: 539ee4;
}
</style>