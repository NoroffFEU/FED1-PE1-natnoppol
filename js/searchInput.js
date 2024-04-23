document
.getElementById("searchForm")
.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = localStorage.getItem("name");

});


async function getSearchInput(searchInput){
  try {


    let input, filter;
      input = document.getElementById('search')
      filter = input.value.toUpperCase();
  
  } catch (error) {
    console.log("something went wrong", error);
  }
  
}