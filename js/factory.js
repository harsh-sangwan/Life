angular.module('factor', [])

.factory('Grats', function() {
  return {
    all: function() {
      var gratString = window.localStorage['grats'];
      if(typeof gratString != 'undefined') {
        return angular.fromJson(gratString);
      }
      return [];
    },
    save: function(grats) {
      window.localStorage['grats'] = angular.toJson(grats);
    }
  }
})

.factory('Incomes', function() {
  return {
    all: function() {
      var incomeString = window.localStorage['incomes'];
      if(typeof incomeString != 'undefined') {
        return angular.fromJson(incomeString);
      }
      return [];
    },
    save: function(incomes) {
      window.localStorage['incomes'] = angular.toJson(incomes);
    }
  }
})

.factory('Expenses', function() {
  return {
    all: function() {
      var expenseString = window.localStorage['expenses'];
      if(typeof expenseString != 'undefined') {
        return angular.fromJson(expenseString);
      }
      return [];
    },
    save: function(expenses) {
      window.localStorage['expenses'] = angular.toJson(expenses);
    }
  }
})

.factory('Assets', function() {
  return {
    all: function() {
      var assetString = window.localStorage['assets'];
      if(typeof assetString != 'undefined') {
        return angular.fromJson(assetString);
      }
      return [];
    },
    save: function(assets) {
      window.localStorage['assets'] = angular.toJson(assets);
    }
  }
})

.factory('Liability', function() {
  return {
    all: function() {
      var liabilityString = window.localStorage['liability'];
      if(typeof liabilityString != 'undefined') {
        return angular.fromJson(liabilityString);
      }
      return [];
    },
    save: function(liability) {
      window.localStorage['liability'] = angular.toJson(liability);
    }
  }
})

.factory('Dos', function() {
  return {
    all: function() {
      var doString = window.localStorage['dos'];
      if(typeof doString != 'undefined') {
        return angular.fromJson(doString);
      }
      return [];
    },
    save: function(dos) {
      window.localStorage['dos'] = angular.toJson(dos);
    }
  }
})

.factory('Donts', function() {
  return {
    all: function() {
      var dontString = window.localStorage['donts'];
      if(typeof dontString != 'undefined') {
        return angular.fromJson(dontString);
      }
      return [];
    },
    save: function(donts) {
      window.localStorage['donts'] = angular.toJson(donts);
    }
  }
})

.factory('Plans', function() {
  return {
    all: function() {
      var planString = window.localStorage['plans'];
      if(typeof planString != 'undefined') {
        return angular.fromJson(planString);
      }
      return [];
    },
    save: function(plans) {
      window.localStorage['plans'] = angular.toJson(plans);
    }
  }
})

.factory('Dones', function() {
  return {
    all: function() {
      var doneString = window.localStorage['dones'];
      if(typeof doneString != 'undefined') {
        return angular.fromJson(doneString);
      }
      return [];
    },
    save: function(dones) {
      window.localStorage['dones'] = angular.toJson(dones);
    }
  }
})

.factory('News', function() {
  return {
    all: function() {
      var newString = window.localStorage['news'];
      if(typeof newString != 'undefined') {
        return angular.fromJson(newString);
      }
      return [];
    },
    save: function(news) {
      window.localStorage['news'] = angular.toJson(news);
    }
  }
})

.factory('Prog', function() {
  return {
    all: function() {
      var progString = window.localStorage['prog'];
      if(typeof progString != 'undefined') {
        return angular.fromJson(progString);
      }
      return [];
    },
    save: function(prog) {
      window.localStorage['prog'] = angular.toJson(prog);
    }
  }
})


.factory('Done', function() {
  return {
    all: function() {
      var doneString = window.localStorage['done'];
      if(typeof doneString != 'undefined') {
        return angular.fromJson(doneString);
      }
      return [];
    },
    save: function(done) {
      window.localStorage['done'] = angular.toJson(done);
    }
  }
})

.factory('Freshb', function() {
  return {
    all: function() {
      var doneString = window.localStorage['freshb'];
      if(typeof doneString != 'undefined') {
        return angular.fromJson(doneString);
      }
      return [];
    },
    save: function(freshb) {
      window.localStorage['freshb'] = angular.toJson(freshb);
    }
  }
})

.factory('Reading', function() {
  return {
    all: function() {
      var doneString = window.localStorage['reading'];
      if(typeof doneString != 'undefined') {
        return angular.fromJson(doneString);
      }
      return [];
    },
    save: function(reading) {
      window.localStorage['reading'] = angular.toJson(reading);
    }
  }
})

.factory('Completed', function() {
  return {
    all: function() {
      var doneString = window.localStorage['completed'];
      if(typeof doneString != 'undefined') {
        return angular.fromJson(doneString);
      }
      return [];
    },
    save: function(completed) {
      window.localStorage['completed'] = angular.toJson(completed);
    }
  }
})


