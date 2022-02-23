const fetchData = async function() {
  try {
      const response = await fetch('https://ffxivcollect.com/api/mounts/');
      if (!response.ok) { 
          // Throw error to catch()
          throw new Error(response.statusText);
      }
      const data = await response.json();

      console.log(data.results[3].patch);
  } catch (error) {
      // Handle any rejected Promise in the `try` block
      console.log(error);
  }
}

fetchData();