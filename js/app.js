let app = new Vue({
  el: '#app',
  data: {
    objects: [
      {
        name: 'ExoMars TGO',
        type: 'Orbiter',
        origin: 'ESA / RFSA',
        launch: '2016-03-14',
        arrival: '2016-10-19'
      },
      {
        name: 'Mangalyaan',
        type: 'Orbiter',
        origin: 'ISRO',
        launch: '2013-11-05',
        arrival: '2014-09-24'
      },
      {
        name: 'MAVEN',
        type: 'Orbiter',
        origin: 'NASA',
        launch: '2013-11-18',
        arrival: '2014-09-22'
      },
      {
        name: 'Curiosity',
        type: 'Rover',
        origin: 'NASA',
        launch: '2011-11-26',
        arrival: '2012-08-06'
      },
      {
        name: 'MRO',
        type: 'Orbiter',
        origin: 'NASA',
        launch: '2005-08-12',
        arrival: '2006-03-10'
      },
      {
        name: 'Opportunity',
        type: 'Rover',
        origin: 'NASA',
        launch: '2003-07-07',
        arrival: '2004-01-25'
      },
      {
        name: 'Mars Express',
        type: 'Orbiter',
        origin: 'ESA',
        launch: '2003-06-02',
        arrival: '2003-12-25'
      },
      {
        name: '2001 Mars Odyssey',
        type: 'Orbiter',
        origin: 'NASA',
        launch: '2001-04-07',
        arrival: '2001-10-24'
      }
    ]
  }
});