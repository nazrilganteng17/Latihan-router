<template>
  <h1>kategori</h1>
  <div class="flex-container">
      <div v-for="kategori in cek" :key="kategori.id" class="card">
      <img class="img" :src="getImgSrc(kategori.img)" alt="category image" />
      <router-link class="container" :to="{ name : 'DetailKategori', params:{id_kategori : kategori.id}}">
          <h4>{{ kategori.namakategori }}</h4>
          <h4>{{ kategori.id }}</h4>
      </router-link>
  </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/Kategori';

export default{
  setup(props,context){

      const cek = reactive(kategori["kategori"]);


      const getImgSrc = (imgfilename) => {
        return '../src/assets/' + imgfilename + '';
      };

      onMounted(() => {
          context.emit("id-menu",5)
      });

      return{
          cek,
          getImgSrc
      }
  }
}
</script>
<style scoped>
.flex-container {
   text-align: center; 
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
.img {
  width: 200px;
}
</style>