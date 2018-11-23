

function logout() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/logout', true);
    xhr.send();
    window.location.replace('login');

}

function eventClic(e) {
			if (e) {
				e.preventDefault();
			}
			var firstNameFiltr = document.getElementsByName('firstNameFiltr')[0].value;
			var secondnameSortFiltr = document
					.getElementsByName('secondnameSortFiltr')[0].value;
			var groupNumberFiltr = document
					.getElementsByName('groupNumberFiltr')[0].value;

			var xhr = new XMLHttpRequest();
			var url = '/student-app/studentGetJson?'
					+ addParam('firstNameFiltr', firstNameFiltr)
					+ addParam('secondnameSortFiltr', secondnameSortFiltr)
					+ addParam('groupNumberFiltr', groupNumberFiltr);
			xhr.open('GET', url, true);
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200 || this.status === 206) {
					var data = JSON.parse(xhr.responseText);
					var table = document.getElementById('tbody');
					table.innerHTML = createTable(data);
				}
			}
		}

		function addStudent(e) {
			if (e) {
				e.preventDefault();
			}
			var firstName = document.getElementsByName('firstName')[0].value;
			var secondname = document.getElementsByName('secondname')[0].value;
			var groupNumber = document.getElementsByName('groupNumber')[0].value;
			var avgMark = document.getElementsByName('avgMark')[0].value;

			var xhr = new XMLHttpRequest();
			var url = '/student-app/studentGetJson?'
					+ addParam('firstName', firstName)
					+ addParam('secondname', secondname)
					+ addParam('groupNumber', groupNumber)
					+ addParam('avgMark', avgMark);
			xhr.open('POST', url, true);
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200 || this.status === 206) {
					eventClic(e);
				}
			}
		}
		function deleteMe(e, idForDelete) {
			if (e) {
				e.preventDefault();
			}

			var xhr = new XMLHttpRequest();
			var url = '/student-app/studentGetJson?'
					+ addParam('idForDelete', idForDelete);
			xhr.open('DELETE', url, true);
			xhr.send();
			xhr.onload = function() {
				if (this.status === 200 || this.status === 206) {
					eventClic(e);
				}
			}
		}

		function addParam(field, value) {
			return field + "=" + value + "&";
		}
		function createTable(data) {
			var rowData;
			var rowHTML;
			var tableHTML = "";
			for (var i = data.length - 1; i >= 0; i--) {
				rowData = data[i];
				rowHTML = "<tr>";
				rowHTML += "<td>" + rowData.firstName + "</td>";
				rowHTML += "<td>" + rowData.secondName + "</td>";
				rowHTML += "<td>" + rowData.groupNumber + "</td>";
				rowHTML += "<td><input type=\"button\" class='my-button' onclick=\"deleteMe(event, "
						+ rowData.id + ")\" value=\"DELETE ME\"></td>"
				rowHTML += "</tr>";
				tableHTML += rowHTML;
			}
			tableHTML += "";
			return tableHTML;
		}
		eventClic();