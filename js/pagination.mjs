window.addEventListener("load", async () => {
  const { fetchAllPost } = await import("./fetchAllPost.mjs");

  try {
    const get = getURL();
    const res = await fetchAllPost(13, get,'desc','created');

    if (res.data.length > 0) {
      let pageNumber = "";
      for (let i = 0; i < res.meta.pageCount; i++) {
        pageNumber += `<a href="./index.html?&page=${i + 1}" class="${
          i + 1 == get ? 'active' : ''
        }">${i + 1}</a>`;
      }

      const pagination = document.getElementById("pagination");
      pagination.innerHTML = `
            ${pageNumber}
            `;
    }
  } catch (error) {
    console.log("Can not fetch", error);
  }
});
