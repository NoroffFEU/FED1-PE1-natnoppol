async function getPost(id) {
    try {
        const res = await fetch(
            `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
                "name"
            )}/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        if (res) {
            const { data } = await res.json();
            return data;
        }
    } catch (error) {
        console.log("Something went wrong", error);
        return null;
    }
}

async function deletePost(id){
    try{
        const res = await fetch(`https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
            "name"
        )}/${id}`,{
            method: "DELETE",
            headers:{
                "Content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if(res.ok){
            alert("Your selected post is deletet")
            window.location.reload()
        }
    }catch(error){
        console.log("Something went wrong", error)
    }
}

function formatDate(date){
    return new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'short',
        year:'numeric'
    });
}

function logout(){
    localStorage.clear()
    window.location.reload()
}



