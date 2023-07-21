import staffServices from "../services/StaffService";
import handlerDateTime from "../utils/handlerDateTime"

const getMonthlyDashboard = async (req,res) => {
    let currentMonth = handlerDateTime.selectMonth()
    let url = req.query
    console.log(url)
    let homepage = (url.Loaichitieu == undefined)?'homepage':'false'
    console.log('homepage',homepage)
    let Loaichitieu = url.Loaichitieu ? url.Loaichitieu: ''
    let KhoiQL =  url.KhoiQL ? url.KhoiQL: ''
    let NhomKH = url.NhomKH ? url.NhomKH: ''
    let Rptdate = (url.Rptdate)? url.Rptdate: currentMonth
    let CIF = req.session.CIF
    let ruleReportDaily = req.session.ruleReportDaily
    let Kyhan = url.Kyhan
    let staff = await staffServices.getStaffInfo(CIF)
    let ArrayMonth = handlerDateTime.ArrayMonth(Rptdate)
    let currentYearMonth = handlerDateTime.CurrentYearMonth(Rptdate)

    if(homepage=='homepage') {
        return res.render('report_monthly',{
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:'All',
            Rptdate: Rptdate,
            ruleReportDaily:ruleReportDaily,
            homepage: homepage
        })
    }

    if(Loaichitieu=='HDV' && KhoiQL == 'TOAN_HANG'){
        let tang_truong_BQ_xAxis = ['Toàn hàng','KHCN','KHDN','KHDNL']
        let tang_truong_cuoi_ky_xAxis = ['Toàn hàng','KHCN','KHDN','KHDNL']
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }

    if(Loaichitieu=='HDV' && KhoiQL == 'KHCN'){
        let tang_truong_BQ_xAxis = currentYearMonth
        let tang_truong_cuoi_ky_xAxis = currentYearMonth
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='HDV' && KhoiQL == 'KHDN' && NhomKH=='TONG_KHOI'){
        let tang_truong_BQ_xAxis = ['KHDN','Core','Upper']
        let tang_truong_cuoi_ky_xAxis = ['KHDN','Core','Upper']
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }

    if(Loaichitieu=='HDV' && KhoiQL == 'KHDNL' && NhomKH=='TONG_KHOI'){
        let tang_truong_BQ_xAxis = ['KHDNL','PVN','Non-PVN']
        let tang_truong_cuoi_ky_xAxis = ['KHDNL','PVN','Non-PVN']
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='HDV' && KhoiQL == 'KHDN' && NhomKH == 'Core' || NhomKH == 'Upper'){
        let tang_truong_BQ_xAxis = currentYearMonth
        let tang_truong_cuoi_ky_xAxis = currentYearMonth
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='HDV' && KhoiQL == 'KHDNL' && NhomKH == 'PVN' || NhomKH == 'Non_PVN'){
        let tang_truong_BQ_xAxis = currentYearMonth
        let tang_truong_cuoi_ky_xAxis = currentYearMonth
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }

    //TINDUNG
    if(Loaichitieu=='TIN_DUNG' && KhoiQL == 'TOAN_HANG'){
        let tang_truong_BQ_xAxis = ['Toàn hàng','KHCN','KHDN','KHDNL']
        let tang_truong_cuoi_ky_xAxis = ['Toàn hàng','KHCN','KHDN','KHDNL']
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }

    if(Loaichitieu=='TIN_DUNG' && KhoiQL == 'KHCN'){
        let tang_truong_BQ_xAxis = currentYearMonth
        let tang_truong_cuoi_ky_xAxis = currentYearMonth
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='TIN_DUNG' && KhoiQL == 'KHDN' && NhomKH=='TONG_KHOI'){
        let tang_truong_BQ_xAxis = ['KHDN','Core','Upper']
        let tang_truong_cuoi_ky_xAxis = ['KHDN','Core','Upper']
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }

    if(Loaichitieu=='TIN_DUNG' && KhoiQL == 'KHDNL' && NhomKH=='TONG_KHOI'){
        let tang_truong_BQ_xAxis = ['KHDNL','PVN','Non-PVN']
        let tang_truong_cuoi_ky_xAxis = ['KHDNL','PVN','Non-PVN']
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='TIN_DUNG' && KhoiQL == 'KHDN' && NhomKH == 'Core' || NhomKH == 'Upper'){
        let tang_truong_BQ_xAxis = currentYearMonth
        let tang_truong_cuoi_ky_xAxis = currentYearMonth
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='TIN_DUNG' && KhoiQL == 'KHDNL' && NhomKH == 'PVN' || NhomKH == 'Non_PVN'){
        let tang_truong_BQ_xAxis = currentYearMonth
        let tang_truong_cuoi_ky_xAxis = currentYearMonth
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            tang_truong_BQ_xAxis: JSON.stringify(tang_truong_BQ_xAxis),
            tang_truong_cuoi_ky_xAxis: JSON.stringify(tang_truong_cuoi_ky_xAxis),
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }
    if(Loaichitieu=='Khach_hang'){
        
        return res.render('report_monthly', {
            homepage: homepage,
            pageTitle: 'Báo cáo Monthly',
            staff: staff,
            Kyhan:Kyhan,
            Rptdate: Rptdate,
            RptdateTitle: handlerDateTime.getDate(Rptdate),
            Loaichitieu: Loaichitieu,
            KhoiQL: KhoiQL,
            NhomKH: NhomKH,
            ruleReportDaily:ruleReportDaily,
            ArrayMonth : JSON.stringify(ArrayMonth),
            currentYearMonth: JSON.stringify(currentYearMonth)
        })
    }



    return res.render('report_monthly', {
        homepage: homepage,
        pageTitle: 'Báo cáo Monthly',
        staff: staff,
        Kyhan:Kyhan,
        Rptdate: Rptdate,
        RptdateTitle: handlerDateTime.getDate(Rptdate),
        Loaichitieu: url.Loaichitieu? url.Loaichitieu: '',
        KhoiQL: url.KhoiQL? url.KhoiQL: '',
        NhomKH: url.NhomKH? url.NhomKH: '',
        ruleReportDaily:ruleReportDaily
    })
}
module.exports = {
    getMonthlyDashboard:getMonthlyDashboard
}