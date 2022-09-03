import { sampleProvinceData } from '../src/run.js'
import { Province } from '../src/province.js'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var assert = require('assert');


describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData())
        assert.equal(asia.shortfall, 5)
    })
})