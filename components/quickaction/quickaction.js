 const actionContainer = document.querySelector(".action")

 

  const actions = (options) =>{
    const template = document.createElement("template")
    template.innerHTML = `
    <div class="task">
     <div>
       <img src= "${options.icons}">
     </div>
     
      <div class="task__details">
        <p class="value">${options.title}</p>
        <span> ${options.text}</span>
      </div> 
   </div>`
    return template.content.cloneNode(true);
  }

 

  const action1 = actions({
    icons: "/assets/images/checkedbox.svg",
    title: "Create New Task",
    text: "Add a task to your list"
  })

  
  const action2 = actions({
    icons: "/assets/images/dollar.svg",
    title: "Track Expense",
    text: "Record a new expense"
  })

  const action3 = actions({
    icons: "/assets/images/file.svg",
    title: "Write Note",
    text: "capture your thoughts"
  })
  
  

  
actionContainer.appendChild(action1);
actionContainer.appendChild(action2);
actionContainer.appendChild(action3);


