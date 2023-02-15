let q1Name: string = "김아무개";
let q1Age: number = 26;
let q1From: string = "포항";

let q2: { title: string; name: string } = { title: "타이틀", name: "이름" };

type Q3Type = { member: string[]; days: number; started: boolean };
let q3: Q3Type = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let q4User: string = "kim";
let q4Age: undefined | number = undefined;
let q4Married: boolean = false;
let 철수: (string | (undefined | number) | boolean)[] = [
  q4User,
  q4Age,
  q4Married,
];

let q5학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
q5학교.score[4] = false;
q5학교.friend = ["Lee", q5학교.teacher];

function q6(name?: string) {
  return !!name ? "안녕하세요 " + name : "이름이 없습니다";
}
// console.log(q6("name"));
// console.log(q6());

function q7(value: string | number) {
  return value.toString().length;
}

// console.log(q7("123"));

function q8(t1: number, t2: boolean, t3: string) {
  let val = t1;
  if (t2) val += 500;
  if (t3 === "상") val += 100;
  if (val >= 600) return "결혼가능";
}
// console.log(q8());

function q9(a: (number | string)[]) {
  let nArr: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      nArr.push(parseFloat(b));
    } else {
      nArr.push(b);
    }
  });

  return nArr;
}

function q10(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "no";
  }
}

console.log(q10({ subject: ["english", "art"] }));
