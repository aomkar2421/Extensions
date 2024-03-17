fetch("https://v2.jokeapi.dev/joke/any")
  .then((data) => data.json())
  .then((jokesData) => {
    const setup = jokesData.setup;
    const delivery = jokesData.delivery;
    const joke = jokesData.joke;
    const p = document.getElementById("a");

    if(setup == undefined || delivery == undefined){
        p.innerHTML = joke;
    }else{
        p.innerHTML = setup + " " + delivery;
    }
});


// fetch("https://api.api-ninjas.com/v1/jokes?limit=1")
//   .then((data) => data.json())
//   .then((jokesData) => {
//     const joke = jokesData.joke;
//     const p = document.getElementById("a");
//     a.innerHTML = joke;
//     console.log(joke)
// });




