<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light #nav bg-secondary">
  <a class="navbar-brand" href="#"><img src="../assets/image2.png" alt="" width="120px" class="p-0"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav text-left">
      <li class="nav-link ml-2"><router-link  to="/">Home Page</router-link></li> 
      <li class="nav-link ml-2"><router-link to="/Annonces">Annonces</router-link></li>
      <li v-if="!isNotConnect()" class="nav-link ml-2" ><router-link to="/Profil">Mon profil</router-link></li>
      <li v-if="!isNotConnect()" class="nav-link ml-2" ><router-link to="/Testtest">Chat</router-link></li>
    </ul>
    <div class="nav-item dropdown mx-auto">
        <a v-if="isNotConnect()" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Connexion
        </a>
        <div  class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink ">
          <a  class="dropdown-item" ><router-link  class="text-dark"  to="/Register">Register</router-link></a>
          <a  class="dropdown-item " ><router-link  class="text-dark " to="/Login">Login</router-link></a>
        </div>
        
      </div>
  </div>
  <a v-if="!isNotConnect()" @click="logout()" class="text-white ml-auto mr-auto" href="">Logout</a>
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
      isNotConnect(){
      return localStorage.getItem('token')=='null'
    }
    },
}
</script>

<style scoped>
#nav {
  background-color: 539ee4;
}

</style>