const getArrayNHOMCHITIEU = (array) => {
    const KQ = []
    array.map(value => KQ.push(value.NHOM_CHI_TIEU))
    return KQ
}

const getArrayLOAI = (array) => {
    const KQ = []
    array.map(value => KQ.push(value.CODE_LOAI_CHI_TIEU))
    return KQ
}

const groupKQTH = (array1,array2) => {
    let KQ =[]
    for(let i =0 ; i < array1.length; i++) {
        let row ={}
        row.NHOM_CHI_TIEU = array1[i].NHOM_CHI_TIEU
        row.CODE_LOAI_CHI_TIEU = array1[i].CODE_LOAI_CHI_TIEU
        row.CHI_TIEU = array1[i].CHI_TIEU
        row.CHI_TIEU_REF = array1[i].CHI_TIEU_REF
        row.CODE_MAP = array1[i].CODE_MAP
        row.DVT = array1[i].DVT
        row.Amt = array1[i].Amt
        row.KPI = array1[i].KPI
        row.Amt_mtd = 0
        row.KPI_mtd = 0
        for(let u = 0; u < array2.length; u++) {
            if(array2[u].NHOM_CHI_TIEU === array1[i].NHOM_CHI_TIEU && array2[u].CODE_LOAI_CHI_TIEU === array1[i].CODE_LOAI_CHI_TIEU && array2[u].CHI_TIEU === array1[i].CHI_TIEU){
                row.Amt_mtd = array2[u].Amt_mtd
                row.KPI_mtd = array2[u].KPI_mtd
            }
        }
        KQ.push(row)
    }
    return KQ
}

module.exports = {
    getArrayNHOMCHITIEU : getArrayNHOMCHITIEU,
    getArrayLOAI:getArrayLOAI,
    groupKQTH:groupKQTH
}