import express from "express";
import staffController from "../controller/staffController";
import userController from "../controller/userController";
import jobController from "../controller/jobController";
import reportMonthly from '../controller/reportMonthly'
import reportDailyController from '../controller/reportDailyController'
import reportDailyDashboardControllerHDV from '../controller/reportDailyDashboardControllerHDV'
import reportDailyDashboardControllerTinDung from '../controller/reportDailyDashboardControllerTinDung'
import reportKPIs from '../controller/reportKPIs'
import uploadController from '../controller/uploadController'
import test from '../controller/test'
import multer from "multer";
import thuchiController from "../controller/thuchiController";
const upload = multer({ dest: 'uploads/' });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//   cb(null, __basedir + '/uploads/')
//   },
//   filename: (req, file, cb) => {
//   cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
//   }
//   });

// const upload = multer({storage: storage});
//cho excel


let router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req,res) => {res.redirect("/login")});
  router.get("/login", userController.getLogin);
  router.post("/login",userController.loginPost);
  router.get("/logout", userController.logout);

  router.get("/doimatkhau", userController.getChangePassword)
  router.post("/doimatkhau", userController.postChangePassword)

  router.get("/jobs", jobController.getListJob);
  router.get("/homepage",staffController.getStaffInfo)
  router.get("/DSnhansu",staffController.getListStaff)
  router.get("/DScongviec",jobController.getListJob)
  router.get("/DScongviec/quanly",jobController.getListQuanLy)
  
  // router.post("/DScongviec/quanly",upload.single('csvFile'),uploadController.uploadFile)
  
  //Excel
  router.post("/DScongviec/quanly",upload.single('uploadfile'),uploadController.uploadFile)

  router.get("/DScongviec/quanly/:cifQuanLy",jobController.getListJobQuanLy)
  router.post("/DScongviec/quanly/:cifQuanLy",jobController.postGiaoviec)
  router.get("/DScongviec/quanly/:cifQuanLy/:Rptdate",jobController.getListJobQuanLySelectRptDate)

  router.get("/DScongviec/:Rptdate",jobController.getListJobSelectRptDate)
  router.get("/DScongviec/:Rptdate/:slug_id",jobController.getDetailJob)
  router.post("/DScongviec/:Rptdate",jobController.updateDetailJob)
  
  router.get("/daily",reportDailyController.reportDailyTable)
  // router.get("/daily/search",searchController.getMainSearch)
  router.get("/daily/:date",reportDailyController.reportDailyTableSelect)
  // router.get("/daily/dashboard/hdv",reportDailyDashboardController.reportDailyDashboardHDV)
  router.get("/daily/dashboard/hdv/:date/:select/",reportDailyDashboardControllerHDV.reportDailyDashboardHDVSelect)
  // router.get("/daily/dashboard/hdv/tongkhoi/:date",reportDailyDashboardControllerHDV.reportDailyDashboardHDVSelect)

  router.get("/daily/dashboard/tindung/:date/:select/",reportDailyDashboardControllerTinDung.reportDailyDashboardTDSelect)
  // router.get("/daily/dashboard/tindung/tongkhoi/:date",reportDailyDashboardControllerTinDung.reportDailyDashboardTDSelect)
  
  router.get("/monthly",reportMonthly.getMonthlyDashboard)

  router.get("/KPIs/:KHOI_QL",reportKPIs.getReportKPIs)
  router.get("/KPIs/:KHOI_QL/:NHOM_KH",reportKPIs.getReportKPIs)
  router.get("/KPIs/:KHOI_QL/:NHOM_KH/:selectedMonth",reportKPIs.getReportKPIsSelected)

  router.get("/Noibo/thuchi",thuchiController.getDSChi)


  router.get("/testget", test.test)
  router.get("/test/get", test.testget)


  return app.use("/", router);
};

module.exports = initWebRoutes;
