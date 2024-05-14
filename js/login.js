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

 
    let res; 
    
    try {
      const loginResponse = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        body: JSON.stringify(regisData),
        headers: {
          "Content-type": "application/json",
        },
      });
  
      res = await loginResponse.json();
      if (loginResponse.ok) {
        alert("You are logged in")
        window.location.href = '../post/edit.html'
      }else{
        alert(res.errors[0].message)
      }
    } catch (error) {
      alert(res.errors[0].message);
    }

    // 3.Store accessTOken in LocalStorage 
    localStorage.setItem('accessToken', res.data["accessToken"])
    localStorage.setItem('name', res.data["name"])
    
  });
