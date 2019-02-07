<template>
    <v-fade-transition slot="append-outer">
        <v-progress-circular
            size="24"
            v-if="loading"
            color="info"
            indeterminate></v-progress-circular>
        <v-menu left transition="scale-transition">
            <v-icon slot="activator" size="24">playlist_add</v-icon>

            <v-list>
                <v-list-tile
                v-for="(item, index) in menuData"
                :key="index"
                @click="setValue(item)"
                >
                <v-list-tile-title>{{ item }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>        
    </v-fade-transition>
</template>

<script>
export default {
    props:{
        menuData:{
            type: Array,
            default: () => ({})
        }
    },
    data: () => ({
        loading:false,
    }),
    methods: {
        setValue(value){
            this.$emit('childToParent', value)
        }
    }
}
</script>

<style>

</style>
