<template>
    <div>
        <h1>Gestion des utilisateurs</h1>
        
        <h4 class="border-bottom bg-light">Administrateurs</h4>
        <div v-for="(user, index) in users" :key="index">
          <div class="row d-flex justify-content-center p-2">
          <div v-if="users[index].is_admin" class="col-md-3 text-left">{{users[index].surname}} {{users[index].firstname}} </div>
          <div v-if="users[index].is_admin" @click="AdminUser(users[index].id)" class="btn btn-danger">Admin->User</div>
          </div>
        </div>
        
        <h4 class="border-bottom bg-light">Utilisateurs</h4>
        <div v-for="(user2, index) in users" :key="index">
          <div class="row d-flex justify-content-center p-2">
          <div v-if="!users[index].is_admin" class="col-md-3 text-left">{{users[index].surname}} {{users[index].firstname}} </div>
          <div v-if="!users[index].is_admin" @click="Useradmin(users[index].id)" type="submit" value="submit" class="btn btn-success">User->Admin</div>
          </div>
        </div>


    </div>
</template>

<script>

import nounou from '@/services/nounou'

export default {
    name:'Gestionuser',
    data: ()=>({
    users:[],
  }),
  mounted: async function(){
    const res = await nounou.recupAllUser()
    this.users = res.data
    console.log(this.users)
    this.is_admin = 1
    
  },
  methods: {
    Useradmin: async function (id) {
    
      var params = {
      is_admin: 1,
      id:id,
      }
      let res = await nounou.updateUserAdmin(params);
      // location.href = '/Profil';
      location.reload();
      console.log(res);  
    },
    AdminUser: async function (id) {
    
      var params = {
      is_admin: 0,
      id:id,
      }
      let res = await nounou.updateUserAdmin(params);
      // location.href = '/Profil';
      location.reload();
      console.log(res);  
    }
  },
  
}
</script>

<style scoped>

</style>