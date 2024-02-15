// Constants
const studentId = '200594021'; // Replace with your actual student ID
const imageSrcArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg','img/img4.jpg', 'img/img5.jpg']; // Replace with actual image names in your directory

// Function to change bg color from user input and add student id
function changeCustomColor() {
    document.getElementById('myStudentId').textContent = studentId;
    const customNumber = document.getElementById('customNumber').value;
    document.body.style.backgroundColor = getColorForNumber(customNumber);
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundColor = getColorForNumber(randomNum);
}

// Function to generate options for select list
function addList() {
    const select = document.getElementById('imageSelect');
    if (select.length === 1) { // Ensuring options are added only once
        imageSrcArray.forEach(img => {
            const option = document.createElement('option');
            option.value = img;
            option.textContent = img;
            select.appendChild(option);
        });
    }
}

// Function to change image
function changeImage() {
    const selectedImage = document.getElementById('imageSelect').value;
    const imageElement = document.getElementById('images');
    imageElement.src = selectedImage;
}

// Function to get color based on number
function getColorForNumber(num) {
    if (num < 0 || num > 100) return 'red';
    if (num <= 20) return 'green';
    if (num <= 40) return 'blue';
    if (num <= 60) return 'orange';
    if (num <= 80) return 'purple';
    return 'yellow';
}

// Event listeners
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);
document.getElementById('imageSelect').addEventListener('click', addList);
document.getElementById('imageSelect').addEventListener('change', changeImage);
