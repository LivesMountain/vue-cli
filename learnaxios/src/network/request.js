import axios from 'axios'


export function request(config){
    const instance =axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })



    // instance.interceptors.request.use(config => {
    //     // 假如说在请求的时候不满足与服务器的要求
    //     console.log(config);

    //     return config
    // },err =>{
    //     console.log(err);
    // })



    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data
    },err =>{
        console.log(err);
    })
    return instance(config)
    // 发送网络请求

    // instance(config.baseconfig)
    // .then(res => {
    //     console.log(res);
    //     config.success(res)
    // }).catch(err=>{
    //     console.log(err);
    //     config.failure(err)
    // })
}  




// export function request(config,success,failure){
//     const instance =axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })


//     // 发送网络请求

//     instance(config)
//     .then(res => {
//         console.log(res);
//         success(res)
//     }).catch(err=>{
//         console.log(err);
//         failure(err)
//     })
// }  







// export function request(config){
//     const instance =axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance(config).then(res => {
//         success(res)
//     }).catch(err =>{
//         failure(err)
//     })
// }



