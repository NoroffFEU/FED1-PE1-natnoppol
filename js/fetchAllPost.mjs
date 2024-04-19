async function fetchAllPosts(event) {
  try {
    const response = await fetch("https://v2.api.noroff.dev/blog/posts/Natnoppol",{
    method:"GET",
    Headers:{
        "Content-Type": "application/json"
    }
    });
    if(response.ok){
      const data = await response.json();
      console.log(1,data)
      return data
    }
  } catch (error) {
    console.log("fetching posts is error", error);
  }
}

window.addEventListener('load', async () =>{
   const response = await fetchAllPosts();
   console.log(typeof response)
  if(response?.data.length > 0){

    const blogContainer = document.getElementById('blogPost');
    const blogItems = response.data.map((res) =>
    `
    <h1>${res.title}</h1>
    <h3>${res.body}</h3>
  
    `
    )
    console.log(3,blogItems)
    blogContainer.innerHTML = blogItems.join("")
    console.log(2, blogContainer)
  }
})
