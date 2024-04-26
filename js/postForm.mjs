const token = localStorage.getItem('accessToken')
let id;

window.addEventListener('load', async (e) =>{
  e.preventDefault()
  
  const params = new URLSearchParams(window.location.search)
  id = params.get("id");
  
  const {title, body, media} = await getPost(id)
  
  
  const inputTitleEl = document.getElementById('title')
  const inputBody = document.getElementById('body')
  const inputURL = document.getElementById('mediaURL')
  
  inputTitleEl.value = title
  inputBody.value = body
  inputURL.value = media.url
  
  console.log(id)

    if(id.length !== 0){
        document.getElementById('createPost').style.display = 'none'
        document.getElementById('editPost').style.display = 'block'
    }else{
      document.getElementById('editPost').style.display = 'none';
      document.getElementById('createPost').style.display = 'block';
    }

      document.getElementById("postForm")
        .addEventListener("submit", async function (e) {
          e.preventDefault();
      
          const inputTitle = document.getElementById("title").value;
          const inputContent = document.getElementById("body").value;
          const inputURL = document.getElementById("mediaURL").value;
      
          const createPost = {
            title: inputTitle,
            body: inputContent,
            media: {
              url: inputURL
            },
          };
          
          try {
            const response = await fetch(
              `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem('name')}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(createPost),
              }
            );
      
            if (response.ok) {
              alert("Your content is postet");
              window.location.href = "../index.html";
            } else {
              alert("Your post is not createt");
            }
          } catch (error) {
            console.log("something went wrong", error);
          }
        });
})

document.getElementById('postForm').addEventListener('submit', async (e) =>{
    e.preventDefault()

    const editTitle = document.getElementById('title').value
    const editContent = document.getElementById('body').value 
    const editURL = document.getElementById('mediaURL').value 
  
    const newBlog = {
        title: editTitle,
        body: editContent,
        media:{
            url: editURL
        },
    }
    console.log(id)

    
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
