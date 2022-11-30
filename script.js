//Displaying all the movies on the screen as posters
 function addMoviesToDom(movies) {
    let myUl = document.getElementById("all-movies");
    let moviesLiArray = [];
    let liArray = [];
    //console.log(moviesLiArray);
    //console.log(liArray);
    movies.map((movie) => {
        let moviesLi =('<li>' + [movie.title, ' ' +  movie.year, ' ' + movie.imdbID, ' ' + movie.type, ' ' + movie.poster] + '</li>');
        moviesLiArray.push(moviesLi)
        let li = document.createElement('li');
        liArray.push(li.innerHTML = li.innerHTML + String(movie.poster));
    })
    liArray.forEach((element) => {  //Adding lis to the DOM
        let li = document.createElement('li');
        let a = document.createElement('a');
        let img = document.createElement("img");
        a.setAttribute("href", element)
        img.setAttribute("src", element);
        myUl.appendChild(li);
        li.appendChild(a).appendChild(img);
    })
    creatLink(movies); 
}
addMoviesToDom(movies);


// Eventlistener function  --- Question to the teacher about this: My functions are working even withouth this function.
// Why did i need this? Did I miss something?
function addEventListeners(){
    const allRadioButtons = document.querySelectorAll('input[name="film-type"]');
    allRadioButtons.forEach(element => {
        element.addEventListener('change', () => {
            if (element.checked) {
                //console.log(element.value + " Button clicked")
            }  
        })
    })
}
addEventListeners();
 
//Function for each radio button
function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "new-movies":
            //console.log("New movies");
            removeLis ();
            filterLatestMovies();
            break;
        case "avenger":
            //console.log("Avenger movies");
            removeLis ()
            filterMovies("Avenger");
            break;
        case "x-men":
            //console.log("X-men movies");
            removeLis ()
            filterMovies("X-Men");
            break;
        case "princess":
            //console.log("Princess movies");
            removeLis ()
            filterMovies("Princess");
            break;
        case "batman":
            //console.log("Batman movies");
            removeLis ()
            filterMovies("Batman");
            break;
    }
}

//Function for filtering the movies
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
    addMoviesToDom(result)
}

//Function to filter latest movies
function filterLatestMovies () {
    let result = [];
    let filter = "year";
     for(i=0; i<movies.length; i++) {
        for(filter in movies[i]){
        if (movies[i][filter] >= 2014) {
            //console.log(movies[i]);
            result.push(movies[i]) 
            }
        }
    let
}
//console.log(result);
addMoviesToDom(result);
}

//Remove li from the DOM
function removeLis () {
    let parent = document.getElementById("flex").getElementsByTagName("ul")[0];
    parent.innerHTML = "";
}

//Creating links to the imbd
function creatLink (movies) {
    let result = [];
    movies.map((movie) => { 
        let id = movie.imdbID;
        result.push(id);
    })
    let linkArray = [];
    result.forEach((element) => {   //Making link out of the imbdID
    let href = "https://www.imdb.com/title/"+element+"/";
    linkArray.push(href); 
})
    //console.log(result)
    //console.log(linkArray)
    const changeA = function (arr) {    //Changes all href for a in DOM
        const a = document.getElementsByTagName("a");
        arr.forEach((element, index) => {
            a[index].href = element;
        })
    }
    changeA(linkArray);
}


