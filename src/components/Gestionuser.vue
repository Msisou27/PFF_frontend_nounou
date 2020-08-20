<template>
    <div>
        <h2 class="m-5">Gestion des utilisateurs</h2>
 <div class="row ml-auto mr-auto">  
     <div class="col-md-6">
        <h4 class=" bleu text-white rounded">Administrateurs</h4>
        <div v-for="(user, index) in users" :key="index">
          <div v-if="users[index].is_admin" class="row col-md-12 ml-auto mr-auto d-flex justify-content-center p-2 bg-light mb-2">
          <div class="col-md-9 text-left m-auto">{{users[index].created_at|formatDate}} | {{users[index].surname}} {{users[index].firstname}} </div>
          <div @click="AdminUser(users[index].id)" class="btn text-white bleu">Admin->User</div>
          </div>
        </div>
      </div>  

      <div class="col-md-6">
        <h4 class=" bleu text-white rounded">Utilisateurs</h4>
        <div v-for="(user2, index) in users" :key="index">
          <div v-if="!users[index].is_admin" class="row col-md-12 ml-auto mr-auto d-flex justify-content-center p-2 bg-light mb-2">
          <div  class="col-md-9 text-left m-auto">{{users[index].created_at|formatDate}} | {{users[index].surname}} {{users[index].firstname}} | {{users[index].email}}</div>
          <div  @click="Useradmin(users[index].id)" type="submit" value="submit" class="btn vert text-white">User->Admin</div>
          </div>
        </div>
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
  created() {
    if(localStorage.getItem('token')=='null'){
        window.location.href = '/'
    }
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
.bleu {
  background-color: #539ee4;
}
.vert {
  background-color: #00c5ad;
}
</style>