const datatable = (value) => {  // Datatable
    if ($(value).length > 0) {
        $(value).DataTable({
          "bFilter": true,
          "paging": true        });
    }
}

const destroyDatatable = (value) => {
    if ($(value).length > 0) {
       var table =  $(value).DataTable();
       table.destroy()
    }
}

export default { datatable, destroyDatatable }