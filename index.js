var str = "Mritunjay123Kumar0-2-9mk-1";
const dig = "0123456789";
var sum = 0;

for (const key in str) {
  if (str[key] == "-") {
    console.log(str[key]);
    console.log(str[key], str[key + 1]);
  }
}