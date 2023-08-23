// 使用http协议
if (location.protocol.startsWith('https')) {
    location.replace(location.origin.replace('https', 'http'))
}
// 控制台输出信息
window.onload = () => {
    setTimeout(() => {
        console.clear()
        console.log('Vue3: ', 'https://cn.vuejs.org/')
        console.log('ElementPlus: ', 'https://element-plus.gitee.io/zh-CN/')
    }, 728)
}