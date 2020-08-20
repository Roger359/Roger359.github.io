// Information to reach API
const url = 'https://api.datamuse.com/words?';
// const queryParams = 'rel_rhy=';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Async get Request
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery ;
  try{
    const response = await fetch(endpoint,{cache: 'no-cache'})
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse)
    }

  }catch(error){
    console.log(error);
  }
}
// ajax function with fetch
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  fetch(endpoint,{cache:'no-cache'})
  .then(response => {
    if(response.ok){
      return response.json()
    }
    throw new Error('Request failed!'); 
  }, networkError => {
     console.log(networkError.message);
    })

}


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);