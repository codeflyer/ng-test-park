'use strict';

describe('Interpolate Unit test', function() {

  it('Simple interpolation', inject(function($interpolate) {
    var context = {name: 'Davide'};
    var exp = $interpolate('Hello {{name}}');
    expect(exp(context)).toBe('Hello Davide');
  }));

  it('Simple interpolation with filter', inject(function($interpolate) {
    var context = {name: 'Davide'};
    var exp = $interpolate('Hello {{name | uppercase}}');
    expect(exp(context)).toBe('Hello DAVIDE');
  }));

  it('Musthave expression interpolation', inject(function($interpolate) {
    var exp = $interpolate('Hello', true);
    expect(exp).toBeUndefined();

    var exp2 = $interpolate('Hello', false);
    expect(exp2).toBeDefined();
  }));

  it('All or nothing interpolation (1.3)', inject(function($interpolate) {
    var context = {name : 'Davide', surname : 'Fiorello'};
    var exp = $interpolate('Hello {{name}} {{surname}}', false, null, true);
    expect(exp(context)).toBe('Hello Davide Fiorello');

    var exp2 = $interpolate('Hello {{title}} {{name}} {{surname}}', false, null, true);
    expect(exp2(context)).toBeUndefined();
  }));

});
