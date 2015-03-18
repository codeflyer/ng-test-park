'use strict';

describe('Interpolate Unit test', function() {

  it('Simple interpolation', inject(function($interpolate) {
    var context = {name: 'Davide'};
    var exp = $interpolate('Hello {{name}}');
    exp(context).should.be.equal('Hello Davide');
  }));

  it('Simple interpolation with filter', inject(function($interpolate) {
    var context = {name: 'Davide'};
    var exp = $interpolate('Hello {{name | uppercase}}');
    exp(context).should.be.equal('Hello DAVIDE');
  }));

  it('Musthave expression interpolation', inject(function($interpolate) {
    var exp = $interpolate('Hello', true);
    (exp === undefined).should.be.true;

    var exp2 = $interpolate('Hello', false);
    (exp2 === undefined).should.be.false;
  }));

  it('All or nothing interpolation (1.3)', inject(function($interpolate) {
    var context = {name : 'Davide', surname : 'Fiorello'};
    var exp = $interpolate('Hello {{name}} {{surname}}', false, null, true);
    (exp(context) === undefined).should.be.false;
    exp(context).should.be.equal('Hello Davide Fiorello');

    var exp2 = $interpolate('Hello {{title}} {{name}} {{surname}}', false, null, true);
    (exp2(context) === undefined).should.be.true;
  }));

});
