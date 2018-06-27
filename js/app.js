var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('kitty');
  this.url = ko.observable('img/22252709_010df3379e_z.jpg');
  this.title = ko.observable('newborn');

  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
    if (this.clickCount() > 30){
      this.title('teen');
    }
    else if (this.clickCount() > 20){
      this.title('kid');
    }
    else if (this.clickCount() > 10){
      this.title('infant');
    }
  }

}

ko.applyBindings(new ViewModel());
