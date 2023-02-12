// Лекція 29

// Завдання 1

function getData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(obj => obj.title.charAt(0) === 'a');
        console.log(filteredData);
      })
      .catch(error => console.error(error));
  }
  
  getData('https://jsonplaceholder.typicode.com/todos');
  
  // Завдання 2 
  
  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data.filter(obj => obj.title.charAt(0) === 'a');
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData('https://jsonplaceholder.typicode.com/todos');
  
  
  // Завдання 3 
  
  function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const userAData = data.filter(item => item.title.startsWith('a'));
        const userABData = userAData.filter(item => item.title.startsWith('ab'));
        
        const userAElem = document.querySelector('.user-a');
        const userABElem = document.querySelector('.user-ab');
        
        userAElem.innerHTML = userAData.map(item => `<p>${JSON.stringify(item)}</p>`).join('');
        userABElem.innerHTML = userABData.map(item => `<p>${JSON.stringify(item)}</p>`).join('');
      });
  }
  
  
  
  // Завдання 4 
  
  
  function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.user-a').innerHTML = '';
      document.querySelector('.user-ab').innerHTML = '';
      document.querySelector('.add-all').innerHTML = '';
        
      const userA = document.querySelector('.user-a');
      const userAB = document.querySelector('.user-ab');
  
      const filterByLetter = (data, letter) => {
        return data.filter(obj => obj.title.toLowerCase().startsWith(letter));
      };
  
      const addObjectsToBlock = (objects, block) => {
        block.innerHTML = objects.map(obj => `<p>${JSON.stringify(obj)}</p>`).join('');
      };
  
      const showObjectsByLetter = letter => {
        const filteredObjects = filterByLetter(data, letter);
        if (letter === 'a') {
          addObjectsToBlock(filteredObjects, userA);
        } else if (letter === 'ab') {
          addObjectsToBlock(filteredObjects, userAB);
        }
      };
  
      document.querySelector('.add-a').addEventListener('click', () => {
        showObjectsByLetter('a');
      });
  
      document.querySelector('.add-ab').addEventListener('click', () => {
        showObjectsByLetter('ab');
      });
  
  
      document.querySelector('.add-all').addEventListener('click', () => {
        const objectsStartingWithA = filterByLetter(data, 'a');
        const objectsStartingWithAB = filterByLetter(data, 'ab');
        addObjectsToBlock(objectsStartingWithA, userA);
        addObjectsToBlock(objectsStartingWithAB, userAB);
      });
    });
  }
  
  getData();
