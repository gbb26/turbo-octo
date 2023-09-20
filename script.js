const value = document.querySelector("#display");
const input = document.querySelector("#slider");
value.textContent = input.value;
var numberOfUsers;
input.addEventListener("input", (event) => {

    value.textContent = event.target.value;
    numberOfUsers = event.target.value;
    if (numberOfUsers > 20) {
        document.getElementById("enterprise-plan").style.scale = 1.1;
        document.getElementById("enterprise-plan").style.backgroundColor = "#eee";
        // 
        document.getElementById("free-plan").style.scale = 0.9;
        document.getElementById("free-plan").style.backgroundColor = "#fff";
        document.getElementById("pro-plan").style.scale = 0.9;
        document.getElementById("pro-plan").style.backgroundColor = "#fff";

    }
    else if (numberOfUsers > 10 && numberOfUsers <= 20) {
        document.getElementById("pro-plan").style.scale = 1.1;
        document.getElementById("pro-plan").style.backgroundColor = "#eee";
        //
        document.getElementById("free-plan").style.scale = 0.9;
        document.getElementById("free-plan").style.backgroundColor = "#fff";
        document.getElementById("enterprise-plan").style.scale = 0.9;
        document.getElementById("enterprise-plan").style.backgroundColor = "#fff";
    }
    else {
        document.getElementById("free-plan").style.scale = 1.1;
        document.getElementById("free-plan").style.backgroundColor = "#eee";
        // 
        document.getElementById("enterprise-plan").style.scale = 0.9;
        document.getElementById("enterprise-plan").style.backgroundColor = "#fff";
        document.getElementById("pro-plan").style.scale = 0.9;
        document.getElementById("pro-plan").style.backgroundColor = "#fff";

    }

});

document.getElementById('modal-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
});

var currentPage = 1;
var isLoading = false;

function fetchData() {
    isLoading = true;
    fetch(`https://jsonplaceholder.typicode.com/posts?page=${currentPage}&_limit=5`)
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('data-list');
            data.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.textContent = item.title;
                dataList.appendChild(li);
            });
            isLoading = false;
            console.log(currentPage);
        });
}
function onScroll() {
    const dataList = document.getElementById('data-list');
    if (dataList && dataList.getBoundingClientRect().bottom <= window.innerHeight && !isLoading) {
        currentPage++;
        fetchData();
    }
}

window.addEventListener('scroll', onScroll);

fetchData()