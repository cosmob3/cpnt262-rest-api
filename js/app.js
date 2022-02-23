const fetchData = async function() {
  try {
      const response = await fetch('https://ffxivcollect.com/api/mounts/');
      if (!response.ok) { 
          // Throw error to catch()
          throw new Error(response.statusText);
      }
      const data = await response.json();

      console.log(data.results);

      const output =`
        <h1>${data.results[3].name}</h1>
        <img src="${data.results[3].image}"></img>
        <p>
          <a href="https://ffxivcollect.com/api/mounts/${data.results[3].id}">Raw Data</a>
        </p>
        <p>${data.results[3].enhanced_description}</p>
        `;

      document.querySelector('.output').innerHTML = output;

  } catch (error) {
      // Handle any rejected Promise in the `try` block
      console.log(error);
  }
}

fetchData();