// script.js
// Use Papa Parse to load the CSV, then initialize DataTables
$(document).ready(function () {
  Papa.parse('data/campsites.csv', {
    download: true,
    header: true, // If your CSV has a header row
    complete: function (results) {
      const data = results.data;
      let rowsHtml = '';

      data.forEach((row) => {
        // Update these field names to match your CSV headers
        const parkName = row['Park Name'] || '';
        const state = row['State'] || '';
        const siteType = row['Site Type'] || '';
        const maxRvLength = row['Max RV Length'] || '';

        rowsHtml += `
          <tr>
            <td>${parkName}</td>
            <td>${state}</td>
            <td>${siteType}</td>
            <td>${maxRvLength}</td>
          </tr>
        `;
      });

      // Insert rows into the table
      $('#campsitesTable tbody').html(rowsHtml);

      // Initialize DataTables with export buttons
      $('#campsitesTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'copyHtml5',
          'csvHtml5',
          'excelHtml5',
          'pdfHtml5'
        ]
      });
    }
  });
});
