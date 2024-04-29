let id;

window.addEventListener("load", async (e) => {
  e.preventDefault();

  const params = new URLSearchParams(window.location.search);
  id = params.get("id");

  if (id) {
    let { title, body, media } = await getPost(id);

    const inputTitleEl = document.getElementById("title");
    const inputBody = document.getElementById("body");
    const inputURL = document.getElementById("mediaURL");

    inputTitleEl.value = title;
    inputBody.value = body;
    inputURL.value = media.url;
  }

  if (id) {
    document.getElementById("createPost").style.display = "none";
    document.getElementById("editPost").style.display = "block";
  } else {
    document.getElementById("editPost").style.display = "none";
    document.getElementById("createPost").style.display = "block";
  }
});

document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const editTitle = document.getElementById("title").value;
  const editContent = document.getElementById("body").value;
  const editURL = document.getElementById("mediaURL").value;

  const inputValue = {
    title: editTitle,
    body: editContent,
    media: {
      url: editURL,
    },
  };
  if (!editURL) {
    delete inputValue.media;
  }

  if (id) {
    editPost(id, inputValue);
  } else {
    createPost(inputValue);
  }
});
