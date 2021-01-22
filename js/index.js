const moviesContainer = document.getElementById('movies')
const all = document.getElementById('all')
const burgerButton = document.querySelector('#burger')
const menu = document.querySelector('.nav')


function hideShow(){
    if(menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else{
        menu.classList.add('is-active');
    }
}

burgerButton.addEventListener('click', hideShow)


const UI = (data) => {
    return `
        <div class="movies-api__img">
            <img src=${data.Poster} alt=${data.Title}/>
            <div class="movies-api__hover">
                <div>
                    <h1>${data.Title}</h1>
                    <button class="btn btn-one">WATCH NOW</button>
                    <a href=${`/information.html?title=${data.imdbID}`} class="btn btn-two">MORE INFO</a>
                </div>
            </div>
        </div>
    `
}


const getData = (movies) => {
    let result = ''
    movies.forEach(element => {
        fetch(`https://www.omdbapi.com/?apikey=ac7b0a43&t=${element}&y=2020`)
            .then(response => response.json())
            .then(data => {
                result += UI(data)

                moviesContainer.innerHTML = result
            })
            .catch(err => console.log(err))
    })
}

const getAll = () => {
    const topMovies = ['tt7126948', 'tt4154756', 'tt5463162', 
                        'tt3606756', 'tt1825683', 'tt5104604', 
                        'tt5095030', 'tt6911608', 'tt5164214', 
                        'tt4881806', 'tt4073790', 'tt6133466'];

    let result = ''
    topMovies.forEach(element => {
        fetch(`https://www.omdbapi.com/?apikey=ac7b0a43&i=${element}`)
            .then(response => response.json())
            .then(data => {
                result += UI(data)

                moviesContainer.innerHTML = result
            })
            .catch(err => console.log(err))
    });
}

all.addEventListener('click', () => getAll())

window.addEventListener('load', () => {
    all.click()
    all.focus()
})


window.releases.addEventListener('click', () => {
    const movies = ['monster hunter', 'tenet', 'mulan', 
                    'wonder woman', "Rifkin's Festival", 
                    'hunted', 'Blithe Spirit']

    getData(movies)
})

window.popular.addEventListener('click', () => {
    const movies = ['soul', 'Breach', 'Skylines', 
                    'Cosmoball', 'Shadow in the Cloud']

    getData(movies)
})

window.trends.addEventListener('click', () => {
    const movies = ['wonder woman', 'soul', 'Breach', 
                    'Skylines', 'Cosmoball', 'Shadow in the Cloud', 
                    'Shadow in the Cloud']
    
    getData(movies)
})

window.recomendations.addEventListener('click', () => {
    const movies = ['wonder woman', 'soul', 'Breach', 
                    'Skylines', 'Cosmoball', 'Shadow in the Cloud', 
                    'Shadow in the Cloud', 'Jurassic World']
    getData(movies)
})


