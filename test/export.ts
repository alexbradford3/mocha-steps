import { step, xstep } from "../lib/step";

describe('export', function() {

  describe('it()', function() {

    it('is executed', function() {
    });

    xit('is not executed');

  });

  describe('step()', function() {

    step('is executed', function() {
    });

    xstep('is not executed');

  });

});
