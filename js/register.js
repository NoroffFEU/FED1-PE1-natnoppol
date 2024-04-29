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
    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/register", {
        method: "POST",
        body: JSON.stringify(regisData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(1, result);
      } else {
        console.error(2, response.statusText);
      }
    } catch (error) {
      console.error("there was an errror with your fetch", error);
    }
    console.log(regisData);
  });
