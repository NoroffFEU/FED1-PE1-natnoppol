async function getPost(id){
    try{
        const res = await fetch(`https://v2.api.noroff.dev/blog/posts/Natnoppol/${id}`,{
            method: "GET",
            headers:{
                "Content-type": "application/json"
            }
        })
        if(res){
            const { data } = await res.json()
            return data
        }
    }catch(error){
        console.log("Something went wrong", error)
        return null
    }
}

