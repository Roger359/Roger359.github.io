class Media {
  constructor(title){
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckOut(){
    return this._isCheckOut;
  }
  get ratings(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
    this._isCheckOut = !this._isCheckOut;
  }
  getAverageRating(){
    let ratingSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
    const lengthOfArray  = this.ratings.length
    return ratingSum / lengthOfArray ;
  }
  addRating(inputValue){
    if(inputValue >= 1 || inputValue <= 5){
      this._ratings.push(inputValue);
    }else{
      console.log('Error! Please rate between 1 and 5')
    }
    
  }
  set isCheckOut(isCheckOutIn){
    this._isCheckOut = isCheckOutIn;
  }
}

class Book extends Media {
  constructor(author,title,pages){
    super(title)
    this._author
    this._pages
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director,title,movieCast,runTime){
    super(title,director,runTime);
    this._director
    this._movieCast
    this._runTime
  }
  get director(){
    return this.director;
  }
  get runTime(){
    return this._runTime
  }
  get movieCast(){
    return this._movieCast;
  }
}
class CD extends Media {
  constructor(title,artist, songs){
    super(title);
    this._songs = [];
    this._artist
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  addSongs(songs){
    this._songs.push(songs)
  }
  shuffle(songs) {
    for (let i = songs.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = songs[i];
        songs[i] = songs[j];
        songs[j] = temp;
    }
    return songs;
  }
}
class Catalog {
  constructor(mediaList){
  this._MyCatalog = [mediaList];
 }

get mediaList() {
   return this._mediaList;
}

set mediaList(newMedialist)  {
 this._MyCatalog.push(newMedialist);
 }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything._isCheckOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything._ratings)
console.log(historyOfEverything.getAverageRating())

const hobbit = new Book('J.R. Tolkien', 'Hobbit', 744);

const speed = new Movie('Jan de Bont','Speed',116)

speed.toggleCheckOutStatus()
console.log(speed._isCheckOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())


const newCD = new CD('Ocean', 'Kasaija Akiiki');

newCD.addSongs('Billy Jean');
newCD.addSongs('Mafia');
newCD.addSongs('Yeke Yeke');

console.log(newCD);

const Test = new Catalog();
Test.mediaList = historyOfEverything;
Test.mediaList = speed;
Test.mediaList = hobbit;
Test.mediaList = newCD;
console.log(Test)