/**
 * 工具类
 */
export default class Tools{

  /**
   * 判断当前是移动端还是pc端
   * param void;
   * return boolean
   */
  static currentDeviceIsPersonComputer(){
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.includes(Agents[i]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  /**
   * 后端返回的数据转换成标准格式
   * param string;
   * return string
   */
  static conversionTimeToUTC(originTime){
    return `${originTime.substr(5,2)}/${originTime.substr(8,2)}/${originTime.substr(0,4)} ${originTime.substr(11,8)}+UTC`;
  }

  static formatNumber(num){
    return num/1000000000000000000;
  }

  static scientificToNumber(num) {
    //将科学计数法转换成字符串
    var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  }
  /**
   * 格式化年月日
   * param string;
   * return string
   */
  static formatDateYearToDate(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h;
  }
  /**
   * 格式化年月日时分秒
   * param string;
   * return string
   */
  static formatDateYearAndMinutesAndSeconds(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() < 10 ? '0' + (date.getHours()) : + (date.getHours()) ;
    var m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : + (date.getMinutes());
    var s = date.getSeconds() < 10 ? '0' + (date.getSeconds()) : + (date.getSeconds()) ;
    return Y + M + D + h + ':'+ m + ':'+s;
  }
}
