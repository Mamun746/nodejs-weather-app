const request=require('request')
const geocode=(address,callback)=>{
    const geoCodeURL=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWFtdW43NDYiLCJhIjoiY2p0emlxNHZ1MjB5NzQ1b2Y4bXZtZndydyJ9.QR4JNlfcROnzKYaSF2UePA`
    request({url:geoCodeURL,json:true},(err,{body})=>{
       if(err){
          callback('Unable to connect app',undefined)
       }else if(body.features.length===0){
          callback('Location is not found',undefined)
       }else{
             
             callback(undefined,{
               longitude:body.features[0].center[0],
             latitude:body.features[0].center[1],
             location:body.features[0].place_name
             })
       }
    })
 }
 module.exports=geocode