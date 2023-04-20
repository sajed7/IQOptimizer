let Deleted_rows_table_plans = []
let Deleted_rows_table_tags = []
$(document).ready(function() {

    // Basic example
    var example1 = new BSTable("basic-edit");
    example1.init();

    // New row edit-table example
    var example2 = new BSTable("new-edit", {
        editableColumns:"0,1,2,3,4,5",
        field_name: "subscription_plan",
        $addButton: $('#table2-new-row-button'),
        onEdit:function() {
        },
        onBeforeDelete:($row)=>{
            if ($row.children().last().prev().get()[0].firstChild) {
                
                Deleted_rows_table_plans.push($row.children().last().prev().get()[0].firstChild.getAttribute("value"))
            }
            console.log($row);
        }
    });
    example2.init();
    var example3 = new BSTable("new-edit2", {
        editableColumns:"0",
        field_name: "tag",
        $addButton: $('#table3-new-row-button'),
        onEdit:function() {
        },
        onBeforeDelete:($row)=>{
            if ($row.children().last().prev().get()[0].firstChild) {
                
                Deleted_rows_table_tags.push($row.children().last().prev().get()[0].firstChild.getAttribute("value"))

            }
            console.log($row);
        }
    });
    example3.init();

    // Example only some columns editable & removed actions column label
    var example3 = new BSTable("removecolumns-edit", {
        editableColumns:"1,2",
        advanced: {
            columnLabel: ''
        }
    });
    example3.init();

   
} );


