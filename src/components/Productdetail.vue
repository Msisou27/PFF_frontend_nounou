<template>
    <div>
        <h2 class="m-3 text-left">Détail produit</h2>
        
            <div class="row col-md-11 m-auto ">  
                <div class="row col-md-9" >
                    <div class= "col-md-5 bg-secondary rounded"><!-- eslint-disable -->
                        <img class="col-md-12 image mt-3" :src="prod.image">
                    </div>
                    <div class="col-md-7 border m-0">
                        <h3 class="title text-left mt-1"> {{prod.title}}</h3> 
                        <p class="category text-left pl-3 p-auto">{{prod.category}}</p>
                        <p class="description border"> Description:<br> {{prod.description_long}}</p>
                        <h4 class="price text-left">{{prod.price}} €</h4>
                        <p class="condition text-white">{{prod.used}}</p>
                    </div>
                </div> 

                <div class="border-bottom col-md-3 bg-secondary rounded">               
                    <h5 class="mt-4 mb-5 text-white">CONTACTER LE VENDEUR</h5>
                    <p class="text-white ">Prénom du vendeur: {{users.firstname}}</p> 
                    <p class="text-white">Adresse mail: {{users.email}}</p>                   
                    <p class="text-white">Localisation: {{users.location}}</p>
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
    height: 20rem;
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