// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

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
  const movieContainer = document.querySelector(".img-release-wrap");
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


/*swiper js config */
// var swiper = new Swiper(".hero-section", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// var swiper = new Swiper(".popular-release", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//     },
// });