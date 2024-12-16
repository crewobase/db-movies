import "./style.css";
import "./styless.css";
import "./counter.js"
document.querySelector("#app").innerHTML = `
  <section id="premier">
  <header>
     <div class="header-div">
     <div class="first-up">
       <img class = "logo-header" src="src/assets/img/logo.png" alt="blank">
       <img class = "saintstream" src="src/assets/img/SaintStream.png" alt="blank">
     </div>
      <div class="second-up">
      <ul>
        <li>Home</li>
        <li>Discover</li>
        <li>Movie Release</li>
        <li>Forum</li>
      </ul>
      </div>
      <div class="third-up">
     <img class="icons-top" src="src/assets/img/search.png" alt="blank">
     <img class="icons-top" src="src/assets/img/bell.png" alt="blank">
     <img class="icons-top" src="src/assets/img/image.png" alt="blank">
     <img class="icons-top" src="src/assets/img/Arrow - Down 2.png" alt="blank">
      </div>
    </div>
 </header>
 <section id="hero">
     <div class="season-sec">
        <div><button id="season-3">Season3</button>
        </div> <br/>
        <div><h3>The Mandalorian</h3>
        </div><br/>
        <div><p>
          2h40m . 2022 . Fantasy . Actions
          </p></div> <br/>
     <div>
        <p>
          The third season of the American television series
          The Mandalorian stars
          Pedro Pascal as the title character, a bounty hunter 
          traveling to Mandalore to redeem his past transgression
          with his adopted son Grogu and being aided on their journey
          by fellow Mandalorian BO-Katan Kryze.
        </p>
      </div> <br/>
      <div class="p-w-a-btn">
        <button class="play-btn">
         <div> <img src="src/assets/img/icons8-play-50.png" alt="play">
          Play Now</div></button>
        <button class="watch-btn">
          <div> <img src="src/assets/img/icons8-play-50.png" alt="traller">
            Watch Traller</div></button>
        <button class="watch-list">
          <div> <img src="src/assets/img/icons8-bookmark-24.png" alt="book">
            Add Watchlist</div></button>
      </div>
      </div>
 </section>
 <br/>
 <br/>
 <br/>
 </section>
 
  <ul class="hbo">
    <li> <img src="src/assets/img/icons8-citibank-100.png" alt="logo"> </li>
    <li> <img src="src/assets/img/icons8-disney-64.png" alt="logo"> </li>
    <li> <img src="src/assets/img/icons8-hbo-64.png" alt="logo"> </li>
    <li> <img src="src/assets/img/icons8-marvel-48.png" alt="logo"> </li>
    <li> <img src="src/assets/img/icons8-netflix-logo-48.png" alt="logo"> </li>
    <li> <img src="src/assets/img/icons8-pixar-64.png" alt="logo"> </li>
    <li> <img src="src/assets/img/icons8-star-wars-48.png" alt="logo"> </li>
  </ul>
  
  <section class=" swiper popular-release">
      <div class="heading-three-item">
        <h3 class="movie-heading-popular">Popular of the week</h3>
      </div>
      <div class="new-popular-wrapper swiper-wrapper">
        <div class="new-popular-item swiper-slide">
          <div class="number">1</div>
          <div class="image-popular-release">
            <img class="poster-img" src="src/assets/img/raymond.jpeg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>Raymond Redington</h4>
            <span class="movie-genre">
              <p>Investigation.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div>
        <div class="new-popular-item swiper-slide">
          <div class="number">2</div>
          <div class="image-popular-release">
            <img class="poster-img" src="src/assets/img/thi-300.jpeg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>300</h4>
            <span class="movie-genre">
              <p>Ancient.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div>
        <div class="new-popular-item swiper-slide">
          <div class="number">3</div>
          <div class="image-popular-release">
            <img class="poster-img"src="src/assets/img/shot.jpeg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div> 
            <h4>Shots</h4>
            <span class="movie-genre">
              <p>Reality.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div> <div class="new-popular-item swiper-slide">
          <div class="number">3</div>
          <div class="image-popular-release">
            <img class="poster-img" src="src/assets/img/last-night.jpeg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>Last Night</h4>
            <span class="movie-genre">
              <p>DarkSide.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div> <div class="new-popular-item swiper-slide">
          <div class="number">3</div>
          <div class="image-popular-release">
            <img class="poster-img" src="src/assets/img/city-of-war.jpeg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>City of War</h4>
            <span class="movie-genre">
              <p>Crime.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div>
        <div class="new-popular-item swiper-slide">
          <div class="number">4</div>
          <div class="image-popular-release">
            <img class="poster-img" src="src/assets/img/get-rich.jpeg" alt="img">
          </div>
          <a href="" class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>Get Rich</h4>
            <span class="movie-genre">
              <p>Streets.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </a>
        </div>
      </div>
      <div class="swiper-button-next"></div>

    </section>
  <section class="watch-movie">
    <h3 class="wtm">Watch Movie</h3>
    <div id="first-sec">
    </div>
  </section>
 

    <section id="new-release">
      <div class="new-release">
        <h3>Just Realesed</h3>
      </div>
      <div class="item-wrapper">
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="src/assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>
      </div>

    </section>
    <footer>
      <div class="footer">
        <div class="footer-item-one">
          <div class="footer-heading">
            <h3>Our platform is trusted by millions & features best updated movies all around the world.
            </h3>
          </div>
        </div>
        <div class="footer-item-two">
          <ul class="unordered-list">
            <div class="links"><a href="">Home</a>/</div>
            <div class="links"><a href="">Release</a>/</div>
            <div class="links"><a href="">Discover</a>/</div>
          </ul>
          <div class="social-media">
            <img class="social-media-icon" src="src/assets/img/Facebook.png" alt="facebook-icon" />
            <img class="social-media-icon" src="src/assets/img/Instagram.png" alt="instagram-icon" />
            <img class="social-media-icon" src="src/assets/img/Twitter.png" alt="twitter-icon" />
            <img class="social-media-icon" src="src/assets/img/Google.png" alt="google-icon" />
          </div>
        </div>
      </div>
      <div class="contact-footer">
        <div class="contact-policy">
          <span>Privacy Policy</span>
          <span>Terms of service</span>
          <span>Language</span>
        </div>
        <div class="copyright">
          &copy 2024
        </div>
      </div>
    </footer>
  </div>
  <!-- swiper js -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script type="module" src="./javascript/main.js"></script>
</body>

</html>
</body>
</html>

`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmEwM2JhZjAwODc4YTBhNmE4MDYwN2U1ZGI5NzFmMCIsIm5iZiI6MTczMzc4Mzc4MC4yNTUsInN1YiI6IjY3NTc3MGU0MGFiN2U4MDc3Y2ZiZjFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XXDs4eNLPoVC8cYP4I4R_ZT48CSvQPpCMqUGOWCPlVk",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const firstSection = document.getElementById("first-sec");

    for (let index = 0; index < data.results.length; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";
      const img = document.createElement("img");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster";
      firstSection.appendChild(img);
    }
  })

  .catch((err) => console.error(err));

  const API_KEY = "de8d95a8fd855c524e4704e6647ae343";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
async function fetchMovies() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    displayMovies(data.results);
    console.log(data);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
function displayMovies(movies) {
  const movieContainer = document.querySelector(".item-wrapper");
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    const cardDetail = document.createElement("div");
    cardDetail.className = "movie-details";
    movieCard.appendChild(cardDetail);
    const movieTitle = document.createElement("h3");
    movieTitle.className = "watch-list-movie-title";
    movieTitle.textContent = movie.title;
    const movieParagraph = document.createElement("p");
    movieParagraph.className = "movie-paragraph";
    movieParagraph.textContent = movie.paragraph;
    movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Action - Movies`;
    cardDetail.appendChild(movieTitle);
    cardDetail.appendChild(movieParagraph);
    const moviePoster = document.createElement("img");
    moviePoster.className = "movie-poster";
    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieParagraph);
    movieContainer.appendChild(movieCard);
  });
}
fetchMovies();