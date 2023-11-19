const searchBtn = document.getElementById('searchBtn');
const addBtn = document.getElementById('addBtn');
const searchText = document.getElementById('searchText');
const resultsBox = document.getElementById('results');


host = '127.0.0.1'
port = '8000'
url = `${host}:${port}`

data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {}
}

addBtn.addEventListener('click', async () => {
    data.body = JSON.stringify({text: searchText.value})
    let res = await fetch(`embedding/`, data)
    const result = await res.json();
    resultsBox.innerHTML = result['embedding']
})

searchBtn.addEventListener('click', async () => {
    data.body = JSON.stringify({text: searchText.value})
    let res = await fetch(`embedding/`, data)
    const result = await res.json();
    resultsBox.innerHTML = result['embedding']
})
