const modal = () => {
    const modalSearch = document.querySelector('.search-model')
    const modalSearchBtn = document.querySelector('.search-switch')
    const modalSearchClose = document.querySelector('.search-close-switch')
    const modalSearchInput = document.querySelector('#search-input')


    const modalSearchAnime = () => {
        console.log(modalSearch.classList)
        if (modalSearch.classList.contains('active')) {
            modalSearch.classList.remove('active')
        } else {
            modalSearch.classList.add('active')
        }
    }

    const modalSearchOpenFn = () => {

        modalSearchBtn.addEventListener('click', () => {
            console.log('click');

            modalSearchAnime();
        });
    }



    modalSearchClose.addEventListener('click', () => {
        console.log('modalSearchClose.addEventListener')

        modalSearchAnime();
    });

    modalSearchInput.addEventListener('input', () => {
        console.log(modalSearchInput.value);
    })
    
    modalSearchOpenFn();
}

modal()