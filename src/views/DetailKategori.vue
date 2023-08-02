<template>
    <div class="flex-container">
        <div v-for="produk in data" :key="produk.id" class="card">
        <img class="img" :src="getImgSrc(produk.img)" alt="category image" />
        <router-link class="container" :to="{ name : 'Detail', params:{id_produk : produk.id}}">
            <h4>{{produk.nama }}</h4>
        </router-link>
    </div>
    </div>
  </template>
<script>
import { produk } from '../assets/Produk';
import { kategori } from '@/assets/Kategori';


export default {
    props: [
        "id_kategori",
    ],
    setup(props){
        const detail = kategori["kategori"].find(function(item) {
            return item.id == props.id_kategori
            
        });
        const data = produk["produk"].filter(function(a){
            return detail.id == a.id_kategori
            
        });
        const getImgSrc = (imgfilename) => {
        return '../src/assets/' + imgfilename + '';
      };
        
        
        return{
            detail,
            data,
            getImgSrc
            

        }
    }
}
</script>

<style scoped>
.flex-container {
   display: flex;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0, 0, 0.2);
}
.container {
    padding: 2px 16px;
}
</style>