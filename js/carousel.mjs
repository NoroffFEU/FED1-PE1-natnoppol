let currentIndex = 1

window.addEventListener('load', async() =>{

    const { fetchAllPost }  = await import ( "./fetchAllPost.mjs")
    
    try{
        
        const res = await fetchAllPost(3, 1)
        
        if(res.data.length > 0){

            const images = document.getElementById('imageCarousel')
            const element = res.data.map((e, index) =>
                `
                <div class="mySlides">
                    <div class="numbertext" style='font-weight:900;'>${index + 1}/${res.data.length}</div>
                    <div class="carousel-body">
                    <p>${e.author.name}</p>
                    <h2 class="clamped-text">${e.title}</h2>
                    <p class="clamped-text">${e.body}</p>
                    </div>
                    <a href="../post/index.html?id=${e.id}">
                    <img src="${e.media?.url || '../image/600x400.svg'}" style='filter: blur(5px);' alt="Blog img"></img>
                </div>

                `
            )
            images.innerHTML = element.join("")
        }

    }catch(error){
        console.log("Can not load content", error)
    }

    showCarousel(currentIndex)
    
})

const prev = document.getElementById('btnPrev')
const next = document.getElementById('btnNext')
 prev.addEventListener('click', () =>{
    showCarousel(currentIndex -= 1)
})
 next.addEventListener('click', () =>{
    showCarousel(currentIndex += 1)
})


const dot = document.getElementsByClassName('dot')
const elementsArray = Array.from(dot)
elementsArray.forEach((element, index) => {
    element.addEventListener('click', () => {
        showCarousel(currentIndex = index + 1)
    })
})

 function showCarousel(current){
    try{
        let i;
    
        const images = document.getElementsByClassName('mySlides')
        const dots = document.getElementsByClassName('dot')
    
        if (current > images.length){
            currentIndex = 1
        }
        if(current < 1){
            currentIndex = images.length
        }
    
        for(i=0; i<images.length; i++){
            images[i].style.display = "none";
        }
    
        for(i=0; i<dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "")
        }
    
        images[currentIndex-1].style.display= "block";
        dots[currentIndex-1].className +=" active"

        return current

    }catch(error){
        console.log("Can not load content", error)
    }

}
