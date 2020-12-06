const { expect } = require('chai')
const MathOperationsContract = artifacts.require('./MathOperations')

contract('MathOperations', accounts => {
    let instance, value

    before(async () => {
        instance = await MathOperationsContract.deployed()
    })

    describe('add()', async () => {
        it('Should add the value and get the correct answer', async () => {
            await instance.add(2)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(2)
            await instance.add(4)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(6)
            await instance.add(-3)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(3)
        })

        it('Should be able to add a negative value and get the correct answer', async () => {
            await instance.add(-103)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(-100)
        })
    })

    describe('subtract()', async () => {
        it('Should subtract the given value and get the correct answer', async () => {
            await instance.setValue(150)
            await instance.subtract(60)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(90)
        })

        it('Should be able to subtract a negative value', async () => {
            await instance.subtract(-30)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(120)
        })
    })

    describe('multiply()', async () => {
        it('Should multiply numbers', async () => {
            await instance.setValue(10000)
            await instance.multiply(4)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(40000)
        })

        it('Should switch sign with multiplication', async () => {
            await instance.multiply(-1)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(-40000)
            await instance.multiply(-1)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(40000)
        })
    })

    describe('divide()', async () => {
        it('Should divide numbers', async () => {
            await instance.setValue(100)
            await instance.divide(4)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(25)
        })

        it('Should switch sign with division', async () => {
            await instance.divide(-1)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(-25)
            await instance.divide(-1)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(25)
        })
    })

    describe('power()', async () => {
        it('Should set numbers to powers', async () => {
            await instance.setValue(2)
            await instance.power(2)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(4)
            await instance.power(3)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(64)
        })

        it('Should handle 0', async () => {
            await instance.power(0)
            value = await instance.getValue()
            expect(value.toNumber()).to.be.equal(1)
        })
    })
})