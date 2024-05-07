window.addEventListener('load', async()=>{
    const { fetchAllPost} = await import ("./fetchAllPost.mjs")
    const itemsPerPage = 5;
    let currentPage = 1;
   
    try{
        const res = await fetchAllPost()
        console.log(1,res)

        if(res.data.length > 0){
            const totalPages = Math.ceil(res.data.length / itemsPerPage);

            displayPage(res.data, currentPage, itemsPerPage)

            displayPagination(totalPages)
        }

    }catch(error){
        console.log("Can not fetch", error)
    }
});