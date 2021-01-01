<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Assistencia
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-2">
                        online absenteeism
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item link to="/home">
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/about">
                    <v-list-item-content>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/">
                    <v-list-item-content>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="toogle()"></v-app-bar-nav-icon>
            <v-toolbar-title>Assistencia Dashboard</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            disable: false,
        };
    },
    methods: {
        toogle() {
            this.drawer = !this.drawer;
        },
        doSomething() {
            this.disable = false;
        },
    },
};
</script>
