
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '', // Provide an API Key Here
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    },
};

fetch(
    'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=5&autoCorrect=true',
    options
)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));