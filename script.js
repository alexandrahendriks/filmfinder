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







