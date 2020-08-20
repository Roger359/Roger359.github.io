fetch('https://api-to-call.com/endpoint')
  .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },

    networkError => {
      console.log(networkError.message)
    }
  ).then(jsonResponse => jsonResponse)



  // async GET Requests
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error)
  }
}