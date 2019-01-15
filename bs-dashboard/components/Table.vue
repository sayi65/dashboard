        <template
            >
        <tr>
            <td>{{ props.item.classification }}</td>
            <td class="text-xs-right">{{ props.item.agreement }}</td>
            <td class="text-xs-right">{{ props.item.orders }}</td>
            <td class="text-xs-right">{{ props.item.users }}</td>
            <td class="text-xs-right">{{ props.item.sales }}</td>
            <td class="text-xs-right">{{ props.item.pms }}</td>
            <td class="text-xs-right">{{ props.item.pls }}</td>
            <td class="text-xs-right">{{ props.item.kubun }}</td>
            <td class="text-xs-right">{{ props.item.amount }}</td>
            <td class="text-xs-right">{{ props.item.pjname }}</td>
            <td class="text-xs-right">{{ props.item.startdate }}</td>
            <td class="text-xs-right">{{ props.item.enddate }}</td>
        </tr>
        </template>

<script>
export default {
    props: {
        desserts: {
            type: Array,
            default() {
                return []
            },
            required: false
        }
    }
    // data () {
    // return {
    //     item: [
    //       {
    //         value: false,
    //         classification: '案件',
    //         agreement: '請負',
    //         orders: '問題なし',
    //         users: '大東実業㈱',
    //         supervision: '4課',
    //         sales: '向山M',
    //         pms: 'Aさん',
    //         pls: 'PAさん',
    //         kubun: '確定',
    //         amount: '100',
    //         pjname: '運行管理システム保守',
    //         startdate: '',
    //         enddate:''
    //       },
    //     ]
    //     }
    // }
}
</script>