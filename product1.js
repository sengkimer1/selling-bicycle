const filters = ["Select","Road", "Gravel", "Folding", "Mountain"];
const filterSelect = document.getElementById("filter");
// const classSelect = document.getElementById("class");

for (let i = 0; i < filters.length; i++) {
  if (i === 0) {
    filterSelect.innerHTML += `<option value="${filters[i]}" disabled selected>${filters[i]}</option>`;
  } else {
    filterSelect.innerHTML += `<option value="${filters[i]}">${filters[i]}</option>`;
  }
}

const conditions = [
  { value: "WMAD", text: "Select" },
  { value: "WMAD", text: "Condition" },
  { value: "WMAD", text: "Used" },
  { value: "HR", text: "New" },
];
const conditionSelect = document.getElementById("condition");
for (let i = 0; i < conditions.length; i++) {
  if (i === 0)
    conditionSelect.innerHTML += `<option value="${conditions[i].value}" disabled selected>${conditions[i].text}</option>`;
  else
    conditionSelect.innerHTML += `<option value="${conditions[i].value}">${conditions[i].text}</option>`;
}
