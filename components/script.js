
const types = ["Select Type", "Road", "Gravel", "Mountain","Folding"];
const text = [
  { value: "Road", text: "Road" },
  { value: "Gravel", text: "Gravel" },
  { value: "Mountain", text: "Mountian" },
  { value: "Folding", text: "Folding" },
 
];
const genders = ["Select Gender", "Male", "Female", "unavailable"];
const skills = [
  { value: "WMAD", text: "Web And Mobile Development" },
  { value: "HR", text: "Human Resource" },
  { value: "SALE", text: "Sale" },
  { value: "FILM", text: "Film" },
 
];

// bicycles data
var bicycles = [
    {
      model: "Model XYZ 1",
      brand: "XYZ Bikes",
      type: "MMX",
      price: 209.99,
      discount_amount: 20.99,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-209-99$.webp",
      discount: true,
      condition: "new",
      location: "Kampot",
      new_arrival: true,
    },
    {
      model: "Model XYZ 2",
      brand: "XYZ Bikes",
      type: "MMX",
      price: 269,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-269$.jpg",
      discount: false,
      condition: "new",
      location: "Battambang",
      new_arrival: true,
    },
    {
      model: "Model ABC 1",
      brand: "ABC Cycles",
      type: "Electric",
      price: 599,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-599$.jpg",
      discount: false,
      condition: "new",
      location: "Phnom Penh",
      new_arrival: true,
    },
    {
      model: "Model ABC 2",
      brand: "ABC Cycles",
      type: "Electric",
      price: 1399,
      discount_amount: 279.8,
      discount_percentage: 20,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.jpg",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Siemreap",
      new_arrival: true,
    },
    {
      model: "Model ABC 3",
      brand: "ABC Cycles",
      type: "Electric",
      price: 1399,
      discount_amount: 559.6,
      discount_percentage: 40,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Kep",
      new_arrival: false,
    },
    {
      model: "Model PQR 1",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 27,
      discount_amount: 2.7,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 1",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 27,
      discount_amount: 13.5,
      discount_percentage: 50,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
      discount: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 2",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 160.98,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-160-98$.jpg",
      discount: false,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 3",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 309,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-309$.jpg",
      discount: false,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 4",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 27,
      discount_amount: 2.7,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-2-27$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model PQR 5",
      brand: "PQR Bikes",
      type: "Mountain",
      price: 375,
      discount_amount: 37.5,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-375$.jpg",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 599.99,
      discount_amount: 29.99,
      discount_percentage: 5,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599.99$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 599,
      discount_amount: 59.9,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599$.webp",
      discount: true,
      free_delivery: true,
      condition: "used",
      location: "Phnom Penh",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 799.99,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-799-99$.webp",
      discount: false,
      free_delivery: true,
      condition: "used",
      location: "Siemreap",
      new_arrival: false,
    },
    {
      model: "Model MNO 5",
      brand: "MNO Bikes",
      type: "Road",
      price: 749.99,
      discount_amount: 0,
      discount_percentage: 0,
      image:
        "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-749-99$.jpg",
      discount: false,
      free_delivery: true,
      condition: "new",
      location: "Phnom Penh",
      new_arrival: false,
    },
  ];
  const genderSelect = document.getElementById("gender");
  for (let i = 0; i < genders.length; i++) {
    genderSelect.innerHTML += `<option value="${genders[i]}">${genders[i]}</option>`;
  }
  
  genderSelect.addEventListener("change", filterGender);
  
  function filterGender(event) {
    let filterStudents = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].gender.toUpperCase() === genderSelect.value.toUpperCase()) {
        filterStudents.push(students[i]);
      }
    }
  
    const studentList = document.getElementById("student-list");
    var contentHTML = "";
    for (let i = 0; i < filterStudents.length; i++) {
      contentHTML += `
        <div class="student-card">
          ${filterStudents[i].fullName}
        </div>
      `;
    }
    studentList.innerHTML = `
      <div>Number of ${genderSelect.value}: ${filterStudents.length}</div>
      ${contentHTML}
    `;
  }
    
  