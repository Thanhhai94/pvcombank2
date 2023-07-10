const handlerLSDH = (array, KY_HAN, Rptdate) => {
    let KQ = 0
    array.map(value => {
        if(value.KY_HAN.trim() == KY_HAN && Rptdate <= value.To_Date && Rptdate >= value.From_Date){
            KQ = value.Amt
        }
    })
    return KQ
}

module.exports = {
    handlerLSDH: handlerLSDH,
}




     