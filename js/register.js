// 1 create name email password and POST request
document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const regisName = document.getElementById("name").value;
    const regisEmail = document.getElementById("email").value;
    const regisPassword = document.getElementById("password").value;

    const regisData = {
      name: regisName,
      email: regisEmail,
      password: regisPassword,
    };
    
    let res;
    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/register", {
        method: "POST",
        body: JSON.stringify(regisData),
        headers: {
          "Content-type": "application/json",
        },
      });

      res = await response.json()

      if (response.ok) {
        alert("you are resgistered")
        window.location.href="/account/login.html"
      } else {
        alert(res.errors[0].message)
      }
    } catch (error) {
      alert(res.errors[0].message);
    }
  });
