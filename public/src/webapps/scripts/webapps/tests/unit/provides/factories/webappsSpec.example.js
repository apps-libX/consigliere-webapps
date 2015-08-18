/**
 * Created by consigliere on August 18th 2015, 12:40:33 pm.
 *
 * @module test.consigliere.webapps
 * @name webapps
 *
 * @description
 * Tests for webapps under consigliere.webapps
 * _Test description._
 */


describe('Service: consigliere.webapps.webapps', function () {

    'use strict';

    // load the service's module
    beforeEach(module('consigliere.webapps'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (webapps) {
        service = webapps;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
