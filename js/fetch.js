async function fetchData() {
  try {
    const response = await fetch("https://v2.api.noroff.dev/");
    if (!response) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("there was an errror with your fetch", error);
  }
}

fetchData();
