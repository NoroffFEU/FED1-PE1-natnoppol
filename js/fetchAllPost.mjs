async function fetchAllPost() {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem("name")||"test123123"}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
async function loadPosts() {
  try {
    const post = document.getElementById("blogPost");
    const res = await fetchAllPost();

    // show button if accessToken is true 
    if (res.data.length > 0) {
      const element = res.data.map(
        (e) =>
          `
            <div class="blog">
              <img onclick="window.location.href='../post/index.html'" src="${e.media?.url || '../image/600x400.svg'}" style="cursor: pointer;">
              <div class="blog-body">
                <div class="banner-con">
                  <div class="author-banner">
                    <img src="${e.author?.banner.url}">
                  </div>
                  <p>${e.author.name}</p>
                </div>
                <h1>${e.title}</h1>
                <p class="clamped-text">${e.body}</p>
                <p class="date-text">${formatDate(e.created)}</p>
                <div class="blog-btn">
                  ${localStorage.getItem('accessToken') ? `<button><a href="../post/edit.html?id=${e.id}">Edit</a></button> 
                  <button onclick="deletePost('${e.id}')">Delete</button>` :'' }
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

window.addEventListener("DOMContentLoaded", loadPosts);
