<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      persistent
      dark
      floating
      width="260"
      app
    >
      <v-img
        src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
        gradient="to bottom right, rgba(0, 0, 0, 0.33), rgba(25,32,72,.7)"
        height="100%"
      >
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :to="item.to"
            :key="i"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-img>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; ISB 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'apps', title: 'ホーム', to: '/' },
        { icon: 'add_circle_outline', title: 'PJ追加', to: '/pj_add' },
        { icon: 'list', title: 'PJ一覧', to: '/pj_list' }
        // { icon: 'bubble_chart', title: '進捗一覧', to: '/list' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'プロジェクト進捗'
    }
  }
}
</script>
