import { createWebHistory, createRouter } from "vue-router";
import FrontBtn from './src/components/FrontBtn.vue';
import FormCre from './src/components/FormCre.vue';
import FormTab from './src/components/FormTab.vue';
import FormEdit from './src/components/FormEdit.vue';

const routes = [
    {
        path : '/',
        name : "FrontBtn",
        component : FrontBtn
    },
    {
        path : '/Form',
        name : "FormCre",
        component : FormCre
    },
    {
        path : '/list',
        name : "FormTab",
        component : FormTab
    },
    {
        path : '/edit',
        name : "FormEdit",
        component : FormEdit
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;
