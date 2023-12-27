function generateTable() {
    const startRollNo = parseInt(document.getElementById('startRollNo').value);
    const totalStudents = parseInt(document.getElementById('totalStudents').value);

    let tableHTML = '<table class="table table-striped"><thead><tr><th>Roll No</th><th>Attendance</th></tr></thead><tbody>';

    for (let i = 0; i < totalStudents; i++) {
        const rollNo = startRollNo + i;
        tableHTML += `<tr><td>${rollNo}</td><td><input type="checkbox" id="attendance_${rollNo}" name="attendance_${rollNo}"></td></tr>`;
    }

    tableHTML += '</tbody></table>';
    document.getElementById('attendanceTable').innerHTML = tableHTML;
}
