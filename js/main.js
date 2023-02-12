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

      const USER_A_BLOCK = document.querySelector('.user-a');
      const USER_AB_BLOCK = document.querySelector('.user-ab');

      const FILTER_BY_LETTER = (data, letter) => {
        return data.filter(obj => obj.title.toLowerCase().startsWith(letter));
      };
  
      const ADD_OBJECTS_TO_BLOCK = (objects, block) => {
        block.innerHTML = objects.map(obj => `<p>${JSON.stringify(obj)}</p>`).join('');
      };
  
      const showObjectsByLetter = letter => {
        const filteredObjects = FILTER_BY_LETTER(data, letter);
        if (letter === 'a') {
          ADD_OBJECTS_TO_BLOCK(filteredObjects, USER_A_BLOCK);
          USER_AB_BLOCK.innerHTML = '';
        } else if (letter === 'ab') {
          ADD_OBJECTS_TO_BLOCK(filteredObjects, USER_AB_BLOCK);
          USER_A_BLOCK.innerHTML = '';
        }
      };
  
      document.querySelector('.add-a').addEventListener('click', () => {
        showObjectsByLetter('a');
        document.querySelector('.add-all').innerHTML = '';
      });
  
      document.querySelector('.add-ab').addEventListener('click', () => {
        showObjectsByLetter('ab');
        document.querySelector('.add-all').innerHTML = '';
      });
  
      document.querySelector('.add-all').addEventListener('click', () => {
        const objectsStartingWithA = FILTER_BY_LETTER(data, 'a');
        const objectsStartingWithAB = FILTER_BY_LETTER(data, 'ab');
  
        ADD_OBJECTS_TO_BLOCK(objectsStartingWithA, USER_A_BLOCK);
        ADD_OBJECTS_TO_BLOCK(objectsStartingWithAB, USER_AB_BLOCK);
      });
    });
}

getData();
