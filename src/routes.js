//define routes to components//

import HomePage from "./components/home/HomePage.vue";
import Tutorials from "./components/Huongdan/Tutorials.vue";
import CreateCar from "@/views/Car/CreateCar";
import Detail from "@/views/Car/Detail";
import CarRegister from "./components/CarRegister/CarRegister.vue"

export const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/Tutorials", name: "Tutorials", component: Tutorials },
  { path: "/car/create", name: "car-create", component: CreateCar },
  { path: "/car/detail", name: "car-detail", component: Detail },
  { path: "/CarRegister", name: "car-register", component: CarRegister },
];
