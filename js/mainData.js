const mainData = () => {
    fetch('https://anime-database-8ca84-default-rtdb.europe-west1.firebasedatabase.app/anime.json').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    })
}

mainData();