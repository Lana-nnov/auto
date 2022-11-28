function getInfo(successCallback) {
  $.ajax('https://alexwohlbruck.github.io/cat-facts/docs/facts', {
    success: function(data) {
      console.log(data);
    }
  })
};

console.log('AGAXXXXXX')
