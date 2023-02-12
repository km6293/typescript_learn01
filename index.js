// javascript는 Dynamic Typing가능 Ex) '5' - '3' = 2
// 프로젝트가 클수록 무거워질 가능성이 있기 때문에 TS 사용
// 변수 타입 종류 : string, number, boolean, null, undefined, bigint, [], {} 등..
var name1 = "kim";
var name2 = ["kim", "Lee"];
var name3 = { name: "kim" };
// ? => name이라는 속성이 들어올 수도 있고, 안들어올 수도 있음.
var name4 = {};
// Union Type (타입 2개 이상 합친 새로운 타입만들기) => string 또는 number 들어올 수 있음.
var name5 = 123;
var name6 = "test";
// 파라미터, return 의 타입을 넣을 수 있음.
function function1(x) {
    return x * 2;
}
var name7 = [123, true];
var name8 = { name: "kim", age: "123" };
// class 타입 속성
var Class1 = /** @class */ (function () {
    function Class1(name) {
        this.name = name;
    }
    return Class1;
}());
// ========================== 위는 필수문법 간단 정리
// 만일 array 혹은 object 안에 stirng 과 number 둘 다 넣는 방법 => union 쓰기
var member = [1, "2", 3];
var object = { a: "123" };
// any type -> 모든 자료형 허용해줌
var name9;
name9 = 123;
name9 = "123";
name9 = true;
