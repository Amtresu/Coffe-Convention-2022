const roasterInfo1 = [
    {
      name: 'Brandywine',
      screenshot: 'img/featured-roaster-1.webp',
      location: 'Wilmington, DE',
      description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
      
    },
    {

      name: 'Birdrock',
      screenshot: 'img/featured-roaster-1.webp',
      location: 'San-Diego, CA',
      description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
    },
    {
        name: 'Cat & Cloud',
        screenshot: 'img/featured-roaster-1.webp',
        location: 'Santa Ana, CA',
        description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
      },
  

  ]

  document.querySelector('.featured-roasters-column-1').innerHTML = roasterInfo1.map((data) =>

  `<div class="featured-roaster">
          <div class="featured-roaster-img-div">
            <img class="featured-roaster-img" src="${data.screenshot}">
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
        screenshot: 'img/snapshot.svg',
        location: 'New York, NY',
        description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
      },
      {
          name: 'Olympia',
          screenshot: 'img/snapshot.svg',
          location: 'Olympia, WA',
          description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
      },
      {
          name: 'Onyx',
          screenshot: 'img/snapshot.svg',
          location: 'Bentonville, AK',
          description: 'Brandywine is a premier coffee<br> roaster from wilmington, DE'
      }
]

document.querySelector('.featured-roasters-column-2').innerHTML = roasterInfo2.map((data) =>

  `<div class="featured-roaster">
          <div class="featured-roaster-img-div">
            <img class="featured-roaster-img" src="img/featured-roaster-1.webp">
          </div>
          <div class="featured-roaster-info">
            <h4 class="featured-roaster-name">${data.name}</h4>
            <p class="featured-roaster-location">${data.location}</p>
            <div class="roaster-seperator"></div>
            <p>${data.description}</p>
          </div>
        </div>`).join('')


  