const element = window.location.search.substr(7)

const UI = (data) => {
    return `
        <img src=${data.Poster} alt=${data.Title}>
        <div>
            <h1>${data.Title}</h1>
            <p>${data.Plot}</p>
        </div>
    `
}

const find = (element) => {
    let result = ''
    fetch(`https://www.omdbapi.com/?apikey=add73b1a&i=${element}`)
        .then(response => response.json())
        .then(data => {
            result += UI(data)
            containerInformation.innerHTML = result
        })
        .catch(err => console.log(err))
}

find(element)
