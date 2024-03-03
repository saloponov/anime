const detailData = () => {
    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')

        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
            <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    const renderAnimeDetails = (array, itemId) => {
        const animeObj = array.find(item => item.id == itemId)
        const imageBlock = document.querySelector('.anime__details__pic')
        const viewsBlock = imageBlock.querySelector('.view')
        const titleBlock = document.querySelector('.anime__details__title h3')
        const subTitileBlock = document.querySelector('.anime__details__title span')
        const descriptionBlock = document.querySelector('.anime__details__text p')
        const widgetList = document.querySelectorAll('.anime__details__widget ul li')
        const breadCrumbList  = document.querySelectorAll('.breadcrumb__links')
        
        
        if (animeObj) {
            imageBlock.dataset.setbg = animeObj.image
            viewsBlock.insertAdjacentHTML('beforeend', `
            <i class="fa fa-eye"></i> ${animeObj.views}</div>
            `)

            titleBlock.textContent = animeObj.title
            subTitileBlock.textContent = animeObj['original-title']
            descriptionBlock.textContent = animeObj.description 

            widgetList[0].insertAdjacentHTML('beforeend', `
            <span>Date aired:</span>${animeObj.date}
            `)
            widgetList[1].insertAdjacentHTML('beforeend', `
            <span>Rating:</span> ${animeObj.rating}
            `)
            widgetList[2].insertAdjacentHTML('beforeend', `
            <span>Genre:</span> ${animeObj.tags.join(', ')}
            `)
            document.querySelectorAll('.set-bg').forEach((element) => {
                element.style.backgroundImage = `url(${element.dataset.setbg})`;
            });
        } else {
            console.log('Аниме отсутсвует');
        }
    }
    
    fetch('https://anime-database-8ca84-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((response) => response.json())
        .then((data) => {
            const ganres = new Set()
            const itemId = new URLSearchParams(window.location.search).get('itemId');
            
            data.forEach((item) => {
                ganres.add(item.ganre)
            })

            if (itemId) {
                renderAnimeDetails(data, itemId);
            } else {
                console.log('Аниме отсутсвует');
            }
                
            renderGanreList(ganres);
        })
}

detailData();