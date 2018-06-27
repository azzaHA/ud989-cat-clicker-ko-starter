var Cat = function(){

}

var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('kitty');
  this.url = ko.observable('img/22252709_010df3379e_z.jpg');
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

  this.nickNames = ko.observableArray(['Cutie Cat', 'Tommy', 'Bingo', 'Tiger']);

  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
  }

}

ko.applyBindings(new ViewModel());
