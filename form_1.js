"use strict";
document.querySelector(".submit").addEventListener("click", function () {
  const firstname = document.querySelector(".fname").value;
  const lastname = document.querySelector(".lname").value;
  const email = document.querySelector(".email").value;
  confirm(
    `have you entered the follwoing details \n Name:${firstname} ${lastname}\nEmail:${email}`
  );
});
