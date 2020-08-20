<template>
    <div>
        <h2 class="m-3">Détail produit</h2>
        
          
            <div  class="row col-md-10 border m-auto">
                <div>
                <img class="image m-auto p-2" src="https://via.placeholder.com/455x400" alt=""></div>
                <div class="col-md-7">
                <h3 class="title text-left mt-1"> {{prod.title}}</h3> 
                <p class="category text-left pl-3">{{prod.category}}</p>
                <p class="description border"> Descritpion:<br> {{prod.description_long}}</p>
                <h4 class="price text-left">{{prod.price}} €</h4>
                <p class="condition text-white">{{prod.used}}</p>
                </div>
            </div> 
            <div class=" col-md-10 ml-auto mr-auto mt-4">
              <div class="col-md-12 row">
                  <div class="col-md-2 ml-auto">
                    <img src="@/assets/mail.jpg" width="100%" alt="">
                  </div>
                  <div class="col-md-3 pt-3 border-left">
                    <h5 class="border-bottom t pb-2">CONTACTER LE VENDEUR</h5>
                    <p>Prénom du vendeur: {{users.firstname}}</p> 
                    <p>Adresse mail: {{users.email}}</p>                   
                    <p>Localisation: {{users.location}}</p>
                 </div>
             </div>   
            </div>       
   
</div>
</template>

<script>

import nounou from '@/services/nounou'

export default {
    name:'Productdetail',
    data: ()=>({
        prod:[],
        users:[],
        message:'',
        chat:''
    }),
    
    mounted: async function () { 
    const res = await nounou.recupProduct(this.$route.params.slug)
    this.prod = res.data.data
    this.users = res.data.user
    console.log(this.prod)
    console.log(res.data)
    // const resp = await nounou.recupAllUser()
    // this.users =resp.data
    // console.log(this.users)

    },
    methods: {
    
    },
    
}
</script>

<style scoped>
.category {
    color:white;
    background-color: #539ee4;
    border-radius: 20px; 
}
.title {
    font-weight: bolder;
}
.price {
   font-weight: bolder; 
}
.description {
    height: 180px;
}
.condition {
    background-color: #00c5ad;
    border-radius: 20px;
    width:150px
}
.image {
    width:100%;
    height: 23rem;
}
.nav-pills > li > a.active {
    background-color: #539ee4!important;
    color:white!important;
}
.ligne {
    height: 20px;
}
.btnperso {
    background-color: #539ee4;
    color: white;
    border-radius:10px; 
}
.perso {
  background-color: #00c5ad;  
}
.chat {
    border-radius:10px;
}
.scroller {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    scrollbar-color: #00c5ad #539ee4;
    scrollbar-width: thin;
}
.msg {
    font-size: 12px;
    font-weight: bolder;
}
.t {
    color: #539ee4;
}
</style>