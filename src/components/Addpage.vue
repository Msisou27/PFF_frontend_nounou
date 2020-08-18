<template>
    <div >
<div class="">
  <form class="form-inline bleu pt-1 pb-1 mb-5 pl-5">
    
      <input v-model="q" class="form-control col-md-3 m-2" @keyup="searchProduct" type="search" placeholder="Search" aria-label="Search">
      <a href="" class="mr-3"><img src="https://img.icons8.com/ios/30/000000/cancel.png"/></a>

      <div class="form-group col-md-4 mr-5">
      <label for="exampleFormControlSelect2" class="mr-2 text-secondary ">Catégories</label>
      <select v-model="key"  @change="onChange($event)" type="text" class="form-control" id="exampleFormControlSelect2" >
        <option>Jeux d'extérieurs</option>
        <option>Jeux d’intérieurs</option>
        <option>Poussettes</option>
        <option>Petit matériel de puériculture</option>
        <option>Lit et couchette</option>
        <option>Produits d’hygiènes</option>
        <option>Produits de sécurité</option>
        </select>
      </div>
      <div class="form-group col-md-3 mr-5">
      <label for="exampleFormControlSelect2" class="mr-2 text-secondary">Condition</label>
      <select v-model="key2"  @change="onChangeCondition($event)" type="text" class="form-control" id="exampleFormControlSelect2" >
        <option>Comme neuf</option>
        <option>Très bon état</option>
        <option>Bon état</option>
        <option>Etat correct</option>
        <option>Fonctionnel</option>
        </select>
      </div>
  </form>
</div>

    <div class="row m-auto">
      
         <div v-for="(product, index) in prod" :key="index" class="col-md-5 border mr-auto ml-auto mb-4">     
           
          <div class="row p-1">
           <div class="col-md-6">
             <div class="image m-auto"></div>
             </div>
           <div class="col-md-6">
             <h5 class="title text-left">{{prod[index].title}}</h5>
             <p class="category text-left pl-2">{{prod[index].category}}</p> 
             <p>{{prod[index].description_short}}</p>  
             
            <div class="row"> 
             <h4 class="price m-auto">{{prod[index].price}} €</h4>
             <p @click="openDetail(prod[index].slug)" class="btn">Afficher le détail</p>
            </div>
             <div class="condition text-white used">{{prod[index].used}}</div> 
             <div class="border mt-2 mb-2 vendeur">Vendeur: <span class="text-center"><br>{{prod[index].author}} - localité: {{prod[index].location}}</span></div>   
                
          </div>
        </div>
          
        </div>
       </div> 
</div>
</template> 

<script>

import nounou from '@/services/nounou'

export default {
    name:'Addpage',
data: ()=>({
    prod:[],
    q:'',
    key:'',
    key2:'',
    key3:''
  }),
  mounted: async function(){
    const res = await nounou.recupAllProducts()
    this.prod = res.data.products
    console.log(this.prod)
  },
  methods: {
     openDetail: function(slug){
          var url = 'Product/'+slug
          location.href=url
      },
      searchProduct: async function(){
        if(this.q.length>2){
        const res = await nounou.productSearch(this.q)
        this.prod = res.data.data
        console.log(res)
        }
      },
      onChange: async function(){
        const res = await nounou.productSearch(this.key)
        this.prod = res.data.data
        console.log(res)
      },
      onChangeCondition: async function(){
        const res = await nounou.productSearch(this.key2)
        this.prod = res.data.data
        console.log(res)
      },
      onChangeLocation: async function(){
        const res = await nounou.productSearch(this.key3)
        this.prod = res.data.data
        console.log(res)
      }
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
    width:130px
}
.used {
height:9%;
}
.image {
  background-color: grey;
  width:15rem;
  height:15rem;
}
.color {
  background-color: #539ee4;
  font-weight: bolder;
}
.search {
  border-bottom:3px solid #539ee4;
}
.vendeur {
  background-color: rgba(83, 158, 228, 0.2);
  font-size:14px;
  font-weight: bolder;
}
.bleu {
  border-bottom: 2px solid #539ee4;
  background-color: rgba(83, 158, 228, 0.2);
}
</style>