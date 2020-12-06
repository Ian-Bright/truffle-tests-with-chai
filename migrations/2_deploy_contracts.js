const MathOperations = artifacts.require('./MathOperations')

module.exports = deployer => {
    deployer.deploy(MathOperations)
}