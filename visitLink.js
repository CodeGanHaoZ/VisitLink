const axios = require('axios');
const schedule = require('node-schedule');

// 每分钟第 0 秒时请求链接
const rule = new schedule.RecurrenceRule();
rule.second = 0;

const job = schedule.scheduleJob(rule, function () {
  // axios.get('https://blog.csdn.net/weixin_53231455/article/details/134409590')
  // axios.get('https://blog.csdn.net/weixin_53231455/article/details/134609626')
  // axios.get('https://blog.csdn.net/weixin_53231455/article/details/131743861')
  // axios.get('https://blog.csdn.net/weixin_53231455/article/details/137151344')
  // axios.get('https://blog.csdn.net/weixin_53231455/article/details/137098583')
  axios.get('https://ghw0927.blog.csdn.net/article/details/137540458')
    .then(response => {
      console.log(`开始访问-------------------------------->`)
      console.log(`status code: ${response.status}，访问成功`)
      console.log(`进入休眠-------------------------------->`)
      console.log(`\n`)
      // 在这里处理响应数据
    })
    .catch(error => {
      console.error(error);
    });
});


function countdown() {
    // 获取当前时间
    const currentTime = new Date();
    // 设置今天的18:00时间
    const targetTime = new Date();
    targetTime.setHours(18, 0, 0, 0);
  
    // 计算时间间隔
    const timeDiff = targetTime - currentTime;
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)); // 小时数
    const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // 分钟数
    const secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000); // 秒数
  
    console.log(`距离 18:00 还有 ${hoursDiff} 小时 ${minutesDiff} 分钟 ${secondsDiff}秒`);
  
    if (currentTime >= targetTime) {
      clearInterval(interval);
      console.log("已经到达目标时间！");
    }
}

countdown()

const interval = setInterval(countdown,10000);
