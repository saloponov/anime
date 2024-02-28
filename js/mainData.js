const mainData = () => {

    const renderAnimeList = (anime, ganres) => {
        console.log(anime);
        console.log(ganres);
    }
    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery')


        wrapper.innerHTML = ''

        array.forEach(item => {
            console.log(item);
            wrapper.insertAdjacentHTML('afterbegin', 
            `<div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
                <div class="ep">${item.rating} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
                <h5><a href="/anime-details.html">${item.title}</a></h5>
            </div>
           `);
        });

        wrapper.querySelectorAll('set-bg').forEach((element) => {
            element.style.backgroundImage = `url(${element.dataset.setbg})`;
        })
    }

    fetch('https://anime-database-8ca84-default-rtdb.europe-west1.firebasedatabase.app/anime.json').then((response) => {
        return response.json()
    }).then((data) => {
        const ganres = new Set()
        renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

        data.forEach((item) => {
            ganres.add(item.ganre)
        })
        
        renderAnimeList(data, ganres);
    })
}

mainData();