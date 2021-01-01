<template>
    <v-container>
        <v-row>
            <v-col>
                <div>WELCOME BACK</div>
                <div class="title">
                    {{ nama }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            nama: "christian",
        };
    },
};
</script>

<style></style>
