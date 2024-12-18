const formData = { email:"", message: ""};
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// 1. Завантаження збережених даних при завантаженні сторінки
window.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if(savedData){
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message =  parsedData.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});

// 2. Відстеження змін у формі через подію input
form.addEventListener("input", (event) => {
    const {name, value} =  event.target;

  if (name in formData) {
    formData[name] = value;

    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// 3. Обробка відправлення форми
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }


    var stringDataEm = formData.email;
    var stringDataMa = formData.message;
    console.log(`Введені дані: ${stringDataEm} ${stringDataMa}`);
    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    formData.message = "";
    form.reset();
});