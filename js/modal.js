const modal = () => {
    const modalSearch = document.querySelector('.search-model')
    const modalSearchBtn = document.querySelector('.search-switch')
    const modalSearchClose = document.querySelector('.search-close-switch')
    const modalSearchInput = document.querySelector('#search-input')
    const wrapper = document.querySelector('.search-model-result')

    let database;
    
    fetch('https://anime-database-8ca84-default-rtdb.europe-west1.firebasedatabase.app/anime.json').then((response) => {
        return response.json()
    }).then((data) => {
        database = data;
    });

    const modalSearchAnime = () => {
        if (modalSearch.classList.contains('active')) {
            modalSearch.classList.remove('active')
        } else {
            modalSearch.classList.add('active')
        }
    }

    const modalSearchOpenFn = () => {

        modalSearchBtn.addEventListener('click', () => {
             modalSearchAnime();
        });
    }

    const searchAnimeInDb = (searchStr) => {
        database.filter((record) => {
            return record.title.toLowerCase().includes(searchStr.toLowerCase()) ||
            record.description.toLowerCase().includes(searchStr.toLowerCase());
        }).forEach(item => {
            console.log(item);
            wrapper.insertAdjacentHTML('afterbegin', `
            <a class"p-2" href="/anime-details.html" target="_blank">${item.title}</a>
            `);
        });    
    }

    modalSearchClose.addEventListener('click', () => {
        modalSearchAnime();
    });
    

    modalSearchInput.addEventListener('input', () => {
        searchAnimeInDb(modalSearchInput.value);
    })

    modalSearchOpenFn();
}

modal()