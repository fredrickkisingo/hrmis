const datatable = (value) => {  // Datatable
    if ($(value).length > 0) {
        $(value).DataTable({
          "bFilter": true,
          "paging": true,
          "searching":true
        });
    }
}

export default { datatable}