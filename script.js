//Displaying all the movies on the screen as posters
function addMoviesToDom(movies) {
    const myUl = document.getElementById("all-movies");
    const moviesLiArray = [];
    const liArray = [];
    movies.map((movie) => {
        const moviesLi =('<li>' + [movie.title, ' ' +  movie.year, ' ' + movie.imdbID, ' ' + movie.type, ' ' + movie.poster] + '</li>');
        moviesLiArray.push(moviesLi)
        const li = document.createElement('li');
        liArray.push(li.innerHTML = li.innerHTML + String(movie.poster));
    })
    liArray.forEach((element) => {  //Adding lis to the DOM
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement("img");
        a.setAttribute("target", "_blank", "href", element, )
        img.setAttribute("src", element);
        myUl.appendChild(li);
        li.appendChild(a).appendChild(img);
    })
    creatLink(movies); 
    
}
addMoviesToDom(movies);

// Eventlistener function
function addEventListeners(){
    const allRadioButtons = document.querySelectorAll('input[name="film-type"]');
    allRadioButtons.forEach(element => {
        element.addEventListener('change', () => {
            if (element.checked) {
                console.log(element.value + " Button clicked")
                switch (element.value) {
                    case "new-movies":
                        removeLis ();
                        filterLatestMovies();
                        break;
                    case "avenger":
                        removeLis ()
                        filterMovies("Avenger");
                        break;
                    case "x-men":
                        removeLis ()
                        filterMovies("X-Men");
                        break;
                    case "princess":
                        removeLis ()
                        filterMovies("Princess");
                        break;
                    case "batman":
                        removeLis ()
                        filterMovies("Batman");
                        break;
                }
            }  
        })
    })
}
addEventListeners();
 
//Function for filtering the movies
function filterMovies(wordInMovie){
    const result = [];
    let filter = "title";
    for(i=0; i<movies.length; i++) {
        for(filter in movies[i]) {
            if(movies[i][filter].includes(wordInMovie)){
                result.push(movies[i]);
            } 
        }
    }
    addMoviesToDom(result)
}

//Function to filter latest movies
function filterLatestMovies () {
    const result = [];
    let filter = "year";
     for(i=0; i<movies.length; i++) {
        for(filter in movies[i]){
        if (movies[i][filter] >= 2014) {
            result.push(movies[i]) 
            }
        }
}
addMoviesToDom(result);
}

//Remove li from the DOM
function removeLis () {
    const parent = document.getElementById("flex").getElementsByTagName("ul")[0];
    parent.innerHTML = "";
}

//Creating links to the imbd
function creatLink (movies) {
    const result = [];
    movies.map((movie) => { 
        let id = movie.imdbID;
        result.push(id);
    })
    const linkArray = [];
    result.forEach((element) => {   //Making link out of the imbdID
    const href = "https://www.imdb.com/title/"+element+"/";
    linkArray.push(href); 
})
    const changeA = function (arr) {    //Changes all href for a in DOM
        const a = document.getElementsByTagName("a");
        arr.forEach((element, index) => {
            a[index].href = element;
        })
    }
    changeA(linkArray);
}
