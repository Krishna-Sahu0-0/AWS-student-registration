const API_URL =
    "https://e8beb2ilpj.execute-api.ap-south-1.amazonaws.com/students";

async function registerStudent() {

    const data = {
        studentId:
            document.getElementById("studentId").value,

        name:
            document.getElementById("name").value,

        course:
            document.getElementById("course").value,

        email:
            document.getElementById("email").value
    };

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("message").innerText =
        result.message;
}

async function viewStudents() {

    const response = await fetch(API_URL);

    const students = await response.json();

    const tbody =
        document.querySelector("#studentTable tbody");

    tbody.innerHTML = "";

    if (!Array.isArray(students)) {
        console.log(students);
        return;
    }

    students.forEach(student => {

            tbody.innerHTML += `
                <tr>
                    <td>${student.studentId}</td>
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.email}</td>
                </tr>
            `;
        });
    }