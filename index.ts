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

// type alias
type AnimalType = { name: string; age: number };
let animal: AnimalType = { name: "김", age: 20 };

// read Only -> const일지라도 안의 값 변경 가능한것도 막아줄 수 있음.
type AnimalType2 = { readonly name: string; age: number };
const animal2: AnimalType2 = { name: "김", age: 20 };

// type 합치기1
type type1 = string;
type type2 = number;
type type3 = string | number;

// type 합치기2 extend
type type4 = { x: number };
type type5 = { y: number };
type type6 = type4 & type5;

// literal types
let test: "123"; // 123만 들어올 수 있음.

// literal types 문제점
let test2 = { a: "1" };
// as const -> object value 값을 그대로 타입으로 지정 , object 속성 모두 read only로 해줌
let test4 = { a: "1" } as const;
function test3(b: "1") {}
// test3(test2.a) // 타입이 아닌 자료가 들어가 있기 때문
test3(test4.a);

// 함수와 methods에 type alias 지정하는 법
type FuncType = (a: string) => number;
// 함수표현식 -> as 쓰기 편함
let func2: FuncType = function (a) {
  return 10;
};
// 함수선언식
function func1() {}

// html ============
let title = document.getElementById("title");
// narrow 5가지 방법
// 1
if (title != null) {
  title.innerHTML = "ㅎㅇ";
}
// 2
if (title instanceof Element) {
  title.innerHTML = "ㅎㅇ";
}
// 3
let title2 = document.getElementById("title") as Element;

// 4
if (title?.innerHTML != undefined) {
  title.innerHTML = "ㅎㅇ";
}

// 5 tscofing.json의 null 체크 false

// index link class 수정 -> 각각 상속 다른것들 다 있음 ex) 버튼
let link = document.querySelector("link");
if (link instanceof HTMLAnchorElement) {
  link.href = "kakao.com";
}

let 버튼 = document.getElementById("button");
버튼?.addEventListener("click", function () {
  console.log("안녕");
});
