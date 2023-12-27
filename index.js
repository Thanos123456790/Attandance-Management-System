let startRollNo;
let totalStudents;

function generateTable() {
    startRollNo = parseInt(document.getElementById('startRollNo').value);
    totalStudents = parseInt(document.getElementById('totalStudents').value);

    let tableHTML = '<table class="table table-striped"><thead><tr><th>Roll No</th><th>Attendance</th><th>Action</th></tr></thead><tbody>';

    for (let i = 0; i < totalStudents; i++) {
        const rollNo = startRollNo + i;
        tableHTML += `<tr><td>${rollNo}</td><td><input type="checkbox" id="attendance_${rollNo}" name="attendance_${rollNo}"></td><td><button onclick="deleteRow(this)">Delete</button></td></tr>`;
    }

    tableHTML += '<tr><td colspan="3"><button onclick="addRow()">Add Row</button></td></tr>';
    tableHTML += '</tbody></table>';

    document.getElementById('attendanceTable').innerHTML = tableHTML;
    document.getElementById('attendanceForm').style.display = 'none';
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addRow() {
    const table = document.querySelector('.table tbody');
    const lastRollNo = startRollNo + totalStudents - 1;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${lastRollNo + 1}</td><td><input type="checkbox" id="attendance_${lastRollNo + 1}" name="attendance_${lastRollNo + 1}"></td><td><button onclick="deleteRow(this)">Delete</button></td>`;

    table.insertBefore(newRow, document.querySelector('.table tbody tr:last-child'));
    totalStudents++;

    // Reorder the "Add Row" button to be at the end
    table.appendChild(document.querySelector('.table tbody tr:last-child'));
}
