const aisummary = document.getElementById("aisummary");
const parent = document.getElementById("summarisedoverview");
const summary = document.getElementById("summary");
const stateicon = document.getElementById("stateicon");
const statemessage = document.getElementById("statemessage");



aisummary.addEventListener("click", function () {
  parent.innerHTML = `
    <div class="sidebar__credetials aisummary">
      <p>AI-Powered Task Summary</p>
      <span>Get insights and recommendation for your tasks</span>
    </div>
   
    <button class="add-task-btn">Generate New</button>

    <div class="tabs">
      <button class="tab-btn active">
      <img src="./assets/images/star.svg" alt="">
      Latest Summary
      </button>
      <button class="tab-btn" id="history-btn">
      <img src="./assets/images/clock.svg" alt="">
      History(0)
      </button>
    </div>`
    
     stateicon.src = "/assets/images/graph.svg";
     statemessage.innerHTML = `No summary generated yet<br/>Click "Generate New" to get AI-Powered insights`;

   
  
  const historybtn = document.getElementById("history-btn");
  historybtn.addEventListener("click", function () {
    stateicon.src = "/assets/images/clock.svg";
    statemessage.innerHTML = `No summary history <br/> Generate summaries to build up your history`;
  });
     
});


const createtask = document.getElementById("createtask");
const addtask = document.getElementById("addtask");
const cancel = document.getElementById("cancel");

addtask.addEventListener("click", function(){
  createtask.style.display = "block";

});

cancel.addEventListener("click", function(){
  createtask.style.display= "none";
})