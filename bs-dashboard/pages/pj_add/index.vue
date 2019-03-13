<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step 
        :complete="e1 > 1"
        editable 
        step="1">業務進捗</v-stepper-step>

      <v-divider/>

      <v-stepper-step 
        :complete="e1 > 2" 
        editable 
        step="2">業務内容</v-stepper-step>

      <v-divider/>

      <v-stepper-step 
        editable 
        step="3">金額</v-stepper-step>
    </v-stepper-header>



    <v-stepper-items v-if="!loading">
      <v-stepper-content 
        step="1" 
        style="height:500px">
        <v-card
          ref="form"
          style="height:360px"
          class="mb-5">
          <v-card-text>
            <v-select
              ref="区分"
              :rules="[() => !!classification || '必須項目です。']"
              :items="classification"
              v-model="createBsProject.classification"
              label="区分"
              box
              outline
              color="white"
              item-text="name"
              placeholder="選択してください。"
              required/>
            <v-select
              ref="請負"
              :rules="[() => !!agreement || '必須項目です。']"
              :items="agreement"
              v-model="createBsProject.agreement"
              box
              outline
              color="white"
              label="請負"
              placeholder="選択してください。"
              required/>
            <v-select
              ref="状況"
              :rules="[() => !!orders || '必須項目です。']"
              :items="orders"
              v-model="createBsProject.orders"
              box
              outline
              color="white"
              label="状況"
              placeholder="選択してください。"
              required/>
            <v-select
              ref="問題区分"
              :rules="[() => !!pb_classification || '必須項目です。']"
              :items="pb_classification"
              v-model="createBsProject.pb_classification"
              box
              outline
              color="white"
              label="問題区分"
              placeholder="選択してください。"
              required/>
          </v-card-text>
        </v-card>
         
        <v-fab-transition>
          <v-btn
            color="pink"
            dark
            absolute
            right
            fab
            @click="e1 = 2">
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-stepper-content>

      <v-stepper-content 
        step="2" 
        style="height:500px">
        <v-card
          ref="form"
          style="height:360px"
          class="mb-5">
          <v-card-text>
            <v-text-field
              ref="users"
              :rules="[
                () => !!createBsProject.users || '必須項目です。',
                () => !!createBsProject.users && createBsProject.users.length <= 150 || '業務名/内容を150文字以内に入力してください。'
              ]"
              v-model="createBsProject.users"
              counter="150"
              label="ユーザ"
              clearable
              outline
              required>
              <MenuList 
                slot="append" 
                :menu-data="menuUsersData" 
                @childToParent="onChildClick" />
                 
            </v-text-field>
            <v-text-field
              ref="address"
              :rules="[
                () => !!createBsProject.pj_name || '必須項目です。',
                () => !!createBsProject.pj_name && createBsProject.pj_name.length <= 150 || '業務名/内容を150文字以内に入力してください。'
              ]"
              v-model="createBsProject.pj_name"
              label="業務名/内容"
              counter="150"
              clearable
              outline
              required>
                
              <MenuList 
                slot="append" 
                :menu-data="menuPJData" 
                @childToParent="onPjClick" />
            </v-text-field>
            <v-layout 
              align-center 
              justify-center 
              row 
              fill-height 
              wrap>
              <v-flex 
                xs12 
                sm6>
                <v-select
                  ref="主菅"
                  :rules="[() => !!createBsProject.supervision || '必須項目です。']"
                  :items="supervision"
                  v-model="createBsProject.supervision"
                  label="主菅"
                  color="white"
                  box
                  outline
                  placeholder="選択してください。"
                  required/>
              </v-flex>
              <v-flex 
                xs12 
                sm6>
                <v-text-field
                  ref="営業"
                  :rules="[() => !!createBsProject.sales || '必須項目です。']"
                  v-model="createBsProject.sales"
                  label="営業"
                  item-text="name"
                  outline
                  clearable
                  counter="50"
                  required>
                    
                  <MenuList 
                    slot="append" 
                    :menu-data="menuSalesData" 
                    @childToParent="onSalesClick" />
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout 
              align-center 
              justify-center 
              row 
              fill-height 
              wrap>
              <v-flex 
                xs12 
                sm6>
                <v-text-field
                  ref="PM"
                  :rules="[() => !!createBsProject.pms || '必須項目です。']"
                  v-model="createBsProject.pms"
                  label="PM"
                  outline
                  clearable
                  counter="50"
                  required>
                    
                  <MenuList 
                    slot="append" 
                    :menu-data="menuPMData" 
                    @childToParent="onPMClick" />
                </v-text-field>
              </v-flex>
              <v-flex 
                xs12 
                sm6>
                <v-text-field
                  ref="PL"
                  :rules="[() => !!createBsProject.pls || '必須項目です。']"
                  v-model="createBsProject.pls"
                  label="PL"
                  outline
                  clearable
                  counter="50"
                  required>
                    
                  <MenuList 
                    slot="append" 
                    :menu-data="menuPLData" 
                    @childToParent="onPLClick" />
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-fab-transition>
          <v-btn
            color="pink"
            dark
            absolute
            left
            fab
            @click="e1 = 1">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-fab-transition>

        <v-fab-transition>
          <v-btn
            color="pink"
            dark
            absolute
            right
            fab
            @click="e1 = 3">
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-stepper-content>

      <v-stepper-content 
        step="3" 
        style="height:500px">
        <v-card
          ref="form"
          style="height:360px"
          class="mb-5">
          <v-card-text>

            <v-layout 
              row 
              wrap>
              <v-flex 
                xs11 
                sm5>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="startmenu"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="createBsProject.startdate"
                    clearable
                    label="開始時期"
                    prepend-icon="event"
                    readonly
                  />
                  <v-date-picker
                    v-model="createBsProject.startdate"
                    type="month"
                    no-title
                    locale="jp"
                    @input="startmenu = false"
                  />
                </v-menu>
              </v-flex>
              <v-spacer/>
              <v-flex 
                xs11 
                sm5>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="endmenu"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px">
                  <v-text-field
                    slot="activator"
                    v-model="createBsProject.enddate"
                    clearable
                    label="終了時期"
                    prepend-icon="event"
                    readonly
                  />
                  <v-date-picker 
                    v-model="createBsProject.enddate" 
                    type="month" 
                    no-title
                    locale="jp"
                    @input="endmenu = false"/>
                </v-menu>
              </v-flex>
            </v-layout>

            <v-select
              ref="金額区分"
              :rules="[() => !!kubun || '必須項目です。']"
              :items="kubun"
              v-model="createBsProject.kubun"
              box
              outline
              color="white"
              label="金額区分"
              placeholder="選択してください。"
              required/>
            <v-text-field
              ref="amount"
              v-model="createBsProject.amount"
              label="金額"
              prefix="￥"
              outline
              type="number"
              required/>  
          </v-card-text>
        </v-card>
        <v-fab-transition>
          <v-btn
            color="pink"
            dark
            absolute
            left
            fab
            @click="e1 = 2">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-fab-transition>

        <v-btn
          color="primary"
          right
          absolute
          fab
          type="submit"
          @click="save">
          保存
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>

    <div 
      v-if="loading" 
      class="text-xs-center">
      <v-progress-circular
        :size="50"
        color="blue"
        indeterminate/>
    </div>
  </v-stepper>
