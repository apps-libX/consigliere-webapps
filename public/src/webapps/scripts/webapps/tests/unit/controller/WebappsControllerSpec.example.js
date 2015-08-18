/**
 * Created by consigliere on August 18th 2015, 4:22:20 pm.
 *
 * @module test.consigliere.webapps
 * @name WebappsController
 *
 * @description
 * Tests for WebappsController under consigliere.webapps
 * _Test description._
 */


describe('Controller: consigliere.webapps.WebappsController', function () {

    'use strict';

    // load the controller's module
    beforeEach(module('consigliere.webapps'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('WebappsController', {
            $scope : scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
