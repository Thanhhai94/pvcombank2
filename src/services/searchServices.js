import db from "../models/index"

const getHDVDailyData = async() => {
    try {
        const KQ = await db.DAILYREPORT.findAll({
        })
        if(KQ.length) {
            return KQ
        } else {
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHDVDailyData:getHDVDailyData
}