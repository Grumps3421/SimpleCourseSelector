function submit() {
     username = document.getElementById("user").value.trim();
     courseSelect = document.getElementById("course");
     courseCode = courseSelect.value;
     courseName = courseSelect.options[courseSelect.selectedIndex].text;

    if (username === "") {
        alert('Please enter a username.');
        return;
    }

    const userData = {
        username: username,
        course: {
            code: courseCode,
            name: courseName
        }
    };

    let savedData = JSON.parse(localStorage.getItem("userData")) || [];

    usernameExists = savedData.some(user => user.username.toLowerCase() === username.toLowerCase());


    if (usernameExists) {
        alert('Username already exists. Please choose another.');
        return;
    }


    savedData.push(userData);
    localStorage.setItem('userData', JSON.stringify(savedData));

    alert("Submitted");
    document.getElementById("user").value = "";
    document.getElementById("course").selectedIndex = 0;
}

function view () {
    let savedData = JSON.parse(localStorage.getItem("userData")) || [];
    if (savedData.length === 0) {
        alert("No data found.");
        return;
    }

    let message = "Saved Entries:\n\n";
    savedData.forEach((entry, index) => {
        message += `${index + 1}. Username: ${entry.username}, Course: ${entry.course.name} (${entry.course.code})\n`;
    });

    alert(message);
};

function clearAll() {
    localStorage.removeItem("userData");
    alert("All saved data has been cleared.");
}


