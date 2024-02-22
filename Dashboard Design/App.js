

//--- Menu button --------->
$('#menu-btn').click(function() {
    $('#menu').toggleClass('active');
});

//--- Search option ------->
function searchFunction() {
    var input, filter, table, tr, tdName, tdDesignation, i, txtValueName, txtValueDesignation;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        tdName = tr[i].getElementsByTagName("td")[0]; // Name column
        tdDesignation = tr[i].getElementsByTagName("td")[1]; // Designation column
        if (tdName && tdDesignation) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueDesignation = tdDesignation.textContent || tdDesignation.innerText;
            if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueDesignation.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//--- Notification bar ---->
