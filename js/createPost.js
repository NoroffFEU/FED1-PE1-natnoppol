//when we use TOken ?

// 6. Get accessToken
/* 7. check if accesstoken is correct to create post.
if True get accessToken
*/
//  8. Let user create post to main index.html
const token = localStorage.getItem("accessToken");

const submitForm = document
  .getElementById("createPostForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const inputTitle = document.getElementById("title").value;
    const inputContent = document.getElementById("body").value;

    const createPost = {
      title: inputTitle,
      body: inputContent,
    };

    // 5. POST request submit to server
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem('name')}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
