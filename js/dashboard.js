
let user = localStorage.getItem("loggedInUser");
if(!user){
    window.location.href="index.html";
}

document.getElementById("welcome").innerText = "Welcome, " + user;

function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href="index.html";
}

let tools = [
    {name:"ChatGPT", url:"https://chat.openai.com"},
    {name:"Gemini", url:"https://gemini.google.com"},
    {name:"Claude", url:"https://claude.ai"},
    {name:"Perplexity", url:"https://perplexity.ai"},
    {name:"HuggingFace", url:"https://huggingface.co"},
    {name:"Midjourney", url:"https://midjourney.com"},
    {name:"Poe", url:"https://poe.com"}
];

function renderTools(list){
    let container = document.getElementById("toolsContainer");
    container.innerHTML="";
    list.forEach(t=>{
        container.innerHTML+=`
        <div>
            <h3>${t.name}</h3>
            <a href="${t.url}" target="_blank">Visit</a>
        </div>`;
    });
}

renderTools(tools);

function filterTools(){
    let search = document.getElementById("search").value.toLowerCase();
    renderTools(tools.filter(t=>t.name.toLowerCase().includes(search)));
}
