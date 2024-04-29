let id;
window.addEventListener('load', async ()=>{
    const params = new URLSearchParams(window.location.search)

    id = params.get('id')
    if(!id){
        return
    }
    async function getSinglePost(id){
        try{
            const res = await fetch(`https://v2.api.noroff.dev/blog/posts/${id}`,{
                method: 'GET',
                headers:{
                    "Content-type": 'application/json'
                }
            })

            if(res){
                const data = await res.json()
                console.log(data)
            }
        }catch(error){
            console.log("something error",(error))
        }
    }
await getSinglePost(id)
})


