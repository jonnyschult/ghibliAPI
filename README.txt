I chose to do the studio Ghibli API. Full disclosure, I have never seen any of the films. 

A couple of notes on the project. 

1. API USAGE
    a. I believe all of the API information is accessed and used in bottom half of the page for the movie rankings. 
    b. I used description, director, id, release_date, rt_score and title from the API.

2. DOM and Display
    a. I included on Jumbotron to get more used to Bootstrap. 
    b. Everything inside the .rankignList div was generated using DOM, some basically the entire second section of the page. 
    c. The site should be mostly dynamic, in that if a new film were added to the API, virtually everything on the site would auto update, but I would need to add photos to assets of the new film, as images were not included in the api. 

3. Style
    a. I heavily emphasized the visual artistry of the films on page. To do this, I downloaded pictures of the films (I believe they were open to use), gave them the name of the film id number from the API plus "tile" or "bg" (background). This way I could auto assign the right photos to the right movie using a for loop and interpolation. 
    b. The Buttons took a minimal approach to demphasize them. 
    c. I used a carousel sort of menu. I wanted to do a slide menu, but I wasn't really sure how to do that, and I kind of wanted to figure something out on my own. I'm sure it's not original, and I was probably inspired by looking around, but I sort of struggled through the logic of my own carousel because I think it is aesthetically superior to the lists I originally had. 
    d. Shadow effects were used throughout to give the impression of tiles floating on a background. 

4. Logic Work
    a. sorting the movies into a new array. The movies come in an array by chronological order. I ordered them in a new array by rotten tomato score (rt_score). This took a bit of logic and realizing how to access the value while looping. 
    b. collapsing button: I had initially made a list on the second page using ol and li tags. I wanted each film to have a "more..." button denoting more information, which defaulted was collapsed but could be opened by clicking on the more... button. I also wanted this button to recollapse when clicked, and should collapse any other open more information areas. So, if you clicked more information on movie two while the more information was displaying on movie one, movie one should collapse and movie two should open. Also, the background should change to the movie specific button if clicked and revert to a default when closed. This was a puzzle, which I got to work, but it was an aesthetic nightmare. I made the decision to blow it up and start again, but that logic was the foundation of currently implemented solution. 
    c. Carousel: The carousel works like this. There is a container div of three "slide" divs, "slideLeft" "slide" and "slideRight". Inside of each slide div I appended the rankedMovies.length number of "display" divs, which housed a tile img, title and raking. All are defaulted to stlye.display = 'none', except rankedMovies.length-1 for slideLeft, 0 for slide, and 1 for slideRight. This was the carousel would default to showing you the top ranked movie, and there would be buttons to navigate to the left, "previous" which would take you to the lowest ranked movie, and to the right, the next movie in order. The carousel can go round and round indefinitely. There are a series of conditionals which allow "next" to take you to the first ordered movie from the last and to the last from the first with previous. 
    d. It was tricking figuring out how to get the pictures to auto update. It took manually entering in jpg names, but once that was accomplished, it was easy enough to assign using the forloop. 
    e. It also took a bit of thought how to keep the more info div open while navigating the next and previous button and still having it displaying the right information. Ultimately, I had the next and previous button control the content of the moreInformation div, which the moreBtn just opening and closing the section as desired by the user. 

5. Lessons
    a. I feel substantially more confident in my ability to work with API information. This has been very helpful in that regard. I kind of get it, even while knowing there is an ocean of more things to learn. 
    b. It was impressed upon me the necessity of preplanning. I went into this a bit incautiously. This ultimately lead to me having to negate hours of work and some tough logic solutions due to it just looking bad. 
    c. It feels like there is a lot more to be done, but perhaps we'll always feel that way. Maybe I'll improve upon it later. It could have been better with a bit more forethought which would have freed up more time. 