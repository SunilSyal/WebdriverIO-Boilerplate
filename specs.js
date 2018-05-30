module.exports = {
    getSpecs: getSpecs,
    fnGetArgValue: fnGetArgValue
};

function fnGetArgValue(arr, argStr) {
    return arr.filter(function(item, i) {
        if (arr[i - 1] == argStr) {
            return true
        }
    })
}

function getSpecs(args) {
    var breakPoints = {
            'all': "_A_",
            'large': "_L_",
            'medium': "_M_",
            'small': '_S_',
            'xsmall': '_XS_',
        },
        specArr = [],
        selectedBreakPoint;

    selectedBreakPoint = breakPoints[fnGetArgValue(args, '-b')];
    selectedPage = fnGetArgValue(args, '-p');
    specArr.push('spec/'+selectedPage+'/_A_*.test.js')

    specArr.push('spec/' + selectedPage + '/*' + selectedBreakPoint + '*.test.js')
    return (specArr)
}
