<template>
  <v-container 
    grid-list-md 
    text-xs-center>
    <v-card>
      <v-card-title>
        <v-spacer/>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="検索"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts.items"
        :search="search"
        :loading="progress"
        class="elevation-1"
        no-data-text="データ読み込み中。。。"
      >
        <v-progress-linear 
          slot="progress" 
          color="blue"
          indeterminate
        />

        <template 
          slot="items"
          slot-scope="props">
          <tr @click="showModal(props.item, openDialog = true)">
            <td>{{ props.item.classification }}</td>
            <td class="text-xs-center">{{ props.item.agreement }}</td>
            <td class="text-xs-center">{{ props.item.orders }}</td>
            <td class="text-xs-center">{{ props.item.users }}</td>
            <td class="text-xs-center">{{ props.item.pj_name }}</td>
            <td class="text-xs-center">{{ props.item.sales }}</td>
            <td class="text-xs-center">{{ props.item.pms }}</td>
            <td class="text-xs-center">{{ props.item.pls }}</td>
            <td class="text-xs-center">{{ props.item.kubun }}</td>
            <td class="text-xs-center">{{ props.item.amount }}</td>
            <td class="text-xs-center">{{ props.item.startdate }}</td>
            <td class="text-xs-center">{{ props.item.enddate }}</td>
          </tr>
        </template>
        <v-alert 
          slot="no-results" 
          :value="true" 
          color="error" 
          icon="warning">
          "{{ search }}"の検索結果はありません。
        </v-alert>
      </v-data-table>
    </v-card>

    <Dialog />

  </v-container>
</template>

<script>
import Dialog from '~/components/Dialog.vue'

import { mapMutations, mapState, mapActions } from 'vuex'
import commonMixin from '~/mixins/const_list'
export default {
  name: 'PjList',
  components: {
    Dialog
  },
  watchQuery: ['search'],
  mixins: [commonMixin],
  data() {
    return {
      search: '',
      progress: false
    }
  },
  computed: {
    ...mapState({
      desserts: state => state.data.pjData
    })
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions({
      execGetItems: 'data/findAll'
    }),
    ...mapMutations({
      toggleModal: 'list/toggleModal'
    }),
    async load() {
      this.progress = true
      await this.execGetItems()
        .then(res => {
          this.progress = false
        })
        .catch(err => {
          console.log(err)
        })
    },

    showModal(item, isDialog) {
      this.toggleModal(isDialog)
    }
  }
}
</script>
