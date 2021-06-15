fetch("https://api.github.com/repositories/19438/commits").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});
