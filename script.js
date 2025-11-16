// ------------------- تواصل معنــا ------------------ //
function validateContactForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const nameOnlyLetters = /^[A-Za-z\u0600-\u06FF\s]{4,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("يرجى ملء جميع الحقول.");
    return;
  }

  if (!nameOnlyLetters.test(name)) {
    alert("الاسم يجب أن يحتوي على أحرف فقط، ويكون 4 أحرف على الأقل.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("يرجى إدخال بريد إلكتروني صحيح.");
    return;
  }

  alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    window.location.href = "home.html";
}


// ------------------- تسجيل الدخول ------------------- //
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const nameOnlyLetters = /^[A-Za-z\u0600-\u06FF\s]{4,}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

  if (!nameOnlyLetters.test(username)) {
    alert("اسم المستخدم يجب أن يحتوي على أحرف فقط ويكون 4 أحرف على الأقل.");
    return;
  }

  if (!passwordPattern.test(password)) {
    alert("كلمة المرور يجب أن تتكون من أحرف وأرقام وطولها 5 عناصر على الأقل.");
    return;
  }
  localStorage.setItem("loggedInUser", username);
  window.location.href = "home.html";
}


// ------------------- حفظ تفاصيل السيارة ------------------- //
function saveCarData(carName, carPrice, carImage) {
  const carDetails = {
    name: carName,
    price: carPrice,
    image: carImage
  };
  localStorage.setItem("selectedCar", JSON.stringify(carDetails));
  window.location.href = "car-details.html";
}


// ------------------- عرض تفاصيل السيارة ------------------- //
function displayCarDetails() {
  const carData = JSON.parse(localStorage.getItem("selectedCar"));
  if (carData) {
    document.getElementById("car-name").innerText = carData.name;
    document.getElementById("car-price").innerText = carData.price;
    document.getElementById("car-image").src = carData.image;
  } else {
    document.getElementById("car-name").innerText = "لا توجد بيانات سيارة.";
  }
}


// ------------------ إكمال عملية الشراء ------------------ //
function completePurchase(event) {
  event.preventDefault();

  const name = document.getElementById("buyerName").value.trim();
  const phone = document.getElementById("buyerPhone").value.trim();
  const email = document.getElementById("buyerEmail").value.trim();
  const nameOnlyLetters = /^[A-Za-z\u0600-\u06FF\s]{4,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{9}$/;

  if (!name || !phone || !email) {
    alert("يرجى ملء جميع الحقول قبل إكمال الشراء.");
    return;
  }

  if (!nameOnlyLetters.test(name)) {
    alert("الاسم يجب أن يحتوي على أحرف فقط ويكون 4 أحرف على الأقل.");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("رقم الهاتف يجب أن يتكون من 9 أرقام.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("يرجى إدخال بريد إلكتروني صحيح.");
    return;
  }

  alert("تم إكمال العملية، سيتم التواصل معك قريباً.");
   window.location.href = "home.html";
}
