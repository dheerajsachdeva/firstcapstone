// For Hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// For Featured Speakers

const speakers = [
  {
    speakerId: '1',
    speakerImage: './img/patrick1.jpg',
    speakerName: 'Patrick Mourtglou',
    speakerDetails1: 'Knowledge is acquired by experience; everything else is just information.',
    speakerDetails2: 'To talk is a necessity; to listen is an art. My future depended only on myself, on my ability to convince, to train, to work, to plan.',
  },

  {
    speakerId: '2',
    speakerImage: './img/nadal.jpg',
    speakerName: 'Rafa Nadal',
    speakerDetails1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, labore?',
    speakerDetails2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, dignissimos ratione. Saepe impedit in minus, voluptatibus fugit minima nesciunt. Corporis?',
  },

  {
    speakerId: '3',
    speakerImage: './img/federer.webp',
    speakerName: 'Roger Federer',
    speakerDetails1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, labore?',
    speakerDetails2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, dignissimos ratione. Saepe impedit in minus, voluptatibus fugit minima nesciunt. Corporis?',
  },

  {
    speakerId: '4',
    speakerImage: './img/djoko.jpg',
    speakerName: 'Djokovic',
    speakerDetails1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, labore?',
    speakerDetails2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, dignissimos ratione. Saepe impedit in minus, voluptatibus fugit minima nesciunt. Corporis?',
  },

  {
    speakerId: '5',
    speakerImage: './img/alcaraz-head.png',
    speakerName: 'Carlos Alcaraz',
    speakerDetails1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, labore?',
    speakerDetails2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, dignissimos ratione. Saepe impedit in minus, voluptatibus fugit minima nesciunt. Corporis?',
  },

  {
    speakerId: '6',
    speakerImage: './img/emma.jpg',
    speakerName: 'Emma Raducanu',
    speakerDetails1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, labore?',
    speakerDetails2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, dignissimos ratione. Saepe impedit in minus, voluptatibus fugit minima nesciunt. Corporis?',
  },
];

const featuredSpeakers = document.querySelector('.featuredSpeakers');

featuredSpeakers.innerHTML = '';

for (let i = 0; i < speakers.length; i += 1) {
  featuredSpeakers.innerHTML += `
  <section class="featuredSpeakersContainer">
  
  <div class="featuredSpeakersBox">
  <div class="featuredSpeakersImg">
  <img src="${speakers[i].speakerImage}" alt = 'Featured Speaker Image'>
  </div>
  <div class="featuredSpeakersText">
      <div class="featuredSpeakersName">${speakers[i].speakerName}</div>
      <div class="featuredSpeakersDetails1">${speakers[i].speakerDetails1}</div><div class="featuredSpeakersBar"></div>
      <div class="featuredSpeakersDetails2">${speakers[i].speakerDetails2}</div>
  </div>
      </div>
  </section>`;
}