</template>

<script>
import MenuList from '~/components/MenuList.vue'
import commonMixin from '~/mixins/const_add'
import 'moment/locale/ja'
import moment from 'moment'
import { uuid } from 'vue-uuid'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    MenuList
  },
  mixins: [commonMixin],
  data() {
    return {
      e1: 0,
      loading: false,
      startmenu: false,
      endmenu: false,
      createBsProject: {
        agreement: '',
        amount: 0,
        classification: '',
        enddate: moment()
          .toISOString()
          .substr(0, 7),
        kubun: '',
        orders: '',
        pb_classification: '',
        pj_name: '',
        pls: '',
        pms: '',
        sales: '',
        startdate: moment()
          .toISOString()
          .substr(0, 7),
        supervision: '',
        users: '',
        projectId: uuid.v4()
      }
    }
  },
  computed: {
    ...mapGetters({
      menuUsersData: 'data/getUserData',
      menuPJData: 'data/getPjData',
      menuSalesData: 'data/getSalesData',
      menuPMData: 'data/getPMData',
      menuPLData: 'data/getPLData'
    })
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      execMenuList: 'data/findMenuList',
      execSaveDatas: 'data/saveData'
    }),
    loadData() {
      this.execMenuList()
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    },
    onChildClick(users) {
      this.createBsProject.users = users
    },
    onPjClick(value) {
      this.createBsProject.pj_name = value
    },
    onSalesClick(value) {
      this.createBsProject.sales = value
    },
    onPMClick(value) {
      this.createBsProject.pms = value
    },
    onPLClick(value) {
      this.createBsProject.pls = value
    },
    save() {
      //TODO 保存処理
      this.loading = true
      this.execSaveDatas(this.createBsProject)
        .then(res => {
          this.loading = false
          this.createBsProject.classification = ''
          this.createBsProject.agreement = ''
          this.createBsProject.orders = ''
          this.createBsProject.pb_classification = ''
          this.createBsProject.users = ''
          this.createBsProject.pj_name = ''
          this.createBsProject.supervision = ''
          this.createBsProject.sales = ''
          this.createBsProject.pms = ''
          this.createBsProject.pls = ''
          this.createBsProject.startdate = moment()
            .toISOString()
            .substr(0, 7)
          this.createBsProject.enddate = moment()
            .toISOString()
            .substr(0, 7)
          this.createBsProject.kubun = ''
          this.createBsProject.amount = 0
          this.e1 = 1
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
