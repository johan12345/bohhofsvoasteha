import Vue from 'vue'
import VueRouter from 'vue-router'
import StationSelection from "../views/StationSelection";
import PlatformSelection from "../views/PlatformSelection";
import TrainSelection from "../views/TrainSelection";
import PlatformView from "../views/PlatformView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Select station',
    component: StationSelection
  },
  {
    path: '/:station',
    name: 'Select platform',
    component: PlatformSelection
  },
  {
    path: '/:station/:platform',
    name: 'Select train',
    component: TrainSelection
  },
  {
    path: '/:station/:platform/:train',
    name: 'Platform View',
    component: PlatformView
  }
]

const router = new VueRouter({
  routes
})

export default router
