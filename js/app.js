var initialCats = [
  {
    clickCount: 0,
    name: 'Kitty',
    url: 'img/22252709_010df3379e_z.jpg',
    nickNames: ['Cutie Cat', 'Tommy', 'Bingo', 'Tiger']

  },
  {
    clickCount: 0,
    name: 'Tiger',
    url: 'img/434164568_fea0ad4013_z.jpg',
    nickNames: ['Tigger']

  },
  {
    clickCount: 0,
    name: 'Touta',
    url: 'img/1413379559_412a540d29_z.jpg',
    nickNames: ['Bingo']

  },
  {
    clickCount: 0,
    name: 'Bingo',
    url: 'img/4154543904_6e2428c421_z.jpg',
    nickNames: ['Tommy']

  },
  {
    clickCount: 0,
    name: 'Frank',
    url: 'img/9648464288_2516b35537_z.jpg',
    nickNames: ['Sleepy Cat']

  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.url = ko.observable(data.url);
  this.nickNames = ko.observableArray(data.nickNames);
  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks > 40){
      title = 'Adult';
    }
    else if (clicks > 30){
      title = 'Teen';
    }
    else if (clicks > 20){
      title = 'Kid';
    }
    else if (clicks > 10){
      title = 'Infant';
    }
    else{
      title = 'Newborn';
    }
    return title;
  }, this);


}

var ViewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(cat){
    self.catList.push(new Cat(cat));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

  this.setCurrentCat = function(cat){
    self.currentCat(cat);
    console.log(cat.name);
  }

}

ko.applyBindings(new ViewModel());
