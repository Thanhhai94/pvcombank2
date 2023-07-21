import dayjs from "dayjs";

const lastMonth = () => {
    var date = new Date(), y = date.getFullYear(), m = 12, mo = date.getMonth();
    let lastMonth = dayjs(new Date(y,mo+1,0,7,0,0)).format("MM/YYYY")
    return lastMonth
}
const selectMonth = () => {
    var date = new Date(), y = date.getFullYear(), m = 12, mo = date.getMonth();
    let selectMonth = dayjs(new Date(y,mo+1,0,7,0,0)).format("YYYYMMDD")
    return selectMonth
}

const ArrayMonth = (Rptdate) => {
    // Tao mảng là các ngày cuối tháng từ tháng 12 năm trước
    let y = Number(Rptdate.slice(0,4)), m = Number(Rptdate.slice(4,6));
    let last_12 = dayjs(new Date(y-1,12,0,7,0,0)).format("YYYY-MM-DD").toString().replaceAll('-','')
    const month = [last_12]
    for(let i=1; i<m+1;i++){
        month.push(dayjs(new Date(y,i,0,7,0,0)).format("YYYY-MM-DD").toString().replaceAll('-',''))
    }
    return month
}
const CurrentYearMonth = (Rptdate) => {
    let arrayMonth = ArrayMonth(Rptdate) 
    return arrayMonth.slice(1,arrayMonth.length)
}

const getDate =(rptDate) =>{
    let year = rptDate.slice(0,4)
    let month = rptDate.slice(4,6)
    let result =''
    return result = `${month}/${year}`
}

module.exports = {
    lastMonth: lastMonth,
    selectMonth:selectMonth,
    ArrayMonth: ArrayMonth,
    CurrentYearMonth:CurrentYearMonth,
    getDate:getDate
}