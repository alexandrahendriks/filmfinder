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


// This function will be activated when the content has been loaded, and add an event to each radio button.
function addEventListeners(){
    const allRadioButtons = document.querySelectorAll('input[name="film-type"]');
    allRadioButtons.forEach(element => {
        element.addEventListener('change', () => {
            if (element.checked) {
                console.log(element.value + " Button clicked")
            } 
        })
    })
}
addEventListeners()

//Function for each radio button 
function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "new-movies":
            console.log("New movies");
            filterMovies("2014");
            break;
        case "avenger":
            console.log("Avenger movies");
            filterMovies("Avenger");
            break;
        case "x-men":
            console.log("X-men movies");
            filterMovies("X-Men");
            break;
        case "princess":
            console.log("Princess movies");
            filterMovies("Princess");
            break;
        case "batman":
            console.log("Batman movies");
            filterMovies("Batman");
            break;
    }
}

//Function for filtering the movies
let array = [];
function filterMovies(wordInMovie){
    let result = [];
    let filter = "title";
    for(i=0; i<movies.length; i++) {
        for(filter in movies[i]) {
            if(movies[i][filter].indexOf(wordInMovie)!=-1){
                result.push(movies[i]);
            } 
        }
    }
    console.log(result)
    array.push(result)
    addMoviesToDom(result)
}
console.log(array)


/* Berakom ide a leirast ahhoz a reszhez:
 - As the last step, you want to call this filterMovies, the function addMoviestoDom(), 
 but now with your filtered movies list, instead of all the movies list. : Ez van arra hogy csak a filtered filmek jelenljenek meg.
 - Ezt meg a eventhez irtak(lehet en hagytam ki valamit) : Use the change event. 
 Then there will be an event when the circle of the radio button is checked or unchecked.
*/
