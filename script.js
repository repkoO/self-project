const wrapperModals = document.querySelector('.menus__container');
const fixedOverlay = document.querySelector('.fixed__overlay');
const modalWrapper = document.querySelector('.modal__wrapper');
const cardList = document.querySelectorAll('.img__item')

const generateModalWindow = (item) =>`<div class="modal__container">
  <div class="modal__img">
    <img src="${item.img}" alt="">
  </div>
  <div class="modal__description">
    <div class="modal__title">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <div class="modal__link">
        <a href="${item.link}">Ссылка на проект</a>
    </div>
    <div class="modal__close">
      <p class="close__button">Close</p>
    </div>
  </div>
</div>`



const getData = async () => {
   const res = await fetch('db.json');
   const data = await res.json();
   cardList.forEach((cardElement, cardIndex) => {
    cardElement.addEventListener('click', (e) => {
        const dataList = data.filter((dataElement, dataIndex) => {
            if (cardIndex === dataIndex)
                modalWrapper.insertAdjacentHTML('afterbegin', generateModalWindow(dataElement))
                fixedOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
           })
    })
   })
}
getData()


//Закрытие модалки

document.body.addEventListener('click', (e) => {
    const closeElement = e.target;
    if (e.target.classList[0] === 'modal__close' || closeElement.classList[0] === 'close__button') {
        fixedOverlay.classList.add('hidden');
        document.body.style.overflow = '';
        modalWrapper.innerHTML = '';
    }
})