markdownData = document.getElementById("markdown-content").innerHTML

htmlContent = marked.parse(markdownData);

const markdownContentDiv = document.getElementById('markdown-content');
if (markdownContentDiv) {
    markdownContentDiv.innerHTML = htmlContent;
} else {
    console.error('Element with id "markdown-content" not found.');
}


var parsedData = JSON.parse(document.getElementById("contentdata").innerHTML);


console.log(parsedData)

parsedData.forEach(elementData => {
    const newElement = document.createElement('div');
    newElement.innerHTML =
        `<div class="post" onclick='window.location.href ="/blog/${elementData.id}"'>
            <h3>${elementData.title}</h3>
            <p>Author: ${elementData.author}</p>
            <p>Date: ${elementData.date}</p>
            <p class="post-tags">
                Tags:
                ${elementData.tags}
                
            </p>                </div>`;
    const sidebar = document.getElementById('post-grid');
    sidebar.appendChild(newElement);
});


function toggletheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        document.getElementById('theme-icon').textContent = 'brightness_2'; // dark mode icon
    } else {
        localStorage.setItem("theme", "light");
        document.getElementById('theme-icon').textContent = 'wb_sunny'; // light mode icon
    }
}

window.onload = function () {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        document.getElementById('theme-icon').textContent = 'brightness_2';
    } else {
        document.getElementById('theme-icon').textContent = 'wb_sunny';
    }
};