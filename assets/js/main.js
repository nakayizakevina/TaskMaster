function renderComponents(elements){
  for (let element of elements) {
        const dataImport = element.getAttribute("data-import");
        fetch(dataImport)
            .then((res) => {
                if (!res.ok) throw "Component not found";
                return res.text();
            })
            .then((component) => {
                element.innerHTML = component;
                loadComponentStylesheets(element, dataImport); 
                loadComponentScripts(element);
                const subComponents = element.querySelectorAll("[data-import]");
                renderComponents(subComponents);
            })
            .catch(() => {
                element.innerHTML = "<h4>Component not found</h4>";
            });
    }
} 

const componentElements = document.querySelectorAll("[data-import]");
renderComponents(componentElements)

function loadComponentStylesheets(element, componentPath) {
    const links = element.querySelectorAll('link[rel="stylesheet"]');
    const head = document.head;
    const componentDir = componentPath.substring(0, componentPath.lastIndexOf('/') + 1);
    
    for (let link of links) {
        const href = link.getAttribute('href');
        const resolvedHref = resolveRelativePath(componentDir, href);
        const existingLink = head.querySelector(`link[href="${resolvedHref}"]`);
        
        if (!existingLink) {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = resolvedHref;
            head.appendChild(newLink);
        }
        

        link.remove();
    }
}

function resolveRelativePath(basePath, relativePath) {
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || relativePath.startsWith('/')) {
        return relativePath;
    }
    
    const combinedPath = basePath + relativePath;
    
    const parts = combinedPath.split('/');
    const normalized = [];
    
    for (let part of parts) {
        if (part === '..') {
            normalized.pop();
        } else if (part !== '.' && part !== '') {
            normalized.push(part);
        }
    }
    
    return normalized.join('/');
}

function loadComponentScripts(element) {
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement("script");
        if (script.src) {
            newScript.src = script.src;
        } if(script.textContent){
            newScript.textContent = script.textContent;
        }
        
        script.remove()

        element.appendChild(newScript)
    }
}













