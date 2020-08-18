<template>
<div> 
  <div class="row">
    <div class="col-md-9 mt-3">
        <h4 class="bg-white rounded col-md-11 titrechat mt-2 ml-auto mr-auto pt-1">Bienvenue dans le Chat</h4>
        <div class="chat border col-md-11 ml-auto mr-auto mt-4 mb-3 scroller bg-secondary">
            <div v-for="(chatuser,index) in chat" :key="index" class="border bg-white ml-auto mr-auto rounded col-md-10 m-3">
            <p class="text-left text-secondary msg"> <span class="span">{{chat[index].author}}</span> {{chat[index].created_at | formatDate}}</p>
            <p class="text-left m-0">{{chat[index].message}}</p> 
            </div>
        </div>
        <form >   
            <div class="form-row"> 
                <div class="form-group col-md-12"> 
            <input v-model="message" class="form-control col-md-11 ml-auto mr-auto mb-2 input" type="text" id="inputMessage">
            <p @click="upMessage()" type="submit" value="submit" class="btn text-white perso ml-auto mr-auto mb-3">Envoyer votre message </p>   
                </div>
            </div>
        </form> 
    </div> 

    <div class="col-md-3 mt-4">
        <div class="border mr-4">test</div>
    </div>
  </div>
</div>
</template>

<script>

import nounou from '@/services/nounou'

export default {
    name:'Test',
    data: ()=>({ 
        prod:[],
        message:'',
        chat:''
    }),
    created() {
    if(localStorage.getItem('token')=='null'){
        window.location.href = '/'
        }
    },     
    mounted: async function () { 
  
    const resp = await nounou.chatAll()
    this.chat = resp.data
    console.log(this.chat)

    },
    methods: {
    upMessage: async function(){
        
        var params = {
            message: this.message,
        }
        console.log(params);
        let res = await nounou.sendMessage(params);
        // location.href = '/Profil';
        location.reload();
        console.log(res); 
     }
    },
}
</script>
<style scoped>
    .perso {
  background-color: #00c5ad;  
}
.chat {
    border-radius:10px;
}
.scroller {
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    scrollbar-color: #00c5ad #539ee4;
    scrollbar-width: thin;
}
.msg {
    font-size: 12px;
    font-weight: bolder;
}
.input {
    border-bottom: 2px solid #539ee4;
    color:#539ee4;
}
.span {
    color: white;
    background-color:#539ee4 ;
    font-weight: bolder;
    border-radius: 15px;
    margin:auto;
    padding-left:1%;
    padding-right:1%;
}
.titrechat {
    border-top:2px solid #539ee4;
}
</style>