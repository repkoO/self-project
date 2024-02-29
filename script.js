const wrapperModals = document.querySelector('.menus__container');
const fixedOverlay = document.querySelector('.fixed__overlay');
const modalWrapper = document.querySelector('.modal__wrapper');
const cardList = document.querySelectorAll('.img__item')

const generateModalWindow = (item) =>`<div class="modal__container">
  <div class="modal__close">
    <svg class="close__svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 41.43 41.43" xml:space="preserve" transform="rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27.768,0H13.662c-0.345,0-0.625,0.28-0.625,0.625v12.413H0.625C0.28,13.038,0,13.318,0,13.663v14.104 c0,0.346,0.28,0.625,0.625,0.625h12.412v12.414c0,0.346,0.28,0.625,0.625,0.625h14.105c0.346,0,0.625-0.279,0.625-0.625V28.393 h12.414c0.346,0,0.625-0.279,0.625-0.625V13.663c0-0.345-0.279-0.625-0.625-0.625H28.393V0.625C28.393,0.281,28.113,0,27.768,0z M40.182,14.288v12.854H27.768c-0.344,0-0.625,0.281-0.625,0.625v12.414H14.287V27.768c0-0.344-0.28-0.625-0.625-0.625H1.25V14.288 h12.412c0.345,0,0.625-0.28,0.625-0.625V1.25h12.855v12.413c0,0.345,0.281,0.625,0.625,0.625H40.182z"></path> </g> </g></svg>
  </div>
  <div class="modal__img">
    <img src="${item.img}" alt="">
  </div>
  <div class="modal__description">
    <div class="modal__title">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <div class="modal__link">
        <a href="${item.link}" target="_blank">Ссылка на проект</a>
    </div>
  </div>
</div>`

const getData = async () => {
   const res = await fetch('db.json');
   const data = await res.json();
   cardList.forEach((cardElement, cardIndex) => {
    cardElement.addEventListener('click', (e) => {
        data.filter((dataElement, dataIndex) => {
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
    if (e.target.classList[0] === 'modal__close' || closeElement.classList[0] === 'close__svg') {
        fixedOverlay.classList.add('hidden');
        document.body.style.overflow = '';
        modalWrapper.innerHTML = '';
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        fixedOverlay.classList.add('hidden');
        document.body.style.overflow = '';
            modalWrapper.innerHTML = '';
      }
    });
})
