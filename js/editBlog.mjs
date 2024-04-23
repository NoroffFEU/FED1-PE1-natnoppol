const token = localStorage.getItem('accessToken')
let id;


window.addEventListener('load', async (e) =>{
    e.preventDefault()
    
    const params = new URLSearchParams(window.location.search)
    id = params.get("id");

    const {title, body} = await getPost(id)

    const inputTitleEl = document.getElementById('title')
    const inputBody = document.getElementById('body')
  
    inputTitleEl.value = title
    inputBody.value = body
    

})

document.getElementById('editPostForm').addEventListener('submit', async (e) =>{
    e.preventDefault()

    const editTitle = document.getElementById('title').value
    const editContent = document.getElementById('body').value 
  
    const newBlog = {
        title: editTitle,
        body: editContent
    }
    

    async function editSingleBlog (){
        try{
            const res = await fetch (`https://v2.api.noroff.dev/blog/posts/${localStorage.getItem('name')}/${id}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newBlog)
            })
            if(res.ok){
                alert("Your post has edited")
                window.location.href = "../index.html"
            }
        }catch(error){
            console.log("Something went wrong", error)
        }
    }
    await editSingleBlog();
})
