// javascript는 Dynamic Typing가능 Ex) '5' - '3' = 2
// 프로젝트가 클수록 무거워질 가능성이 있기 때문에 TS 사용
// 변수 타입 종류 : string, number, boolean, null, undefined, bigint, [], {} 등..

let name1: string = "kim";
let name2: string[] = ["kim", "Lee"];
let name3: { name: string } = { name: "kim" };

// ? => name이라는 속성이 들어올 수도 있고, 안들어올 수도 있음.
let name4: { name?: string } = {};

// Union Type (타입 2개 이상 합친 새로운 타입만들기) => string 또는 number 들어올 수 있음.
let name5: string | number = 123;

// Type alias => type을 변수식으로 저장해서 활용 가능.
// tpye 작명시에 첫글자 대문자 참고
type Type1 = string | number;
let name6: Type1 = "test";

// 파라미터, return 의 타입을 넣을 수 있음.
function function1(x: number): number {
  return x * 2;
}

// tuple type
type Type2 = [number, boolean];
let name7: Type2 = [123, true];

// 모든 object 속성
type Type3 = {
  [key: string]: string;
};
let name8: Type3 = { name: "kim", age: "123" };

// class 타입 속성
class Class1 {
  // 먼저 선언 한 후 진행
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// ========================== 위는 필수문법 간단 정리

// 만일 array 혹은 object 안에 stirng 과 number 둘 다 넣는 방법 => union 쓰기
let member: (number | string)[] = [1, "2", 3];
let object: { a: string | number } = { a: "123" };

// any type -> 모든 자료형 허용해줌
let name9: any;
name9 = 123;
name9 = "123";
name9 = true;
