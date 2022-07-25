const hamburgerMenu = document.querySelector('.hamburger-icon')
const popupWindow = document.querySelector('.popup-menu')
const closePopupWindow = document.querySelector('.close-menu')
const toggleMenu = false

hamburgerMenu.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'visible'
  }
})

closePopupWindow.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'hidden'
  }
})

const navMenuButton = document.querySelector('.popup-menu')

navMenuButton.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'hidden'
  }
})

const roasterInfo1 = [
  {
    name: 'Brandywine',
    screenshot: 'img/featured-roaster-1.webp',
    location: 'Wilmington, DE',
    description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'

  },
  {

    name: 'Birdrock',
    screenshot: 'img/featured-roaster-6.jpg',
    location: 'San-Diego, CA',
    description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
  },
  {
    name: 'Cat & Cloud',
    screenshot: 'img/featured-roaster-2.jpg',
    location: 'Santa Ana, CA',
    description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
  }

]

document.querySelector('.featured-roasters-column-1').innerHTML = roasterInfo1.map((data) =>

  `<div class="featured-roaster">
          <div class="featured-roaster-img-div">
            <img class="featured-roaster-img" src="${data.screenshot}" alt="Roaster Logo">
          </div>
          <div class="featured-roaster-info">
            <h4 class="featured-roaster-name">${data.name}</h4>
            <p class="featured-roaster-location">${data.location}</p>
            <div class="roaster-seperator"></div>
            <p>${data.description}</p>
          </div>
        </div>`).join('')

const roasterInfo2 = [
  {
    name: 'Blue Bottle',
    screenshot: 'img/featured-roaster-3.jpg',
    location: 'New York, NY',
    description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
  },
  {
    name: 'Olympia',
    screenshot: 'img/featured-roaster-4.png',
    location: 'Olympia, WA',
    description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
  },
  {
    name: 'Onyx',
    screenshot: 'img/featured-roaster-5.jpg',
    location: 'Bentonville, AK',
    description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
  }
]

document.querySelector('.featured-roasters-column-2').innerHTML = roasterInfo2.map((data) =>

  `<div class="featured-roaster">
          <div class="featured-roaster-img-div">
            <img class="featured-roaster-img" src="${data.screenshot}" alt="Roaster logo">
          </div>
          <div class="featured-roaster-info">
            <h4 class="featured-roaster-name">${data.name}</h4>
            <p class="featured-roaster-location">${data.location}</p>
            <div class="roaster-seperator"></div>
            <p>${data.description}</p>
          </div>
        </div>`).join('')
