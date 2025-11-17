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
                loadComponentStylesheets(element, dataImport);  // Pass component path
                loadComponentScripts(element);
                loadComponents(element);
            })
            .catch(() => {
                element.innerHTML = "<h4>Component not found</h4>";
            });
    }
}

// Load stylesheets from imported component into <head>
function loadComponentStylesheets(element, componentPath) {
    const links = element.querySelectorAll('link[rel="stylesheet"]');
    const head = document.head;
    
    // Get the directory of the component for resolving relative paths
    const componentDir = componentPath.substring(0, componentPath.lastIndexOf('/') + 1);
    
    for (let link of links) {
        const href = link.getAttribute('href');
        
        // Resolve relative path based on component location
        const resolvedHref = resolveRelativePath(componentDir, href);
        
        // Check if this stylesheet is already in the head to avoid duplicates
        const existingLink = head.querySelector(`link[href="${resolvedHref}"]`);
        
        if (!existingLink) {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = resolvedHref;
            head.appendChild(newLink);
        }
        
        // Remove the link from the component body since it's now in head
        link.remove();
    }
}

// Helper function to resolve relative paths
function resolveRelativePath(basePath, relativePath) {
    // If the path is already absolute (starts with http:// or https:// or /), return as is
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || relativePath.startsWith('/')) {
        return relativePath;
    }
    
    // Combine base path with relative path
    const combinedPath = basePath + relativePath;
    
    // Normalize the path (resolve ../ and ./)
    const parts = combinedPath.split('/');
    const normalized = [];
    
    for (let part of parts) {
        if (part === '..') {
            normalized.pop(); // Go up one directory
        } else if (part !== '.' && part !== '') {
            normalized.push(part);
        }
    }
    
    return normalized.join('/');
}

// Load scripts inside the imported component
function loadComponentScripts(element) {
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement("script");
        if (script.src) {
            newScript.src = script.src;
        } else {
            newScript.textContent = script.textContent;
        }
        script.remove();
        document.body.appendChild(newScript);
    }
}

// First load components in the document
loadComponents(document);



document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");
    const fullName = document.getElementById("fullname");

    
    fullName.style.display = "none";

    loginBtn.addEventListener("click", () => {
        fullName.style.display = "none";
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });

    signupBtn.addEventListener("click", () => {
        fullName.style.display = "block";
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });

});











































































