window.addEventListener("load", async () => {
  const { fetchAllPost } = await import("./fetchAllPost.mjs");

  try {
    const get = getURL()
    const res = await fetchAllPost(13, get);

    console.log("meta", res.meta);

    if (res.data.length > 0) {
     
      let pageNumber = "";
      for (let i = 0; i < res.meta.pageCount; i++) {
        pageNumber += `<a href="./index.html?&page=${i + 1}">${
          i + 1
        }</a>`;
      }

      const pagination = document.getElementById("pagination");
      pagination.innerHTML = `
            <a href="">&laquo;</a>

            ${pageNumber}
         
            <a href="">&raquo;</a>
            `;
    }
  } catch (error) {
    console.log("Can not fetch", error);
  }
});
