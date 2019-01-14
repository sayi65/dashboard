<template>
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
    props: ['item']
}
</script>