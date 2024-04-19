document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();



    const regisEmail = document.getElementById("email").value;
    const regisPassword = document.getElementById("password").value;
    const regisData = {
      email: regisEmail,
      password: regisPassword,
    };

 
    let result; // 2.Response from server
    
    try {
      const loginResponse = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        body: JSON.stringify(regisData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (loginResponse.ok) {
        result = await loginResponse.json();
        console.log(result)
        //4. redirect to index page, if HTTP 200
        window.location.href = '../post/index.html'
      } 
    } catch (error) {
      console.error("there was an errror with your fetch", error);
    }

    // 3.Store accessTOken in LocalStorage 
    localStorage.setItem('accessToken', result.data["accessToken"])
  
  });
