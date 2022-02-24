// function reloadPage()
//         local.reload();
const randomizer = (length) => {
  return Math.floor(Math.random() * length);
} 

const fetchData = async function() {

  try {
      const response = await fetch('https://ffxivcollect.com/api/mounts/');
      if (!response.ok) { 
          // Throw error to catch()
          throw new Error(response.statusText);
      }
      const data = await response.json();

      console.log('Full API Array');
      console.log(data.results);

      const creatures = data.results[randomizer(data.results.length)];

      console.log('Random Selector');
      console.log(creatures)

      const output =`
        <form>

          <h1>${creatures.name}</h1>

          <img src="${creatures.image}" alt="${creatures.name}"></img>

          <p>
            <a href="https://ffxivcollect.com/api/mounts/${creatures.id}" >Raw Data</a>
          </p>
        
          <p>${creatures.enhanced_description}</p>

          <button onClick="reloadPage">Anothe' One</button>
        </form>
          `;

      document.querySelector('.output').innerHTML = output;

      


  } catch (error) {
      // Handle any rejected Promise in the `try` block
      console.log(error);
  }
}

fetchData();
