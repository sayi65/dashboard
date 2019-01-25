<template>
    
    <v-card
    color="#26c6da"
    dark
    class="mx-auto"
    max-width="700">

        <v-card-title 
            class="title white--text"
            grid-list-md
            text-xs-center>


            <v-layout 
                row 
                justify-space-between
                align-center>
                      <v-flex 
                      xs3
                      align-center
                      >
        状況({{ item.tittle }})
      </v-flex>
      <v-flex xs3>
        <v-chip
                    v-if="item.status === 0"
                    @input="onClose(item, menu)"
                    color="green">
                    問題なし
                </v-chip>
                <v-chip
                    v-else-if="item.status === 1"
                    @input="onClose(item, menu)"
                    color="red">
                    問題あり
                </v-chip>
                <v-combobox
                    background-color="#26c6da"
                    v-else
                    xs4
                    offset-xs6
                    open-on-clear
                    hide-selected
                    v-model="select"
                    :items="chipsItem"
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



            <!-- <v-flex 
                xs6>
                    状況({{ item.tittle }})
            </v-flex>
            <v-flex 
                xs4
                offset-xs2
                class="text-xs-right">
                <v-chip
                    :close='close'
                    v-if="item.status === 0"
                    @input="onClose(item, menu)"
                    color="green">
                    問題なし
                </v-chip>
                <v-chip
                    :close='close'
                    v-else-if="item.status === 1"
                    @input="onClose(item, menu)"
                    color="red">
                    問題あり
                </v-chip>
                <v-combobox
                    background-color="#26c6da"
                    v-else
                    xs4
                    offset-xs6
                    open-on-clear
                    hide-selected
                    v-model="select"
                    :items="chipsItem"
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
            </v-flex> -->
        </v-card-title>

        <v-card-text class="white">
            <v-textarea
            light
            solo
            :outline='outline'
            :readonly='readonly'
            name="input-7-1"
            class="black--text"
            :value="item.value"
            :hint="hint"
            ></v-textarea>
            <v-flex>
            <v-btn 
              flat
              dark 
              small
              color="indigo"
              class="mx-0"
              @click="toggleBtn(item)"
              outline>
                編集
            </v-btn>

            <v-btn  
              dark 
              small
              depressed
              color="indigo"
              class="mx-0"
              @click="addBtn(item)"
              outline>
                追加
            </v-btn>
            </v-flex>
        </v-card-text>
    </v-card>
</template>

<script>

  export default {
    props:{
        item:{
            type:Object,
            required:false,
            default: () => ({
                    status: 3,
                    tittle: '',
                    value:''
            })
        }
    },
    data: () => ({
     outline:false,
     readonly:true,
     hint: '',
     chipsItem:[
        '問題なし', '問題あり'
     ],
     select:'',
    }),
    methods:{
        toggleBtn(item, event){
          this.close =!this.close
          this.outline =!this.outline
          this.readonly = !this.readonly
          this.hint = this.readonly ? '' : '進捗入力'
          if(item.status === 3){
              this.onSelect(this.select, item)
          } else {
              item.status = 3
              this.select = this.select === 0 ? '問題なし' : '問題あり'
          }

        },
        onClose(item){
            console.log(item)
            if(item.status === 0 || item.status === 1){
                item.status = 3
                if(this.select != ''){
                    this.select = ''
                }
            }
        },
        onSelect(select, item){

            if(select == '問題なし'){
                item.status = 0
            } else if(select == '問題あり'){
                item.status = 1
            }
        }
    },
  }
</script>

<style>
.title{
    height: 72px !important;
    padding: 16px 16px 0 16px !important;
}
.cmb-static-width {
    width: 100px !important;
}
</style>