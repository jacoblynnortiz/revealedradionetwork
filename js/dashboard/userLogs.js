const userLogsTable = document.getElementById('userLogsTable');

$.getJSON('https://api.npoint.io/a89f5510ea7caba7f658', function (userLogs) {
    for (let i = 0; i < userLogs.length; i++) {
                // creates a new log

                let nameItem = document.createElement("td");
                let emailItem = document.createElement("td");
                let messageItem = document.createElement("td");
                let timestampItem = document.createElement("td");
        
                nameItem.setAttribute("data-cell", "Full Name");
                emailItem.setAttribute("data-cell", "Email");
                messageItem.setAttribute("data-cell", "Message");
                timestampItem.setAttribute("data-cell", "Timestamp");
        
                let userLog = document.createElement("tr");
                userLog.classList.add('userlogs-row');
        
                nameItem.innerText = userLogs[i].fullName;
                emailItem.innerText = userLogs[i].email;
                messageItem.innerText = userLogs[i].message;
                timestampItem.innerText = userLogs[i].timestamp;
        
                userLog.appendChild(nameItem);
                userLog.appendChild(emailItem);
                userLog.appendChild(messageItem);
                userLog.appendChild(timestampItem);
                userLogsTable.appendChild(userLog);
    }
});