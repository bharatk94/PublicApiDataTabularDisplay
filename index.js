$(document).ready(function () {

   $("#btn").on('click', function () {

      var urlLink = $("#urlLink").val();
      var jsonLink = {
         'link': urlLink
      };

      $.ajax({
         type: "POST",
         contentType: 'application/json',
         url: "http://localhost:8081/urldata",
         dataType: 'json',
         data: JSON.stringify(jsonLink),
         success: function (result) {

            var div1 = "";
            div1 += "";
            var col1 = "";

            col1 += "<thead><tr>";
            $.each(result.fields[0], function (k, v) {
               col1 += '<th>' + k + '</th>'
            })
            col1 += "</tr></thead>";

            for (var i = 0; i < result.fields.length; i++) {

               col1 += "<tbody><tr>";
               $.each(result.fields[i], function (k, v) {
                  col1 += '<td>' + v + '</td>'
               })
               col1 += "</tr></tbody?";
            }
            $("#table2").html(col1);
            $('#table2').tablesorter().trigger('update');

            var div2 = "";
            div2 += "";
            var col2 = "";

            col2 += "<thead><tr>";
            $.each(result.data[0], function (k, v) {
               col2 += '<th>' + k + '</th>'
            })
            col2 += "</tr></thead>";
            for (var i = 0; i < result.data.length; i++) {

               col2 += "<tr>";
               $.each(result.data[i], function (k, v) {
                  col2 += '<td>' + v + '</td>'
               })
               col2 += "</tr>";
            }
            $("#table1").html(col2);
            $('#table1').tablesorter().trigger('update');

         }
      });
   });
});