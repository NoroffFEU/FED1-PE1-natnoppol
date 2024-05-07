let id;

window.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  
  id = params.get("id");
  
  async function fetchSinglePost(id) {
    try {
      const res = await fetch(
        `https://v2.api.noroff.dev/blog/posts/${
          localStorage.getItem("name") || "test123123"
        }/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      
      if (res.ok) {
        const response = await res.json();
        
        const blog = document.getElementById("getSinglePost");
        
        blog.innerHTML = `
        <div class ="read-more-blog">
        <div class="read-more-con-img">
        <img src="${response.data.media?.url || "../image/600x400.svg"}">
        </div>
        <div class="blog-body-read-more">
        <div class="banner-con">
        <div class="author-banner">
        <img src="${response.data.author?.banner.url}">
        </div>
        <p>${response.data.author.name}</p>
        </div>
        <h2>${response.data.title}</h2>
        <br>
        <p>${response.data.body}</p>
        <br>
        <p>${response.data.author.email}</p>
        <p>${formatDate(response.data.updated)}</p>
        <br>
        <div class="blog-btn">
        <button id='getURL'>Share link</button>
        </div>
        </div>
        </div>  
        `;
      }
    } catch (error) {
      console.log("something error", error);
    }
  }
  
  await fetchSinglePost(id);
  
  document.querySelector("#getURL").onclick = shareURL
  
  function shareURL() {
    const currentURL = `${window.location.origin}${window.location.pathname}?id=${id}`;
    
    navigator.clipboard.writeText(currentURL)

    alert("Copied the text: "+ currentURL)
    
  }
});
