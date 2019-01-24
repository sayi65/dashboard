<template>
    
    <v-card
    color="#26c6da"
    dark
    class="mx-auto"
    max-width="700">

        <v-card-title class="title white--text">
            <div class="text-sm-left">
                <v-chip
                    :close='close'
                    v-if="item.status === 0"
                    @input="onClose(item)"
                    color="green">
                    問題なし
                </v-chip>
                <v-chip
                    :close='close'
                    v-else-if="item.status === 1"
                    @input="onClose(item)"
                    color="red">
                    問題あり
                </v-chip>
                <v-menu
                    v-else
                    v-model="showMenu"
                    origin="center">

                    <v-chip
                    slot="activator"
                    ref="chip"
                    close
                    readonly
                    color="red">
                    問題あり
                    </v-chip>

                    <v-list>
                        <v-list-tile
                        v-for="(chips, i) in chipsItem"
                        :key="i"
                        @click="onSelect(chips, item)">
                        <v-list-tile-title>{{ chips }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>
            状況({{ item.tittle }})
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
              flat 
              dark 
              small
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
     close:false,
     outline:false,
     readonly:true,
     hint: '',
     chip :true,
     chipsItem:{
        0: '問題なし', 
        1:'問題あり'
    },
     select:'',
     showMenu: false
    }),
    methods:{
        toggleBtn(item, event){
          this.close =!this.close
          this.outline =!this.outline
          this.readonly = !this.readonly
          this.hint = this.readonly ? '' : '進捗入力'
        },
        onClose(item){
            if(item.status === 0 || item.status === 1){
                item.status = 3
                if(this.select != ''){
                    this.select = ''
                }
            }
            console.log(this.$refs)
            this.showMenu = !this.showMenu
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