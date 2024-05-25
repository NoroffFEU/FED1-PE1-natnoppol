async function fetchAllPost(limit=13,page=1,sortOrder='desc',sort='created') {
  try {
    let url = `https://v2.api.noroff.dev/blog/posts/${
      localStorage.getItem("name") || "test123123"
    }`;
    
    if(limit !== null){
      url += `?limit=${limit}&page=${page}&sortOrder=${sortOrder}&sort${sort}`
    }
    
    const response = await fetch(url,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

export {fetchAllPost}

async function loadPosts() {
  try {
    const post = document.getElementById("blogPost");

    const get = getURL()
    const res = await fetchAllPost(13, get,'desc','created');
    

    if (res.data.length > 0) {
      const element = res.data.map(
        (e) =>
          `
            <div class="blog">
              <img src="${e.media?.url || './image/600x400.svg'}" alt="Blog img">
              <div class="blog-body">
                <div class="banner-con">
                  <div class="author-banner">
                    <img src="${e.author?.banner.url}" alt="Banner img">
                  </div>
                  <p>${e.author.name}</p>
                </div>
                <h2 class="clamped-text">${e.title}</h2>
                <p class="clamped-text">${e.body}</p>
                <p class="date-text">${formatDate(e.created)}</p>
                <div class="blog-btn">
                  ${
                    localStorage.getItem("accessToken")
                      ? `<button><a href="../post/edit.html?id=${e.id}" style="font-weight: 900; color:#fff;" >Edit</a></button> 
                  <button onclick="deletePost('${e.id}')" style="font-weight: 900; color:#fff;">Delete</button>
                  <button><a href="./post/index.html?id=${e.id}"style="font-weight: 900; color:#fff;" >Read more</a></button>`
                      : `<button><a href="./post/index.html?id=${e.id}"style="font-weight: 900; color:#fff;">Read more</a></button>`
                  }
                </div>
              </div>
            </div>
            `
      );
      post.innerHTML = element.join("");
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

window.addEventListener("DOMContentLoaded", ()=>{
  try{
    loadPosts()
    hideLoading ()
  }
  catch{
    console.log("Something went error")
  }
});
