<template>
    <v-container 
      grid-list-md 
      text-xs-center>

      <v-subheader>
        プロジェクト進捗一覧
      </v-subheader>
      <v-flex xs12>
        <div>
          <v-tabs
            v-model="active"
            color="cyan"
            dark
            slider-color="yellow">
            <v-tab
              v-for="n in supervisions"
              :key="n"
              v-model="tab"
              ripple>
              {{ n }}
            </v-tab>

              <v-tab-item 
                v-for="n in supervisions"
                :key="n">
                <v-card flat>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="検索"
                      single-line
                      hide-details>
                    </v-text-field>
                  </v-card-title>

                  <v-expansion-panel 
                    popout
                    v-model="panel"
                    expand>
                    <v-expansion-panel-content
                      v-for="(date,i) in dates"
                      @click="test(i)"
                      :key="i">

                      <div slot="header" >
                        {{ date }}
                      </div>

                      <v-data-table
                      :headers="headers"
                      :loading="progress"
                      :items="desserts"
                      :search="search"
                      class="elevation-1">

                        <v-progress-linear 
                          slot="progress" 
                          color="blue" 
                          indeterminate></v-progress-linear>
            
                        <template 
                          slot="items" 
                          slot-scope="props">
                          <tr @click="showModal(props.item, openDialog = true)">
                            <td class="text-xs-left">{{ props.item.users }}</td>
                            <td class="text-xs-left">
                              <nuxt-link
                                @click.native="stop"
                                :to="{name: 'pj_list' ,  params: { search: props.item.pj_name} }">
                                {{ props.item.pj_name }}
                              </nuxt-link>
                            </td>
                            <td class="text-xs-left">{{ props.item.pms }}</td>
                            <td class="text-xs-left">{{ props.item.pls }}</td>
                            <td class="text-xs-left">{{ props.item.startdate }}</td>
                            <td class="text-xs-left">{{ props.item.enddate }}</td>
                          </tr>
                        </template>
                      </v-data-table>      
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-flex>
      <Dialog />
    </v-container>
</template>

<script>
import Dialog from '~/components/Dialog.vue'

import { mapMutations, mapGetters, mapActions } from 'vuex'

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

  export default {
    name: 'progress-list',
    components: {
        Dialog
    },
    data () {
      return {
        dialog: false,
        active: null,
        search: '',
        tab: null,
        progress: false,
        panel:[],
        supervisions: ['1課','2課','3課','4課'],
        headers: [
          { text: 'ユーザ', value: 'users' },
          { text: '業務名/内容', value: 'pjname' },
          { text: 'PM', value: 'pms' },
          { text: 'PL', value: 'pls' },
          { text: '開始時期', value: 'startdate' },
          { text: '終了時期', value: 'enddate' },
        ],
        dates:[
          '2019-01',
          '2018-12',
          '2018-11',
          '2018-10',
          '2018-09'
        ],
      }
    },
    computed: {
      ...mapGetters({
        desserts: 'statusData/getPjData',
      }),
    },
    mounted() {
      this.loadData();
    },
    methods:{
        ...mapActions({
          execCateList: 'statusData/findCateList'
        }),
        ...mapMutations({ toggleModal :'list/toggleModal'}),
        loadData(){
            this.execCateList().then(res => {

            }).catch(err => {
                console.log(err)
            })
        },
        showModal(item, isDialog){
          this.toggleModal(isDialog)
        },
        stop(e,isDialog){
          e.preventDefault()
          this.toggleModal(isDialog = false)
          
        },
        test(value){
          console.log(value)
        }


    }
  }
</script>

