console.log('Client side javascript file is loaded!')




const weatherForm=document.querySelector('form')
const search=document.querySelector('input').value
    
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.querySelector('.message-1').textContent='Loading...'
    document.querySelector('.message-2').textContent=' '

    fetch(`http://localhost:8080/weather?address=${search}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            document.querySelector('.message-1').textContent=data.error
            
        }else{
           document.querySelector('.message-1').textContent=data.location
           document.querySelector('.message-2').textContent=data.forecast
        }
        
        
    })
})
    
})