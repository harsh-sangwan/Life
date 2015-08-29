angular.module('starter.controllers', ['factor'])



.controller('AppCtrl', function($scope, $ionicModal, Freshb, Reading, Completed, Grats, Incomes, Expenses, Assets, Liability, Dos, Donts, Dones, Done, Prog, Plans, News, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //Gratitude Page
  //$scope.grats = [];    //stores all the gratitudes
  //ar grats = GRATS.all();


  $scope.grats = Grats.all();

  //Wealth Page
  $scope.incomes = Incomes.all();    //stores all the incomes
  $scope.expenses = Expenses.all();   //stores all the expenses
  $scope.assets = Assets.all();     //stores all the assets
  $scope.liability = Liability.all();  //stores all the liabilities

  //Dos and Donts Page
  $scope.dos = Dos.all();        //stores all the dos
  $scope.donts = Donts.all();      //stores all the donts

  //Today Page
  $scope.plans = Plans.all();      //stores all the planned stuff
  $scope.dones = Dones.all();      //stores all the done stuff

  //Projects Page
  $scope.news = News.all();       //stores all the new projects
  $scope.prog = Prog.all();       //stores all the in progress projects
  $scope.done = Done.all();       //stores all the completed projects


  // Create the gratitude modal 
  $ionicModal.fromTemplateUrl('templates/new-grat.html', function(modal) {
    $scope.gratmodal = modal;
  }, {
    scope: $scope
  }); 

  // Triggered in the gratitude modal to close it
  $scope.closeNewGrat = function() {
    $scope.gratmodal.hide();
  };

  // Open the gratitude modal
  $scope.newGrat = function() {
    $scope.gratmodal.show();
  };

  $scope.createGrat = function(grat) {
   
    $scope.grats.push({
      gdate: grat.date,
      gdes: grat.description
      }); 
    
    $scope.gratmodal.hide();

    Grats.save($scope.grats);
    //$scope.grats = GRATS.all();

    grat.date = "";
    grat.description = "";
  };


  // Create dos and donts modal
  $ionicModal.fromTemplateUrl('templates/new-dnds.html', function(modal) {
    $scope.dndsmodal = modal;
  }, {
    scope: $scope
  });

  $scope.createDnds = function(dnds) {
    
    if(dnds.choice === 'A')
    {
      $scope.dos.push({
      dname: dnds.source,
      ddes: dnds.description,
      ddate: dnds.date
      });
    }
    else
    {
      $scope.donts.push({
      dname: dnds.source,
      ddes: dnds.description,
      ddate: dnds.date
      }); 
    }
    
    $scope.dndsmodal.hide();

   Dos.save($scope.dos);
   Donts.save($scope.donts);

   dnds.source = "";
   dnds.description = "";
   dnds.date = "";
  };

  $scope.newDnds = function() {
    $scope.dndsmodal.show();
 
  };

  $scope.closeNewDnds = function() {
    $scope.dndsmodal.hide();
  }


  // Create our modal
  $ionicModal.fromTemplateUrl('templates/new-fin.html', function(modal) {
    $scope.finModal = modal;
  }, {
    scope: $scope
  });

  $scope.createFin = function(fin) {
    

    if(fin.choice === 'A')
    {
      $scope.incomes.push({
      fname: fin.source,
      fdate: fin.date,
      fval: fin.value
      });
    }
    else if(fin.choice === 'B')
    {
      $scope.expenses.push({
      fname: fin.source,
      fdate: fin.date,
      fval: fin.value
      }); 
    }
    else if(fin.choice === 'C')
    {
      $scope.assets.push({
      fname: fin.source,
      fdate: fin.date,
      fval: fin.value
      }); 
    }
    else 
    {
      $scope.liability.push({
      fname: fin.source,
      fdate: fin.date,
      fval: fin.value
      }); 
    }
    
    $scope.finModal.hide();

    Incomes.save($scope.incomes);
    Expenses.save($scope.expenses);
    Assets.save($scope.assets);
    Liability.save($scope.liability);

    fin.source = "";
    fin.value = "";
    fin.date = "";

  };

  $scope.newFin = function() {
    $scope.finModal.show();

  };

  $scope.closeNewFin = function() {
    $scope.finModal.hide();
  }


  // Create our modal
  $ionicModal.fromTemplateUrl('templates/new-today.html', function(modal) {
    $scope.todayModal = modal;
  }, {
    scope: $scope
  });

  $scope.createToday = function(today) {
    
      $scope.plans.push({
      tname: today.name,
      tdes: today.description,
      tdate: today.date
      });  

    
    $scope.todayModal.hide();
    Plans.save($scope.plans);
    Dones.save($scope.dones);

    today.name = "";
    today.description = "";
    today.date = "";

  };

  $scope.newToday = function() {
    $scope.todayModal.show();   
  };

  $scope.shift = function(index) {
    $scope.dones.push({
      tname: plans[index].tname,
      tdes: plans[index].tdes,
      tdate: plans[index].tdate
      });

    Dones.save($scope.dones);
  };


  $scope.closeNewToday = function() {
    $scope.todayModal.hide();
  }


  $ionicModal.fromTemplateUrl('templates/new-project.html', function(modal) {
    $scope.projectModal = modal;
  }, {
    scope: $scope
  });

  $scope.createProject = function(project) {
    
    if(project.wchoice === 'D')
    {
      $scope.news.push({
      name: project.name,
      des: project.description,
      dl: project.deadline,
      tf: project.ttof,
      pri: project.priority,
      n: project.wchoice
      });
    }
    else if(project.wchoice === 'E')
    {
      $scope.prog.push({
      name: project.name,
      des: project.description,
      dl: project.deadline,
      tf: project.ttof,
      pri: project.priority,

      }); 
    }
    else
    {
      $scope.done.push({
      name: project.name,
      des: project.description,
      dl: project.deadline,
      tf: project.ttof,
      pri: project.priority,
      }); 
    }

    
    $scope.projectModal.hide();

 News.save($scope.news);
 Prog.save($scope.prog);
 Done.save($scope.done);

  };

  $scope.newProject = function() {
    $scope.projectModal.show();   

  };

   $scope.closeNewProject = function() {
    $scope.projectModal.hide();
  }


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('BooksCtrl', function($scope, $ionicModal, Freshb, Reading, Completed) {
  //Books 

  $scope.freshb = Freshb.all();
  $scope.reading = Reading.all();
  $scope.completed = Completed.all();

   $ionicModal.fromTemplateUrl('templates/new-books.html', function(modal) {
    $scope.bookModal = modal;
  }, {
    scope: $scope
  });

   $scope.bookIndex;

  $scope.createBook = function(book) {
    
    if(book.wchoice === 'D')
    {
      $scope.freshb.push({
      title: book.name,
      des: book.description,
      fav: book.favs,
      author: book.author,
      genre: book.genre,
      learn: []
      });
    }
    else if(book.wchoice === 'E')
    {
      $scope.reading.push({
      title: book.name,
      des: book.description,
      fav: book.favs,
      author: book.author,
      genre: book.genre,
      learn: []
      });    
    }
    else
    {
      $scope.completed.push({
      title: book.name,
      des: book.description,
      fav: book.favs,
      author: book.author,
      genre: book.genre,
      learn: []
      });
    }

    
    $scope.bookModal.hide();

    Freshb.save($scope.freshb);
    Reading.save($scope.reading);
    Completed.save($scope.completed);

    book.name = "";
    book.description = "";
    book.favs = "";
    book.author = "";
    book.genre = "";

  };

  $scope.newBooks = function() {
    $scope.bookModal.show();   

  };

   $scope.closeNewBook = function() {
    $scope.bookModal.hide();
  }

  $scope.setIndex = function(index) {
    $scope.bookIndex = index;

    /*$scope.completed = Completed.all();
    book.name = $scope.completed[index].name;
    book.description = $scope.completed[index].des;
    book.favs = $scope.completed[index].fav;
    book.author = $scope.completed[index].author;
    book.genre = $scope.completed[index].genre;*/
  }
})


.controller('ItemCtrl', function($scope, $stateParams) {
  $scope.item = $stateParams.item;
});

