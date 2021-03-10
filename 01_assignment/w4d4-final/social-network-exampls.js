let users = {

  'p01': {
    id: 'p01',
    name: 'Richard Sanderson',
    age: 22,
    bio: 'World traveller, big 401k',
    friends:['p02', 'p04']
  },

  'p02': {
    id: 'p02',
    name: 'Austin Powers',
    age: 47,
    bio: 'International man of mystery',
    friends:['p03', 'p04']
  },

  'p03': {
    id: 'p03',
    name: 'Fred Flinstone',
    age: 4000,
    bio: 'yaba-daba-doo',
    friends:['p02', 'p04', 'p01']
  },

  'p04': {
    id: 'p04',
    name: 'Taylor Swift',
    age: 26,
    bio: 'I make music in my spare time',
    friends:['p02', 'p03']
  },


  getUserByID: function(userID) {
    // should return a sentence containing all of the info about the user (name age, and bio)
  },

  getUserByName: function(userName) {
     // should return a sentence containing all of the info about the user (name age and bio)
  },

  addUser: function(name, price, desc) {
    //will need a random id as well when creating a new user. console log the user object to confirm it was added. 
  },

  getFriendsByID: function(userID) {
    // this function will take in a userID, and using this, return a list of all of their friends names. 
  }

}