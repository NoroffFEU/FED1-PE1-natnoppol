async function fetchAllPost() {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem('name')}`,
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
async function loadPosts() {
  try {
    const post = document.getElementById("blogPost");
    const res = await fetchAllPost();

    if (res.data.length > 0) {
      const element = res.data.map(
        (e) =>
          `<div class="blog">
              <h1>${e.title}</h1>
              <h3>${e.body}</h3>
              <button>Read More</button>
              <button>
                <a href="../post/edit.html?id=${e.id}">Edit</a>
              </button>
              <button onclick="deletePost('${e.id}')">Delete</button>
            </div>`
      );
      post.innerHTML = element.join("");
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

window.addEventListener("DOMContentLoaded", loadPosts);


