//define routes to components//

import HomePage from './components/home/HomePage.vue'
import Tutorials from './components/Huongdan/Tutorials.vue';


export const routes =[
    {path:'/', name:'Home', component: HomePage},
    {path:'/Tutorials', name:'Tutorials',component: Tutorials},
    
]