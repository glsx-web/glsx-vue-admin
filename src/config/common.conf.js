export default{
  axios: {
    baseURL: 'http://cas.dev.glsx.net/cas/',
    // baseURL: 'http://192.168.3.171:7300/mock/5b0ed7dbf189006180803286/standard',
    whiteList: ['api/lt', 'api/login', 'auth/menu/findTree', 'api/logout'],
    timeout: 15000,
    result: {
      data_key: 'data', // 返回值数据实体存放对象
      message_key: 'message', // 返回信息字段名
      code_key: 'returnCode', // 返回结果字段名
      errId: 'errId',
      code_success_value: '0', // 返回成功值 注意类型 (字符串与数字)
      code_message_map: { // 错误码 错误信息 映射表
        '-200': 'reload',
        '1000': '未知异常，请刷新页面！',
        '1001': '参数无效，请刷新重试！',
        '1002': '票据异常，请刷新重试！',
        '1003': '验证码失效，请重新获取！',
        '1004': '用户名或密码错误！'
      }
    }
  }
}
