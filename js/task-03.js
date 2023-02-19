

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = images.map(image => {
//   const galleryItem = document.createElement('li');
//   const galleryEl = document.createElement('img');
//   galleryEl.src = image.url;
//   galleryEl.alt = image.alt;
//   galleryEl.width = 600;

//   galleryItem.appendChild(galleryEl);

//   console.log(galleryItem, galleryEl);
//   return galleryItem;
// });

// const galleryList = document.querySelector('.gallery');
// galleryList.append(...galleryEl);
// console.log(galleryEl);
// console.log(galleryList);


const makeGalleryMarkup = ({ url, alt, }) => {
  return `
  <li class = gallery__item>
    <img src=${url} alt:${alt} class=gallery__img />
  </li>`;

};

// console.log(makeGalleryMarkup(images[0]));


const galleryEl = document.querySelector('.gallery');

const makeGalleryItems = images.map(makeGalleryMarkup).join('');
galleryEl.insertAdjacentHTML('afterbegin', makeGalleryItems);
console.log(makeGalleryItems)