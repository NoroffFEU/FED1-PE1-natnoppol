
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
  try {
      const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: 'POST',
      body: JSON.stringify(regisData),
      headers: {
        'Content-type': 'application/json'
      }
      })
    
      if (response.ok) {
        const result = await response.json();
        console.log(1, result);
      } else{
        console.error(2, response.statusText)
      }
    } catch (error) {
      console.error("there was an errror with your fetch", error);
    }
    console.log(regisData)
  });

