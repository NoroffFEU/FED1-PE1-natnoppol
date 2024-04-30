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

function sharePost(id) {
    
}
