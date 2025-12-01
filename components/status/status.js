 const card = document.querySelector(".card")

 const carddetail = (options) =>{
    const template = document.createElement("template")
    template.innerHTML = `
    <div class="contianer">
    <div class="card__uppersection"> 
    <p> ${options.title}</p>
    <div>
     <img src= "${options.icons}">
    </div>
  </div>
  <div class="amount">
    <h3 class="value">${options.number}</h3>
    <h5>${options.text}</h5>
  </div> 

  </div>
         
    `
    return template.content.cloneNode(true);
  }

 

  const getdeatils = carddetail ({
    title: "active Tasks",
    icons: "/assets/images/checkedbox.svg",
    number: 2,
    text: "0 completed"
  })

  const card2 = carddetail({
    title: "Total Expenses",
    icons: "/assets/images/dollar.svg",
    number: "$0.00",
    text: "This period"

  })

  const card3 = carddetail({
    title: "Total Notes",
    icons: "/assets/images/file.svg",
    number: "0",
    text: "Saved notes"

  })


  const card4 = carddetail({
    title: "Completion",
    icons: "/assets/images/dollar.svg",
    number: "0%",
    text: "Task Completion"

  })
  

  
card.appendChild(getdeatils);
card.appendChild(card2);
card.appendChild(card3);
card.appendChild(card4);



  