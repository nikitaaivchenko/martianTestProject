'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //Adding new film//

    const addFilm = document.querySelector('.addFilm'),
        newFilm = document.querySelector('.new_film_form'),
        // title = document.querySelector('#title'),
        // year = document.querySelector('#year'),
        // country = document.querySelector('#country'),
        // genre = document.querySelector('#genre'),
        // poster = document.querySelector('#poster'),
        // description = document.querySelector('#description'),
        cancelAdd = document.querySelector('#cancelAdd');
    // addForm = document.querySelector('#addForm');

    function openForm() {
        newFilm.classList.add('show');
        newFilm.classList.remove('hide');
    }


    addFilm.addEventListener('click', openForm);


    function closeForm() {
        newFilm.classList.add('hide');
        newFilm.classList.remove('show');
    }

    cancelAdd.addEventListener('click', closeForm);

    newFilm.addEventListener('click', (e) => {
        if (e.target === newFilm) {
            closeForm();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && newFilm.classList.contains('show')) {
            closeForm();
        }
    });

    //Adding Comment

    const commentBtn = document.querySelectorAll('.comment_btn'),
        comment = document.querySelectorAll('.comment_hidden');

    comment.forEach(function toggleComments() {
        document.querySelector('.comment_hidden').classList.toggle('hide');
        commentBtn.forEach((item) => {
            item.addEventListener('click', toggleComments);
        });
        console.log(comment);
    });

    // commentBtn.addEventListener('click', e => {
    //     document.querySelector('.comment').classList.toggle('hide');
    // });

    //     var highlightedItems = userList.querySelectorAll(".highlighted");

    // highlightedItems.forEach(function(userItem) {
    //   deleteUser(userItem);
    // });




});