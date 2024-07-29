
document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("popup");
  let openPopupBtn = document.getElementById("open-popup");
  let closePopupBtn = popup.querySelector(".close-btn");
  let popupContent = popup.querySelector(".popup-content");

  openPopupBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    popup.classList.add("active");
  });

  closePopupBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    popup.classList.remove("active");
  });

  popupContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });


  document.addEventListener("click", function (e) {
    if (!popup.contains(e.target) && !e.target.matches("#open-popup")) {
      popup.classList.remove("active");
    }
  });
});


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addPhoto() {
  let img2 = document.createElement('img');
  img2.src = '/image/trash-svgrepo-com 1.png';
  img2.style.width = '50px';
  img2.style.height = '50px';

  if (listContainer === '') {
    listContainer.appendChild(img2)
  }

}


function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.textContent = inputBox.value;

    let img = document.createElement('img');
    img.src = '/image/trash-svgrepo-com 1.png';
    img.style.width = '20px';
    img.style.height = '20px';
    li.appendChild(img);


    img.addEventListener('mouseover', function () {
      img.src = '/image/trash-red svgrepo-com 1.png';
    });

    img.addEventListener('mouseout', function () {
      img.src = '/image/trash-svgrepo-com 1.png';
    });

    listContainer.appendChild(li);
  }

  inputBox.value = '';
  saveData();

  popup.classList.remove("active");

}

listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'IMG') {

    e.target.parentElement.remove();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


document.getElementById('search1').addEventListener('input', function () {
  var searchValue = this.value.toLowerCase();
  var listItems = document.querySelectorAll('#list-container li');

  listItems.forEach(function (item) {
    var text = item.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});




function filterTasks(status) {
  var listItems = document.querySelectorAll('#list-container li');

  listItems.forEach(function (item) {
    switch (status) {
      case 'all':
        item.style.display = 'block';
        break;
      case 'complete':
        if (item.classList.contains('checked')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
        break;
      case 'incomplete':
        if (!item.classList.contains('checked')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
        break;
    }
  });
}


document.getElementById('filter-all').addEventListener('click', function (e) {
  e.preventDefault();
  filterTasks('all');
});

document.getElementById('filter-complete').addEventListener('click', function (e) {
  e.preventDefault();
  filterTasks('complete');
});

document.getElementById('filter-incomplete').addEventListener('click', function (e) {
  e.preventDefault();
  filterTasks('incomplete');
});


filterTasks('all');


var icon = document.getElementById('icon')
icon.onclick = function () {
  document.body.classList.toggle('dark-them')

}

