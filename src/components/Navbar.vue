<template>
    <nav>
        <v-toolbar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <router-link :to="{name: 'home'} ">
                    <span>VUE</span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="cerrarSesion">
                <span class="mr-2">Cerrar sesión</span>
                <v-icon>fas fa-address-book</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer
            color="primary"
            dark
            v-model="drawer" 
            app
        >
            <v-layout column align-center mt-5>
                <v-flex>
                    <v-avatar>
                        <img
                            :src="usuario.foto"
                            alt="avatar"
                        >
                    </v-avatar>
                </v-flex>
                <v-flex>
                    <p class="mt-3 white--text">{{usuario.nombre}}</p>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-list>
                <v-list-item 
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.to"
                    link
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data(){
        return{
            drawer: true,
            items: [
                { title: 'Home', icon: 'fas fa-address-card', to: {name:'home'} },
                { title: 'Ingreso', icon: 'fas fa-address-card', to: {name:'ingreso'} },
                { title: 'Admin', icon: 'fas fa-address-card', to: {name:'admin'} },
            ],
        }
    },
    methods:{
    ...mapActions(['cerrarSesion'])
    },
    computed:{
    ...mapState(['usuario'])
    }
}
</script>