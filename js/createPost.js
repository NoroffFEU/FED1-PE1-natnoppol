
//when we use TOken ? 
// Get accessToken 
/*  check if token is correct to create post.
if True get accessToken
*/
//  Let user create form 
const token = localStorage.getItem('accessToken');
const submitForm = document.getElementById('createPostForm').addEventListener('submit', async function(e){
e.preventDefault()


const postTitle = document.getElementById('title').value
const postContent = document.getElementById('body').value
const createPost = {
    title: postTitle,
    body: postContent
}

// 5. POST request submit to server 
try{
    const response = await fetch('https://v2.api.noroff.dev/blog/posts/natnoppol',{
        medthod: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createPost)
    })
    
    if(response.ok){
        alert('Your content is postet')
        window.location.href = "../post/index.html"
    } else {
        alert('Your post is not createt')
    }
} catch (error) {
    console.log('something went wrong', error)
}

});



