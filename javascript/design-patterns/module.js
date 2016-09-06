var module = (function() {
  var privateContent = 'content';

  var privateFn = function() {
    console.log("inside private function");
  }

  return {
    publicFn: function() {
      privateFn();
      console.log("inside public function");
    }
  };

})();

module.publicFn(); // inside private function, inside public function     
module.privateContent; // undefined
