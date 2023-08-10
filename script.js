console.log('Vue3: ', 'https://cn.vuejs.org/')
console.log('ElementPlus: ', 'https://element-plus.org/zh-CN/')
console.log('若加载较慢可以访问: ', 'https://panyizhe.gitee.io')

// 使用http协议
if (location.protocol.startsWith('https')) {
    location.replace(location.origin.replace('https', 'http'))
}