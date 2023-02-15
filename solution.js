var q1Name = "김아무개";
var q1Age = 26;
var q1From = "포항";
var q2 = { title: "타이틀", name: "이름" };
var q3 = {
    member: ["kim", "park"],
    days: 30,
    started: true
};
var q4User = "kim";
var q4Age = undefined;
var q4Married = false;
var 철수 = [
    q4User,
    q4Age,
    q4Married,
];
var q5학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John"
};
q5학교.score[4] = false;
q5학교.friend = ["Lee", q5학교.teacher];
function q6(name) {
    return !!name ? "안녕하세요 " + name : "이름이 없습니다";
}
console.log(q6("name"));
console.log(q6());
