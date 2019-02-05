<template>
    <v-fade-transition>
        <v-progress-circular
            size="24"
            v-if="iconloading"
            color="info"
            indeterminate></v-progress-circular>
        <v-menu bottom left transition="scale-transition">
            <v-icon slot="activator" size="24">playlist_add</v-icon>
            <v-list>
                <v-list-tile
                v-for="(item, index) in items"
                :key="index"
                @click="test(index)"
                >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>        
    </v-fade-transition>
</template>

<script>
export default {
    data: () => ({
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
    methods: {
        test(idx){
            console.log(idx)
        }
    }
}
</script>

<style>

</style>
