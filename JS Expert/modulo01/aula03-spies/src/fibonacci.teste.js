const {createSandbox} = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox();
const assert = require('assert');

const fibonacci = new Fibonacci();

;(async () => {
    {
        const spy = sinon.spy(
            fibonacci,
            "execute"
        );

        for (const sequencia of fibonacci.execute(5)) {
            const expectedCallCount=6;

            assert.strictEqual(spy.callCount,expectedCallCount);

        }
    }
})()

