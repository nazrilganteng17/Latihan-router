import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue"
import Produk from "@/views/Produk.vue"
import Detail from "@/views/Detail.vue"
import Kategori from "@/views/Kategori.vue"
import DetailKategori from "@/views/DetailKategori.vue"
import notfound from '@/views/notfound.vue'
const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
    
  },
  {
    path: "/:patchMatch(.*)*",
    name: "NotFound",
    component: notfound,
    
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;