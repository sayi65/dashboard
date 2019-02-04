export default {
    data () {
        return {
            classification: [ '案件','進捗','その他'],
            agreement: [ '請負','準委任','派遣','保守', '社内', '無償', 'その他'],
            orders: ['問題なし','問題あり','要注意','終了', '受注', 
            '失注','確度A','確度B','確度C','確度L','確度低','未確認','その他'
            ],
            pb_classification: ['問題なし','顧客クレーム','進捗遅れ','納期遅れ', '低品質', 
            '出荷後不具合','要員不足','計画外作業','マイナスProj','金額不足','交渉難航','工数増加','その他'
            ],
            supervision:['1課','2課','3課','4課'],
            kubun:['確定','L'],
            amount:'',
            startdate: new Date().toISOString().substr(0, 10),
            enddate: new Date().toISOString().substr(0, 10),
        }
  }
}