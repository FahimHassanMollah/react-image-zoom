import React, { useEffect } from 'react'

const ZoomImage = () => {
useEffect(() => {
    const magnifying_area =  document.getElementById("magnifying_area");
    const magnifying_img =  document.getElementById("magnifying_img");
    
    magnifying_area.addEventListener("mousemove",function(event){
        let clientX = event.clientX - magnifying_area.offsetLeft
        let clientY = event.clientY - magnifying_area.offsetTop
         
        var mWidth = magnifying_area.offsetWidth
        var mHeight = magnifying_area.offsetHeight
        clientX = clientX / mWidth * 100
        clientY = clientY / mHeight * 100
    
        //magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
        magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
    })
    
    magnifying_area.addEventListener("mouseleave",function(){
        magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'
    }) 
}, [])
    return (
        <div>
            <figure id="magnifying_area">
                <img id="magnifying_img" src="https://source.unsplash.com/user/erondu/800x500" alt="asdfj"  />
            </figure>
        </div>
    )
}

export default ZoomImage
