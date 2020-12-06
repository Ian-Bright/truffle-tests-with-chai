pragma solidity >=0.4.22 <0.8.0;



contract MathOperations {
    int private value;

    function add(int _addedVal) public {
        value += _addedVal;
    }

    function subtract(int _subtractedVal) public {
        value -= _subtractedVal;
    }

    function multiply(int _multiplyVal) public {
        value *= _multiplyVal;
    }

    function divide(int _divideVal) public {
        value /= _divideVal;
    }

    function power(uint _powerVal) public {
        if(_powerVal == 0) {
            value = 1;
        } else {
        int currentVal = value;
        // Loop is used because exponential operator is not allowed for ints.
        for(uint i = 1; i < _powerVal; i++) {
            value *= currentVal;
        }
        }
    }

    function setValue(int _value) public {
        value = _value;
    }

    function getValue() public view returns (int) {
        return value;
    }
}