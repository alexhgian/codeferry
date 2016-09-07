var axios = require('axios');
var assert = require('assert');
describe('Things', function() {
  describe('api', function() {
    it('should return json', function(done) {
        axios.get('http://localhost:9000/api/things')
        .then(function (response) {
            console.log(response.data);
            done()
        })
        .catch(function (error) {
            console.log(error);
            done(error)
        });

    });
  });
});
