// javascript는 Dynamic Typing가능 Ex) '5' - '3' = 2
// 프로젝트가 클수록 무거워질 가능성이 있기 때문에 TS 사용
// 변수 타입 종류 : string, number, boolean, null, undefined, bigint, [], {} 등..

let name1: string = "kim";
let name2: string[] = ["kim", "Lee"];
let name3: { name: string } = { name: "kim" };

// ? => name이라는 속성이 들어올 수도 있고, 안들어올 수도 있음.
// 옵셔널 체이닝인듯
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

// unknown type -> 모든 자료형 허용해줌, any랑 같음
let name10: unknown;

// unknown 이 any보다 안전한 이유는 다른 변수에 들어가는것도 허락을 해주는지 안해주는지 차이;
// let bug1 : string = name9;
// let bug2 : stirng = unknown;

// function void 타입
function function2(x?: number): void {
  1 + 1;
}
function2();

// 변수? : number = 변수 : number | undifined와 같음

// 1. Type Narrowing -> type 이 아직 하나로 확정되지 않은경우 써야됨. ex) typeof, in, instanceof
function function3(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

// 2. assertion 문법(타입 덮어쓰기)
function function4(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
