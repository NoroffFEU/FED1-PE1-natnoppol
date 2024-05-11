async function editPost(id, inputValue) {
  try {
    const res = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
        "name"
      )}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(inputValue),
      }
    );
    if (res.ok) {
      alert("Your post has edited");
      window.location.href = "../index.html";
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

async function createPost(inputValue) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem("name")}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(inputValue),
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
}

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

async function deletePost(id) {
  console.log(id);
  try {
    const res = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
        "name"
      )}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (res.ok) {
      alert("Your selected post is deletet");
      window.location.reload();
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function logout() {
  localStorage.clear();
  window.location.href='../index.html';
}

function displayPage(data, page, itemsPerPage){
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage
  const currentPageData = data.slice(startIndex, endIndex)
  
  console.log("current page data:",currentPageData)

}

function displayPagination(totolPages){

  console.log("how many pages", totolPages)

  const pagination = document.getElementById('pagination')
  pagination.innerHTML = `
  <a href="">&laquo;</a>
  <a href="">1</a>
  <a href="">2</a>
  <a href="">3</a>
  <a href="">&raquo;</a>
  `
}

function getURL(){
  const params = new URLSearchParams (window.location.search)
  let page = params.get('page')

  if(page === null){
    page=1
  }
  return page 
}

