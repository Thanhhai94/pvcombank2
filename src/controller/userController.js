import UserServices from "../services/UserService";
import staffServices from "../services/StaffService";
import JobService from "../services/JobService"
import dayjs from "dayjs";
import handleListJob from "../utils/handleListJob";
import getfromtodate from "../utils/getfromtodate";
import handlerDateTime from "../utils/handlerDateTime"


const getLogin = async (req,res) => {
  let allUser = await UserServices.getAllUser()
  let listAccount = allUser.map(result => result.username)
  if(req.session.CIF)
  {
    return res.redirect('/homepage')
  }
  res.render('login', {
    pageTitle: 'LOGIN',
    listAccount: JSON.stringify(listAccount),
    span: ''
  })
}

const loginPost = async (req, res) => {
  let yesterday = getfromtodate.getYesterday()
  let dateUrl = dayjs(yesterday).format("YYYY-MM-DD")
  let userName = req.body.username
  let password = req.body.password
  let user = await UserServices.getUser(userName);
  if(user && user.password == password){
    req.session.CIF = user.CIF;
    req.session.ruleReportDaily = user.Rule_Report_Daily
    req.session.Rptdate = '20230701'
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let Rptdate = dayjs(new Date(y,m,1)).format("YYYYMMDD")
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF);
    let listjob = await JobService.getListJob(CIF,Rptdate);
    return res.render('homepage', {
      Rptdate: handlerDateTime.selectMonth(),
      dateUrl: dateUrl,
      staff: staff,
      pageTitle: 'HomePage',
      listjob: listjob,
      countStatusJob: handleListJob.handleCountStatusJob(listjob),
      TyleStatusJob: JSON.stringify(handleListJob.handleTyleStatusJob(listjob))
    })
  } else {
    let allUser = await UserServices.getAllUser()
    let listAccount = allUser.map(result => result.username)
    res.render('login', {
      pageTitle: 'LOGIN',
      listAccount: JSON.stringify(listAccount),
      span: 'Mật khẩu không đúng'
    })
  }
};

const logout = (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/login')
  })
}

const getChangePassword = async (req,res) => {
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF);
  let user = await UserServices.getUserByCif(CIF)
  res.render('password', {
    pageTitle: 'Đổi mật khẩu',
    staff: staff,
    user: user
  })
}

const postChangePassword = async (req,res) => {
  let data = req.body
  console.log('data',data)
  let CIF = req.session.CIF;
  let user = await UserServices.updatePassword(CIF,data)
  console.log('user',user)
  if(user) {
    return res.redirect('/homepage')
  }
}

module.exports = {
  getLogin: getLogin,
  loginPost: loginPost,
  logout: logout,
  getChangePassword:getChangePassword,
  postChangePassword:postChangePassword
};
