function buildTable() {
  fetch("https://api.github.com/repositories/19438/commits").then((res) => {
    res.json().then((data) => {
      console.log(data);

      if (data.length > 0) {
        let tableBody = "";

        data.forEach((commit) => {
          tableBody += `
<tr>
<td>${commit.commit.author.name}</td>
<td>${commit.commit.author.date}</td>
<td>${commit.commit.message}</td>
<td>${commit.commit.url}</td>
</tr>
`;
        });

        document.getElementById("data").innerHTML = tableBody;
      }
    });
  });
}

buildTable();
