<template>
  <div v-if="detail == undefined">
  <h1><center>404 NOT FOUND</center></h1>
  </div>
  <div v-else>
  <center>
  <img class="img" :src="getImgSrc(detail.img)" alt="category image" />
</center>
  <h1>Detail {{ detail.nama }}</h1>
  <h4>Harga : {{ detail.harga }}</h4>
  <h4>Deskripsi : {{ detail.des }}</h4>
</div>
</template>
<script>
import { produk } from '@/assets/Produk';


export default {
  props: [
      "id_produk",
      
      
  ],
  setup(props){

    const getImgSrc = (imgfilename) => {
        return '../src/assets/' + imgfilename + '';
      };
      const detail = produk["produk"].find(function(item) {
          return item.id == props.id_produk
          
      });
      
      
      return{
          detail,
          getImgSrc

      }
  }
}
</script>