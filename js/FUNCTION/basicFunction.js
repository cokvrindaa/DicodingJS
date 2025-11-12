// yang ada di dalan kurung ini adalah parameter
function ferenhitkeCelcius(suhu = 50) {
  const rumus = (9 / 5) * suhu + 32;
  console.log(rumus);
}
const input = 90;
ferenhitkeCelcius();
ferenhitkeCelcius(input);
