const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    
    const url=`https://api.darksky.net/forecast/f54578bb850cd16dba340c5d995c863c/${latitude},${longitude}`

    request({url,json:true},(err,{body})=>{
        if(err){
            callback('Unable toh connect app',undefined)
        }else if(body.err){
            callback('Location not found',undefined);
        }else{
            callback(undefined,body.daily.data[0].summary+' '+'It is currently'+' '+ body.currently.temperature +' '+'degree out there is a'+' '+body.currently.precipProbability+' ' + '% chance of rain')
        }
    })

}

module.exports=forecast