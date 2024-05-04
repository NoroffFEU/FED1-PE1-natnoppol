window.addEventListener('load', async() =>{

    const { fetchAllPost }  = await import ( "./fetchAllPost.mjs")
    
    
    try{
        
        const res = await fetchAllPost(3)
        if(res.data.length > 0){
            const images = document.getElementById('imageCarousel')
            const element = res.data.map((e) =>
                `
                <img src="${e.media?.url || '../image/600x400.svg'}"></img>
                `
                
            )
            images.innerHTML = element.join("")
        }

        console.log(1,res)



    }catch(error){
        console.log("wrong", error)
    }
    const images = document.getElementById('imageCarousel')
    const carousel = document.querySelector('js-carousel')
    const leftArrow = document.querySelector('js-left-arrow')
    const rightArrow = document.querySelector('js-right-arrow')


    try{

        let currentIndex = 0
        let prevIndex;
        
        showCarousel(currentIndex)
        
        async function buttonOfCarousel(click){
            showCarousel(currentIndex += click)
        }
        
        async function showCarousel(current){
            let i;
            if (current > images.length){
        
            }
        }

    }catch(error){
        console.log("wrong", error)
    }



})