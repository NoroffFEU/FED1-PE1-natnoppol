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

    let result;
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
      } else {
        console.error(2, loginResponse.statusText);
      }
    } catch (error) {
      console.error("there was an errror with your fetch", error);
    }
    
  
  });
