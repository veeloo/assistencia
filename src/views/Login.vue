<template>
    <v-container>
        <v-row>
            <v-col>
                <!-- error alert -->
                <v-alert
                    class="d-none"
                    :class="{ 'd-block': alert }"
                    :type="alertType"
                    border="bottom"
                    @click="alertAction()"
                >
                    {{ alertMsg }}
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <form>
                    <v-text-field
                        label="Username"
                        required
                        v-model="loginData.username"
                    ></v-text-field>
                    <v-text-field
                        :type="password"
                        label="Password"
                        v-model="loginData.password"
                        required
                    ></v-text-field>
                    <v-btn
                        color="primary"
                        :loading="loading"
                        :disabled="disable"
                        @click="signIn()"
                        >Login</v-btn
                    >
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loader: null,
            loading: false,
            disable: false,
            password: "password",
            loginData: {
                username: "",
                password: "",
            },
            alert: false,
            alertMsg: "Email or Password must be filled",
            alertType: "error",
        };
    },
    methods: {
        async signIn() {
            // start button loding animation
            this.loading = !this.loader;

            if (
                this.loginData.username === "" &&
                this.loginData.password === ""
            ) {
                this.alert = true;
                this.loading = false;
            } else {
                // clear input
                for (let i in this.loginData) {
                    this.loginData[i] = "";
                }

                // start loading
                const load = new Promise((resolve) => {
                    setTimeout(() => {
                        localStorage.setItem("login_status", "Login Success");
                        resolve("selesai");
                    }, 2000);
                });

                // end of loading
                load.then((res) => {
                    if (res) {
                        this.alert = true;
                        this.alertMsg =
                            "Login success, click here to check your dashboard";
                        this.alertType = "success";

                        this.loading = false;
                        this.disable = true;
                    }
                });
            }
        },
        alertAction() {
            if (this.alertType === "error") {
                this.alert = "true";
                this.alertMsg = `Please finsh your registration 😔`;
                this.alertType = "error";
            } else {
                this.$router.push("/home");
            }
        },
    },
};
</script>

<style></style>
