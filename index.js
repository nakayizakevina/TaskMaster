



// const componentElements = document.querySelectorAll("[data-import]");

// function loadComponents(domElement){
//     const elementsArray = domElement.querySelectorAll("[data-import]");
// }

// for(let element of elementsArray){
//     const dataImport = element.getAttribute("data-import");
// }

// fetch(dataImport)
// .then((res)=>{
//     if(!res.ok){
//         throw "Not found";

//     }
//     return res.text();
// })
// .then((component)=> {
//     element.innerHTML = component;
//     loadComponentScripts(element)
// })
// .catch(()=> {
//     element.innerHTML = 
//     <h4>component not found</h4>
// });

// function loadComponentScripts(element){
//     const scripts = element.querySelectorAll("script");
//     for(let script of scripts){
//         const newScript = document.createElement('script');
//         if(script.src){
//             newScript.textcontent = script.textContent; 
//         }
//         script.remove()

//         document.body.appendChild(newScript)
//     }
// }



const componentElements = document.querySelectorAll("[data-import]");

function loadComponents(domElement) {
    const elementsArray = domElement.querySelectorAll("[data-import]");

    for (let element of elementsArray) {
        const dataImport = element.getAttribute("data-import");

        fetch(dataImport)
            .then((res) => {
                if (!res.ok) throw "Component not found";
                return res.text();
            })
            .then((component) => {

                element.innerHTML = component;
loadComponentScripts(element);
loadComponents(element);  // <-- This loads nested components

                // element.innerHTML = component;
                // loadComponentScripts(element);
            })
            .catch(() => {
                element.innerHTML = "<h4>Component not found</h4>";
            });
    }
}

// Load scripts inside the imported component
function loadComponentScripts(element) {
    const scripts = element.querySelectorAll("script");

    for (let script of scripts) {
        const newScript = document.createElement("script");

        if (script.src) {
            newScript.src = script.src; // load external script
        } else {
            newScript.textContent = script.textContent; // inline script
        }

        script.remove();
        document.body.appendChild(newScript);
    }
}

// First load components in the document
loadComponents(document);

