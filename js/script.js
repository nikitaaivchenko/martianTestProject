'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //Adding new film//

    const addFilm = document.querySelector('.addFilm__button'),
        newFilm = document.querySelector('.addFilm__form'),
        cancelAdd = document.querySelector('#cancelAdd');

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

    //Show Comments
    function addComment() {
        const commentBtn = document.querySelectorAll('.comment_btn');
        commentBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const commentBlock = btn.parentNode.querySelector('.comment_block');
                commentBlock.classList.toggle('hide');
            });
        });
    }

    addComment();

    // Adding Film

    const addForm = document.querySelector('#addForm');



    addForm.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.querySelector('form'),
            data = Object.fromEntries(new FormData(form).entries()),
            filmCardBlock = document.createElement('div'),
            filmCard = createFilmCard(data),
            filmsContainer = document.querySelector('.film-cards__wrapper');
        filmCardBlock.innerHTML = filmCard;
        filmsContainer.appendChild(filmCardBlock);

        cancelAdding(filmCardBlock);
        addComment();
        addingComment(filmCardBlock);

    });

    function cancelAdding(filmCard) {
        const cancelButton = filmCard.querySelector('.delete');
        cancelButton.addEventListener('click', () => {
            filmCard.remove();
        });
    }

    function addingComment(filmCard) {
        const addCommentBtn = filmCard.querySelector('.add-comment__btn');
        console.log(addCommentBtn);

        addCommentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const form = filmCard.querySelector('.comment-form'),
                data = Object.fromEntries(new FormData(form).entries()),
                commentBlock = document.createElement('p'),
                commentCard = createCommentCard(data),
                commentContainer = filmCard.querySelector('.comment');
            commentBlock.innerHTML = commentCard;
            commentContainer.appendChild(commentBlock);

            addComment();
        });
    }

    function createCommentCard({ comment }) {
        return `
        <p>${comment}</p>
        `;
    }



    function createFilmCard({ title, year, country, genre, poster, description }) {
        return `
        <div class="film-card">
        <div class="section">
            <div class="film-card_img"><img src="${poster}" alt="Poster"></div>
            <div class="film-card_text">
                <h1>${title}</h1>
                <p>${description}</p>
                <div class="film_descriprion">
                    <ul class="uppercase">
                        <li>country</li>
                        <li>year</li>
                        <li>genre</li>
                        <li>actors</li>
                    </ul>
                    <ul>
                        <li>${country}</li>
                        <li>${year}</li>
                        <li>${genre}y</li>
                        <li>Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica Chastain, Kate Mara, Kristen Wiig, Matt Damon, Michael Peña, Sean Bean, Sebastian Stan</li>
                    </ul>
                </div>
                <div class="film-card__inputs">
                    <input type="button" value="Delete" class="delete">
                    <input type="button" value="Edit" class="edit">
                </div>
            </div>
        </div>
        <div class="comments">
            <input type="button" class="comment_btn" value="Comments: 3 ^">
            <div class="comment_block hide">
                <div class="comment">
                    <p>Test comment 1</p>
                    <p>Test comment 2</p>
                </div>
                <form class="comment-form">
                 <input type="text" name="comment" placeholder="Add your comment" class="add-comment__text">
                <input type="submit" value="Add" class="add-comment__btn">
                </form>
            </div>
        </div>
    </div>
                `;
    }
});