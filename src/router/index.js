import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import FAQ from "../views/FAQ.vue";
import Login from "../views/Login.vue";
import MyReservation from "../views/MyReservation.vue";
import ReservationForm from "../views/ReservationForm.vue";
import ServiceInfo from "../views/serviceInfo.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/faq", name: "FAQ", component: FAQ },
  { path: "/login", name: "Login", component: Login },
  { path: "/my-reservations", name: "MyReservation", component: MyReservation },
  {
    path: "/serviceinfo",
    name: "ServiceInfo",
    component: ServiceInfo,
  },
  {
    path: "/reservationForm",
    name: "ReservationForm",
    component: ReservationForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
