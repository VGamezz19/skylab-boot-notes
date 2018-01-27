var num;
(function () {
    function sum(_num, inputNum) {
        return _num + inputNum;
    }

    function minor(_num, inputNum) {
        return _num - inputNum;
    }

    function mult(_num, inputNum) {
        return _num * inputNum;
    }

    function div(_num, inputNum) {
        return _num / inputNum;
    }

    num = function (_num) {
        var numbObj = new Number(_num);

        numbObj.sum = function (inputNum) {
            return num(sum(_num, inputNum));
        }
        numbObj.minor = function (inputNum) {
            return num(minor(_num, inputNum));
        }
        numbObj.mult = function (inputNum) {
            return num(mult(_num, inputNum));
        }
        numbObj.div = function (inputNum) {
            return num(div(_num, inputNum));
        }
        return numbObj;
    }
})();

num(5).sum(10);