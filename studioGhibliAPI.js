let baseURL = 'https://ghibliapi.herokuapp.com/films';

const section = document.querySelector('section');
const slideContainer = document.getElementById('slideContainer');
const displayItem = document.querySelectorAll('.displayItem');

fetch(baseURL)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(json){
        displayResults(json)
    })

    //FILLING OUT 'SECTION' OF HTML

function displayResults(json) {

    // SORTING INFORMATION

    function sortByRating(movies){ //a function which loops over the json array, creating a new array of Ghibli movies sorted by rotten tomato ratings. 
        
        let sortedMovieList = [];
        for (let i = 0; i < movies.length; i++){ //Looping over json array of movies

            if(i === 0){
                sortedMovieList.push(movies[i]);
            } else if (parseInt(movies[i].rt_score) < parseInt(sortedMovieList[sortedMovieList.length - 1].rt_score)){
                sortedMovieList.push(movies[i]);
            } else {
                for(let j = 0; j < sortedMovieList.length; j++){//Looping over sortedMovieList to check rt_score value and placing in order. 
                    if(parseInt(movies[i].rt_score) >= parseInt(sortedMovieList[j].rt_score)){ //had to use parseInt() because rt_score came in as a string. 
                        sortedMovieList.splice(j, 0, movies[i]);
                        break
                    }
                }
            }
        }
        return sortedMovieList
    }

    let rankedMovies = sortByRating(json);
    console.log(rankedMovies);

    // DOM DISPLAY WORK

    let rankingDiv = document.getElementById('rankingList');
    let rankingHeader = document.createElement('h1');
    let slideContainer = document.createElement('div')
    let slideLeft = document.createElement('div');
    let slide = document.createElement('div')
    let slideRight =document.createElement('div');
    let navBtns = document.createElement('div');
    let previousBtn = document.createElement('button');
    let nextBtn = document.createElement('button');
    let moreBtn = document.createElement('button')
    let infoContainer = document.createElement('div');

    rankingHeader.setAttribute('id', 'rankingHeader')
    slideContainer.setAttribute('id', 'slideContainer');
    slideLeft.setAttribute('id', 'slideLeft');
    slide.setAttribute('id', 'slide');
    slideRight.setAttribute('id', 'slideRight');
    navBtns.setAttribute('id', 'navBtns');
    nextBtn.setAttribute('id', 'nextBtn');
    previousBtn.setAttribute('id', 'previousBtn');
    moreBtn.setAttribute('id', 'moreBtn');
    infoContainer.setAttribute('id', 'infoContainer');

    nextBtn.innerText = '>';
    previousBtn.innerText = '<';
    rankingHeader.innerText = `Starting Strong: The ${rankedMovies.length} Best Studio Ghibli Films by Rotten Tomatoes Score`;
    moreBtn.innerText = 'v';

    //CREATING CAROUSEL ORDER

    rankingDiv.appendChild(rankingHeader);
    rankingDiv.appendChild(slideContainer);
    rankingDiv.appendChild(navBtns);
    rankingDiv.appendChild(moreBtn);
    rankingDiv.appendChild(infoContainer);
    slideContainer.appendChild(slideLeft);
    slideContainer.appendChild(slide);
    slideContainer.appendChild(slideRight);
    navBtns.appendChild(previousBtn);
    navBtns.appendChild(nextBtn);

    
    rankingDiv.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .4)), url(./assets/bg578ae244-7750-4d9f-867b-f3cd3d6fecf4.jpg)"
    // rankingDiv.style.height = "100vh"
    rankingDiv.style.backgroundRepeat = 'no-repeat';
    rankingDiv.style.backgroundSize = 'cover';

    //APPENDING DISPLAY INFO TO SLIDES AND TO MORE INFO DIV

    for (let i = 0; i < rankedMovies.length; i++) {

        let displayItem = document.createElement('div'); //Creating HTML Elements\
        let displayItemLeft = document.createElement('div');
        let displayItemRight = document.createElement('div');
        let displayImg = document.createElement('img');
        let displayImgLeft = document.createElement('img');
        let displayImgRight = document.createElement('img');
        let title = document.createElement('p');
        let score = document.createElement('p');
        // let moreBtn = document.createElement('button');
        let moreInfo = document.createElement('div');
        let synopsis = document.createElement('p');
        let director = document.createElement('p')
        let year = document.createElement('p')

        displayItem.setAttribute('class', 'displayItem');//Assigning Elements class values for collapse function
        displayItemLeft.setAttribute('class', 'displayItemLeft');
        displayItemRight.setAttribute('class', 'displayItemRight');
        displayImg.setAttribute('class', 'displayImg');
        displayImgLeft.setAttribute('class', 'displayImgLeft');
        displayImgRight.setAttribute('class', 'displayImgRight');
        title.setAttribute('class', 'title');
        score.setAttribute('class', 'score');
        // moreBtn.setAttribute('class', 'moreBtn');
        moreInfo.setAttribute('class', 'moreInfo');
        synopsis.setAttribute('class', 'synopsis');
        director.setAttribute('class', 'director');
        year.setAttribute('class', 'year');

        displayImg.src = `./assets/tile${rankedMovies[i].id}.jpg`;  //Giving elements values
        displayImgLeft.src = `./assets/tile${rankedMovies[i].id}.jpg`;
        displayImgRight.src = `./assets/tile${rankedMovies[i].id}.jpg`;
        score.innerText = rankedMovies[i].rt_score;
        title.innerText = `No. ${i+1} is "${rankedMovies[i].title}"`;
        // moreBtn.innerText = 'More...';
        synopsis.innerText = `Synopsis: ${rankedMovies[i].description}`;
        director.innerText = `Director: ${rankedMovies[i].director}`;
        year.innerText = `Year: ${rankedMovies[i].release_date}`;

        displayItem.appendChild(displayImg); //inserting elements into proper positions
        displayItem.appendChild(title);
        displayItemLeft.appendChild(displayImgLeft);
        displayItemRight.appendChild(displayImgRight);
        displayItem.appendChild(score);
        // displayItem.appendChild(moreBtn);
        // moreBtn.insertAdjacentElement('afterend', moreInfo);
        slideLeft.appendChild(displayItemLeft);
        slide.appendChild(displayItem); 
        slideRight.appendChild(displayItemRight);
        moreInfo.appendChild(synopsis);
        moreInfo.appendChild(director);
        moreInfo.appendChild(year);
        infoContainer.appendChild(moreInfo);
    } 
    
    let displayItem = document.querySelectorAll('.displayItem'); //Creating HTML Elements
    let displayItemLeft = document.querySelectorAll('.displayItemLeft');
    let displayItemRight = document.querySelectorAll('.displayItemRight');
    let displayImg = document.querySelectorAll('.displayImg');
    let title = document.querySelectorAll('.title');
    let score = document.querySelectorAll('.score');
    // let moreBtn = document.querySelectorAll('.moreBtn');
    let moreInfo = document.querySelectorAll('.moreInfo');
    let synopsis = document.querySelectorAll('.synopsis');
    let director = document.querySelectorAll('.director')
    let year = document.querySelectorAll('.year')
    
    
    //"SLIDE" / carousel MENU
    displayItem.forEach(item => item.style.display = 'none');
    displayItemLeft.forEach(item => item.style.display = 'none');
    displayItemRight.forEach(item => item.style.display = 'none');
    displayItem[0].style.display = 'block';
    displayItemLeft[displayItemLeft.length-1].style.display = 'block';
    displayItemRight[1].style.display = 'block';

    let counter = 0;
    //Carousel navigation logic
    nextBtn.addEventListener('click', e => {
        displayItem.forEach(item => item.style.display = 'none');
        displayItemLeft.forEach(item => item.style.display = 'none');
        displayItemRight.forEach(item => item.style.display = 'none');
        for (let i = counter; ; ) {
            if(counter >= displayItem.length-1){
                counter = 0;
                displayItemLeft[displayItemLeft.length-1].style.display = 'block'
                displayItem[counter].style.display = 'block';
                displayItemRight[counter+1].style.display = 'block'
                rankingDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .4)), url(./assets/bg${rankedMovies[counter].id}.jpg)`;
                rankingDiv.style.height = "100vh"
                rankingDiv.style.backgroundRepeat = 'no-repeat';
                rankingDiv.style.backgroundSize = 'cover';
                if(moreOpen){
                    moreInfo.forEach(info => info.style.display = 'none');
                    moreInfo[counter].style.display = 'block';
                }
                break;
            } else if(e){
                counter++
                displayItemLeft[counter-1].style.display = 'block'
                displayItem[counter].style.display = 'block';

                counter===displayItem.length-1 ? displayItemRight[0].style.display = 'block'
                : displayItemRight[counter+1].style.display = 'block';

                rankingDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .4)), url(./assets/bg${rankedMovies[counter].id}.jpg)`;
                rankingDiv.style.height = "100vh"
                rankingDiv.style.backgroundRepeat = 'no-repeat';
                rankingDiv.style.backgroundSize = 'cover';
                if(moreOpen){
                    moreInfo.forEach(info => info.style.display = 'none');
                    moreInfo[counter].style.display = 'block';
                }
                break;
            }
        }
        console.log(counter)
    })

    previousBtn.addEventListener('click', e => {
        displayItem.forEach(item => item.style.display = 'none')
        displayItemLeft.forEach(item => item.style.display = 'none');
        displayItemRight.forEach(item => item.style.display = 'none');
        for (let i = 0; ;){
            if(counter <= 0){
                counter = displayItem.length-1;
                displayItemLeft[counter-1].style.display = 'block'
                displayItem[counter].style.display = 'block';
                displayItemRight[0].style.display = 'block'
                rankingDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .4)), url(./assets/bg${rankedMovies[counter].id}.jpg)`;
                rankingDiv.style.height = "100vh"
                rankingDiv.style.backgroundRepeat = 'no-repeat';
                rankingDiv.style.backgroundSize = 'cover';
                if(moreOpen){
                    moreInfo.forEach(info => info.style.display = 'none');
                    moreInfo[counter].style.display = 'block';
                }
                break;
            } else if(e){
                counter--

                counter === 0 ? displayItemLeft[displayItemLeft.length-1].style.display = 'block'
                : displayItemLeft[counter-1].style.display = 'block'

                displayItem[counter].style.display = 'block';
                displayItemRight[counter+1].style.display = 'block';
                rankingDiv.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .4)), url(./assets/bg${rankedMovies[counter].id}.jpg)`;
                rankingDiv.style.height = "100vh"
                rankingDiv.style.backgroundRepeat = 'no-repeat';
                rankingDiv.style.backgroundSize = 'cover';
                if(moreOpen){
                    moreInfo.forEach(info => info.style.display = 'none');
                    moreInfo[counter].style.display = 'block';
                }
                break;
            }
        }
        console.log(counter)
    })


    console.log(displayItem)

    //COLLAPSE CODE FOR infoContainer 

    let moreOpen = false;

    moreInfo.forEach(info => info.style.display = 'none');

    moreBtn.addEventListener('click', e => {
        if(e && moreInfo[counter].style.display === 'block'){
            moreInfo[counter].style.display = 'none';
            moreBtn.innerText = 'v'

            moreOpen = false;
        } else {
            moreInfo.forEach(info => info.style.display = 'none');
            moreInfo[counter].style.display = 'block';
            moreBtn.innerText = '^'
            moreOpen = true;
        }
    })

    // for(let i = 0; i < moreBtn.length; i++){
    //     moreBtn[i].addEventListener('click', e => {
    //         if(e && moreInfo[i].style.display === 'block'){
    //             moreInfo[i].style.display = 'none'
    //         } else if(e){
    //             moreInfo.forEach(div => div.style.display = 'none');
    //             moreInfo[i].style.display = 'block'
    //         } 
    //     })
        
    // }
} 

