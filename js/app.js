async function getJoke() {
  const res = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const data = await res.json();
  return data;
}

let joke_setup = document.getElementById("joke-setup");
let joke_punchline = document.getElementById("joke-punchline");

getJoke()
  .then((joke) => {
    joke.forEach((j) => {
      joke_setup.innerHTML = j["setup"];
      joke_punchline.innerHTML = j["punchline"];
    });
  })
  .catch((err) => {
    console.log("Something went Wrong 😲");
  });

function reload() {
  getJoke()
    .then((joke) => {
      joke.forEach((j) => {
        joke_setup.innerHTML = j["setup"];
        joke_punchline.innerHTML = j["punchline"];
      });
    })
    .catch((err) => {
      console.log("Something went Wrong 😲");
    });
}
