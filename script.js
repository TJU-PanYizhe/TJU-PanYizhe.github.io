// 使用http协议
// if (location.protocol.startsWith('https')) {
//     location.replace(location.origin.replace('https', 'http'))
// }
// WebAssembly Test
function WASM() {
    // console.log(WebAssembly);
    function fetchAndInstantiate(url, importObject) {
        return fetch(url)
            .then((response) => response.arrayBuffer())
            .then((bytes) => WebAssembly.instantiate(bytes, importObject))
            .then((results) => results.instance);
    }

    fetchAndInstantiate("./wasm/release.wasm", {})
        .then(instance => {
            const exports = instance.exports
            console.log(exports);
            // console.log(exports.add(1, 2));
            // console.log(exports.add(-1, 0));
            // console.log(exports.minus(10, 3));
        })
}

// 控制台输出信息
window.onload = () => {
    setTimeout(() => {
        console.clear()
        console.log('Vue3: ', 'https://cn.vuejs.org/')
        console.log('ElementPlus: ', 'https://element-plus.gitee.io/zh-CN/')
        WASM()
    }, 728)
}