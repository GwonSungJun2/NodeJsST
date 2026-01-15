//oldObject 객체에 동적으로 속성을 추가함
var sayNode = function() {
    console.log('Node')
}
var es = 'ES'
var oldObject = {
    sayJS: function() {
        console.log('JS')
    },
    sayNode: sayNode,
}
oldObject[es + 6] = 'Fantastic'
oldObject.sayNode()
oldObject.sayJS()
console.log(oldObject.ES6)

const newObject = {
    sayJS() {
        console.log('JS')
    },
    sayNode,
    [es + 6]: 'Fantastic'
}
newObject.sayNode();
