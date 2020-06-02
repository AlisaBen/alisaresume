// pages/index/index.js
// 模型层
Page({

  /**
   * 页面的初始数据
   * 页面的宽度和高度
   */
  data: {
    width:0,
    height:0,
    name: '贲雅芳',
    spell: 'Ben Yafang',
    job: '前端工程师',
    experiment: '2021年毕业',
    tel: '18310712609',
    sex:'女',
    age:'24',
    email:'yafang1826@163.com',
    github:'github.com/alisaben',
    skill: [
      {
        name: 'javascript',
        percent: 90
      },
      {
        name: 'react',
        percent: 85
      },
      {
        name: 'es6',
        percent: 85
      },
      {
        name: 'webpack',
        percent: 60
      },
      {
        name: 'java',
        percent: 60,
      },
      {
        name: 'scala',
        percent: 85,
      },
      {
        name: 'python',
        percent: 70,
      },
    ],
    educations: [
      {
        school: '北京邮电大学',
        major: "计算机科学与技术",
        year: '2018.9-2021.6',
        desc: '学习计算机网络、数据结构、操作系统等计算机专业课程，并有多次参与项目开发经验，研究生方向为视频图像分割，对深度学习和强化学习有所了解'
      },
      {
        school: '北京邮电大学',
        major: "数学与应用数学",
        year: '2014.9-2018.6',
        desc: '学习数学分析、概率统计、随机过程、精算等数学课程'        
      }

    ],
    work: [
      {
        company: '北京字节跳动有限公司',
        job: '飞书团队前端实习生',
        year:'2020.1-2020.4',
        desc:'搭建自动化日志分析系统，打通自动化测试、日志数据可视化、产品性能分析整个流程；利用正则表达式实现JavaScript清洗日志数据，并结构化日志数据；结合PerfDog监听的CPU和内存监听数据，定位各事件性能损耗；借鉴MVC模式理念重构代码，组件化封装视图层，功能模块和划分；解决Vue和React页面工程嵌入问题，实现多平台独立部署。'
      },
      {
        company: '北京银河智维有限公司',
        job: '前端实习生',
        year:'2019.4-2019.12',
        desc:'从0到1搭建桌面演练系统；基于Konvajs实现机房仿真操作可视化，基于JavaScript实现交互运算；解决并优化Canvas操作，包括Canvas分屏、离屏渲染等，提升系统性能，从16fps提升到30fps'
      }
    ],
    project: [
      {
        name: '在线直播系统房间管理服务',
        year: '2019.6-2019.10',
        desc: '该项目作为客户端与流媒体服务器沟通的桥梁，实现直播平台房间管理服务；基于MVC模式设计平台架构，分离Service层、DAO层和core层，基于业务逻辑搭建core层各Actor的功能框架；搭建websocket通信，提供直播间维护、互动、录像管理、信息管理等服务'
      },
      {
        name: '移动政企微信公众号数据统计平台',
        year: '2018.11-2019.2',
        desc: '该平台主要面向管理员，管理用户和查询微信公众号的用户活跃情况，主要包括用户概况统计、活跃用户统计，图文分析、消息分析、标签管理、菜单分析和二维码管理。目前项目已经上线。'
      }
    ],
    introduction: '勤奋好学、好奇心强、有恒心毅力、适应能力强、热爱运动',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth;
    var height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      width:width,
      height:height
    });

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})