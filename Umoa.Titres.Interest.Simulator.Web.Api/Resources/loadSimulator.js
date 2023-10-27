function loadSimulator(baselink) {

    let rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    rootDiv.className = 'main';
    rootDiv.style.background = '#fff';
    rootDiv.style.margin = 'auto';
    rootDiv.style.borderRadius = '10px';
    rootDiv.style.boxShadow = '5px #000';

    // Append the root div to the body
    document.body.appendChild(rootDiv);

    // Create the CSS link element
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = baselink+'/static/css/main.css';

    // Append the CSS link to the head
    document.head.appendChild(cssLink);

    // Create the JavaScript script element
    var jsScript = document.createElement('script');
    jsScript.src = baselink+'/static/js/main.js';

    // Append the JavaScript script to the body
    document.body.appendChild(jsScript);
}

document.addEventListener('DOMContentLoaded', loadSimulator("@baselink"));

