//Displaying all the movies on the screen as posters
function addMoviesToDom(movies) {
    let myUl = document.getElementById("all-movies");
    let moviesLiArray = [];
    let liArray = [];
    console.log(moviesLiArray);
    console.log(liArray);
    movies.map((movie) => {
        let moviesLi =('<li>' + [movie.title, ' ' +  movie.year, ' ' + movie.imdbID, ' ' + movie.type, ' ' + movie.poster] + '</li>');
        moviesLiArray.push(moviesLi)
        let li = document.createElement('li');
        liArray.push(li.innerHTML = li.innerHTML + String(movie.poster));
    })
    liArray.forEach((element) => {
        let li = document.createElement('li');
        let img = document.createElement("img");
        img.setAttribute("src", element);
        myUl.appendChild(li);
        li.appendChild(img)

    });
}
addMoviesToDom(movies); 

const allRadioButtons = document.querySelectorAll('input[name="film-type"]');
console.log(allRadioButtons);

function addEvenentListeners(buttons){
     for(i=0; i < buttons.length; i++) {
        buttons[i].onchange = function() {
            console.log(this.value);
            if (buttons != null) {
                //console.log(" radio button checked");
            }
        }
    } 
}
addEvenentListeners(allRadioButtons);


function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "new-movies":
            console.log("New movies");
            break;
        case "avenger":
            console.log("Avenger movies");
            
            break;
        case "x-men":
            console.log("X-men movies");
            break;
        case "princess":
            console.log("Princess movies");
            filterMovies(event.target.value);
            break;
        case "batman":
            console.log("Batman movies");
            break;
    }
}

function filterMovies(word){

    movies.filter((movie) => {
        if (movie.title("princess") === true) {
            console.log(movie.title)
        }    
})
}
filterMovies(movies)


const filteredItems = items.filter((item) => {
    return item.price <= 100
})



