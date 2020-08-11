const apiKey = 'DEMO_KEY'
const rovers = ['curiosity', 'opportunity', 'spirit']

// Get Rover image
getRoverImage = async () => {
  let sol, photoUrl, photo, imgSrc
  const rover = rovers[Math.floor(Math.random() * rovers.length)]
  const manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${apiKey}`

  await fetch(manifestUrl)
    .then(response => response.json())
    .then(data => {
      sol = Math.floor(Math.random() * data['photo_manifest']['max_sol'])
      photoUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`
    })
    .catch(error => {
      console.error(error)
    });

  await fetch(photoUrl)
    .then(response => response.json())
    .then(data => {
      photo = Math.floor(Math.random() * data.photos.length)
      imgSrc = data.photos[photo]['img_src']
    })
    .catch(error => {
      console.error(error)
    });

  const imgDiv = document.querySelector('.count')
  imgDiv.style.backgroundImage = `url('${imgSrc}')`
}

getRobotData = async () => {
  const dataBackup = '../data/data.json';
  let robots

  await fetch(dataBackup)
    .then(response => response.json())
    .then(data => {
      robots = data
    })
    .catch(error => {
      console.error(error)
    });

  let app = new Vue({
    el: '#app',
    data: {
      objects: robots
    }
  });
}

getRoverImage()
getRobotData()