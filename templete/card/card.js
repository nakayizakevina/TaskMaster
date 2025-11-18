document.addEventListener("DOMContentLoaded", () => {
     const loginBtn = document.getElementById("login"); 
     const signupBtn = document.getElementById("signup"); 
     const fullName = document.getElementById("fullname"); 
     const title = document.getElementById("weclomemessage"); 
     const remark = document.getElementById("welcomeremark");
     
    //  if (fullName) fullName.style.display = "none"; 
     
     loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
         fullName.style.display = "none"; 
         loginBtn.classList.add("active");
         signupBtn.classList.remove("active"); 
         title.textContent = "Welcome Back!";
         remark.textContent = "Enter your details to access your account";
         console.log("Hi there")
         }); 
         
     signupBtn.addEventListener("click", (e) => {
         e.preventDefault();
         fullName.style.display = "block";
         signupBtn.classList.add("active"); 
         loginBtn.classList.remove("active"); 
         title.textContent = "Join TaskMaster";
         remark.textContent = "Create an account to boost your productivity";
         }); 
        
        }); 

