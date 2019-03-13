<template>
    
  <v-card
    color="#ba68c8"
    dark
    class="mx-auto"
    max-width="700">

    <v-card-title 
      class="purple lighten-2"
      grid-list-md
      text-xs-center>

      <v-layout 
        row 
        justify-space-between
        align-center>

        <v-flex 
          xs3
          align-center>
          状況({{ item.tittle }})
        </v-flex>

        <v-flex 
          xs5 
          md4 
          lg3 
          xl2 
          sm4 
          align-center 
          style="padding">
          <v-chip
            v-if="item.status === 0"
            color="green">
            問題なし
          </v-chip>
          <v-chip
            v-else-if="item.status === 1"
            color="red">
            問題あり
          </v-chip>

          <v-combobox
            v-else
            v-model="select"
            :items="chipsItem"
            background-color="#ba68c8"
            xs3
            offset-xs6
            open-on-clear
            hide-selected
            class="cmb-static-width"
            chips>
            <template 
              slot="selection" 
              slot-scope="data">
              <v-chip
                :selected="data.selected"
                :color="select == '問題なし' ? 'green' : 'red'"
              >
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>
        </v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text class="white">
      <v-textarea
        :outline="outline"
        :readonly="readonly"
        :value="item.value"
        :hint="hint"
        light
        solo
        name="input-7-1"
        class="black--text"
      />
      <v-layout 
        row 
        wrap>
        <v-flex xs6>
          <v-btn 
            v-if="isEdit == true"
            flat
            dark 
            small
            color="indigo"
            class="mx-0"
            outline
            @click="toggleBtn(item)">
            編集
          </v-btn>
          <v-btn 
            v-else
            flat
            dark 
            small
            color="indigo"
            class="mx-0"
            outline
            @click="addBtn(item)">
            追加
          </v-btn>
        </v-flex>
        <v-flex 
          v-if="item.isNew == true" 
          xs6 
          class="text-xs-right">
          <v-icon 
            color="red accent-3" 
            large>fiber_new</v-icon>
        </v-flex>
      </v-layout>
    </v-card-text>
        
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({
        status: 3,
        tittle: '',
        value: '',
        isNew: false
      })
    }
  },
  data: () => ({
    outline: false,
    readonly: true,
    isEdit: true,
    hint: '',
    chipsItem: ['問題なし', '問題あり'],
    select: ''
  }),
  methods: {
    toggleBtn(item, event) {
      this.outline = !this.outline
      this.readonly = !this.readonly
      this.isEdit = !this.isEdit
      this.hint = this.readonly ? '' : '進捗入力'
      if (item.status === 3) {
        this.onSelect(this.select, item)
      } else {
        item.status = 3
        this.select = this.select === 0 ? '問題なし' : '問題あり'
      }

      this.$emit('set', false)
    },
    addBtn(item, event) {
      this.outline = !this.outline
      this.readonly = !this.readonly
      this.isEdit = !this.isEdit
      this.onSelect(this.select, item)
      item.isNew = false
      this.$emit('set', true)
    },
    onSelect(select, item) {
      if (select == '問題なし') {
        item.status = 0
      } else if (select == '問題あり') {
        item.status = 1
      }
    }
  }
}
</script>

<style>
.title {
  height: 72px !important;
  padding: 16px 16px 0 16px !important;
}
.cmb-static-width {
  width: 100px !important;
  padding: 0px !important;
  margin-bottom: -26px !important;
}
</style>
