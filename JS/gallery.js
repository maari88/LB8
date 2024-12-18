const images = [
  {
    preview: 'https://via.placeholder.com/150/FF5733',
    original: 'https://via.placeholder.com/600/FF5733',
    description: 'Картинка 1: Помаранчевий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/33FFBD',
    original: 'https://via.placeholder.com/600/33FFBD',
    description: 'Картинка 2: Бірюзовий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/FF33E3',
    original: 'https://via.placeholder.com/600/FF33E3',
    description: 'Картинка 3: Рожевий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/33A1FF',
    original: 'https://via.placeholder.com/600/33A1FF',
    description: 'Картинка 4: Блакитний відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/FFC733',
    original: 'https://via.placeholder.com/600/FFC733',
    description: 'Картинка 5: Жовтий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/75FF33',
    original: 'https://via.placeholder.com/600/75FF33',
    description: 'Картинка 6: Зелений відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/FF3333',
    original: 'https://via.placeholder.com/600/FF3333',
    description: 'Картинка 7: Червоний відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/33A1FF',
    original: 'https://via.placeholder.com/600/33A1FF',
    description: 'Картинка 4: Блакитний відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/FFC733',
    original: 'https://via.placeholder.com/600/FFC733',
    description: 'Картинка 5: Жовтий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/75FF33',
    original: 'https://via.placeholder.com/600/75FF33',
    description: 'Картинка 6: Зелений відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/33FFBD',
    original: 'https://via.placeholder.com/600/33FFBD',
    description: 'Картинка 2: Бірюзовий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/FF33E3',
    original: 'https://via.placeholder.com/600/FF33E3',
    description: 'Картинка 3: Рожевий відтінок',
  },
  {
    preview: 'https://via.placeholder.com/150/33A1FF',
    original: 'https://via.placeholder.com/600/33A1FF',
    description: 'Картинка 4: Блакитний відтінок',
  },
];


  const galleryContainer = document.querySelector('.gallery');

  const galleryMarkup = images.map(({preview, original, description}) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}" />
      </a>
    </li>
    `;
  }).join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Делегування подій: обробка кліка по галереї
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  // Перевіряємо, чи клік був по зображенню
  const target = event.target;
  if (!target.classList.contains('gallery-image')) {
    return;
  }

  const largeImageURL = target.dataset.source; // Отримуємо посилання на велике зображення
  console.log('Посилання на велике зображення:', largeImageURL);

  // Відкриваємо модальне вікно з бібліотекою basicLightbox
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${target.alt}" width="800" height="600">
  `);

  instance.show();
}

document.querySelector('button').addEventListener('click', (event) => {
  event.stopPropagation(); // Запобігає втручанню інших обробників
  location.href = '2-form.html';
});
