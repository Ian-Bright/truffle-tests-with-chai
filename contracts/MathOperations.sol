pragma solidity >=0.4.22 <0.8.0;



contract MathOperations {
    int private value;

    function add(int _addedVal) public returns (int) {
        value += _addedVal;
        return value;
    }

    function subtract(int _subtractedVal) public returns (int) {
        value -= _subtractedVal;
        return value;
    }

    function multiply(int _multiplyVal) public returns (int) {
        value *= _multiplyVal;
        return value;
    }

    function divide(int _divideVal) public returns (int) {
        value /= _divideVal;
        return value;
    }

    function power(uint _powerVal) public returns (int) {
        int currentVal = value;
        // Loop is used because exponential operator is not allowed for ints.
        for(uint i = 0; i < _powerVal; i++) {
            value *= currentVal;
        }
        return value;
    }

    function getValue() public view returns (int) {
        return value;
    }
}