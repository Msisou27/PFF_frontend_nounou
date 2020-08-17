
import api from "./api"


export default{
// ----------------- [ User ] --------------------
    loginUser(params){
        return api.post('/api/user-login',params)
    }, 
    createUser(params){
        return api.post('/api/create-user',params)
    }, 
    logoutUser(){
        return api.post('/api/user-logout')
    }, 
    recupAllProductsUser(){
        return api.get('api/product-listing-user')
    },
    recupUserDetail(){
        return api.get('api/user-detail')
    },
    modifyUser(params){
        return api.post('api/user-update',params)
    },
// ----------------- [ Admin-user ] -------------- 
    recupAllUser(){
        return api.get('api/user-all')
    },
    updateUserAdmin(params){
        return api.post('api/user-update-admin',params)
    },
 // ------------- [ Annonces-Products ] -----------
    recupAllProducts(){
        return api.get('api/product-listing')
    },
    recupAllProducts2(){
        return api.get('api/product-listing'+this.search)
    },
    recupProduct(slug){
        return api.get('api/product-detail/'+slug)
    },
    createProduct(params){
        return api.post('api/create-product',params)
    },
    deleteProduct(id){
        return api.get('api/delete-product/'+id)
    },
    updateProduct(params){
        return api.post('api/update-product',params)
    }, 
    productSearch(q){
        return api.get('api/product-search/'+q)
    },  
 // ------------- [ Chat- User ] -----------
    sendMessage(params){
        return api.post('api/chat-message',params)
    },
    chatAll(){
        return api.get('api/chat-all')
    }

}