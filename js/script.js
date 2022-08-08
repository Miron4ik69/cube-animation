document.addEventListener('DOMContentLoaded', () => {

    buildPagination();

});


const buildPagination = () => {
    let aboutBlocks = document.getElementsByClassName('about-item'),
        paginationBlocks = document.getElementById('about-pagination')
        aboutCounter = aboutBlocks.length;

    for (let i = 0; i < aboutCounter; i++) {
        let div = document.createElement('div');
        div.classList.add('pagination-dot');

        if (!i) {
            div.classList.add('active');
        }

        paginationBlocks.appendChild(div);
    }    

}