import staffServices from "../services/StaffService";
import getfromtodate from "../utils/getfromtodate";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService";
import searchServices from '../services/searchServices'
import handlerSearch from "../utils/handlerSearch";


const getMainSearch = async (req,res) => {
    let CIF = req.session.CIF
    let yesterday = getfromtodate.getYesterday()
    let date = dayjs(yesterday).format("YYYY-MM-DD")
    let staff = await staffServices.getStaffInfo(CIF)
    let ruleReportDaily = req.session.ruleReportDaily
    let list = await searchServices.getHDVDailyData()
    let title = Object.keys(list[0].dataValues)

    return res.render('report_daily_table_search',{
        pageTitle: 'Báo cáo tháng',
        staff:staff,
        active_menu_left: 'search',
        date:date,
        ruleReportDaily: ruleReportDaily,
        list:handlerSearch.getlistArray(list,title),
        title: title
    })
}

module.exports = {
    getMainSearch: getMainSearch,
}