const firebaseConfig = {
    apiKey: "AIzaSyBvw7VNnuMT0mUD1lWe1zfwmNkpOvY1oSw",
    authDomain: "urbancleanco-ae5e0.firebaseapp.com",
    databaseURL: "https://urbancleanco-ae5e0-default-rtdb.firebaseio.com",
    projectId: "urbancleanco-ae5e0",
    storageBucket: "urbancleanco-ae5e0.appspot.com",
    messagingSenderId: "145009318283",
    appId: "1:145009318283:web:525b1db4d2cd3d74ef378e"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDmdcTDuweIDYE2eyYqW0sgzy897UbZ19I",
//     authDomain: "urbancompany-808bc.firebaseapp.com",
//     databaseURL: "https://urbancompany-808bc-default-rtdb.firebaseio.com",
//     projectId: "urbancompany-808bc",
//     storageBucket: "urbancompany-808bc.appspot.com",
//     messagingSenderId: "968480534910",
//     appId: "1:968480534910:web:a7993cdb8076c16f09c32f"
//   };
firebase.initializeApp(firebaseConfig);
var BookingFormDB = firebase.database().ref("BookingForm");
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form").addEventListener("submit", submitForm);
});

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var date = getElementVal("date");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var address = getElementVal("address");
    var query = getElementVal("query");

    saveMessages(name,date,email,phone,address,query);
}
const saveMessages = (name,date,email,phone,address,query) => {
    var newContactForm = BookingFormDB.push();
  
    newContactForm.set({
      name: name,
      date: date,
      email: email,
      phone: phone,
      address: address,
      query: query,
    });
  };
    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }
