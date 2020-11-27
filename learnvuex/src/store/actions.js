export default {
    // context上下文，
    aupdateinfo(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('updateinfo')
                console.log(payload.message);
                payload.success()
                resolve('1111')
            },1000)
        })
        // setTimeout(()=>{
        //     context.commit('updateinfo')
        //     console.log(payload.message);
        //     payload.success()
        // },1000)
    }
}