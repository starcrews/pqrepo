document.getElementById( "submit" ).addEventListener( "click", submitAction, false );

/*function submitAction() {
    var form1 = $( '#formone' ).serialize();
    var form2 = $( "#formtwo" ).serialize()

    $.ajax( {
        url: '/api/images',
        type: 'POST',
        dataType: "image/jpg",
        data: form1
    } );

    $.ajax( {
        url: '/imagedetails',
        type: 'POST',
        dataType: "json", 
        data: form2
    } );

    /*$.post( '/api/images', $( '#formone' ).serialize() )
    $.post( '/imagedetails', $( '#formtwo' ).serialize() )
}*/

function submitAction() {
    var picObj = new FormData();
    var dataObj = new FormData();

    var file_data = $( "input[name='image']" ).prop( "files" )[0];

    picObj.append( "photo", file_data );
    dataObj.append( "department", $( "#department" ).val() );
    dataObj.append( "course_code", $( "#course_code" ).val() );
    dataObj.append( "course_name", $( "#course_name" ).val() );
    dataObj.append( "year", $( "#year" ).val() );
    console.log( "dataObj", dataObj );
    console.log( "picObj", picObj );
    
    $.ajax( { 
        type: "POST",
        url: "/api/images",
        data: picObj,
        enctype: "multipart/form-data",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function( res ) {
            console.log( "success", res );
        }, 
        error: function (xhr, errorType, exception) {
            console.log("xhr", xhr);
            console.log("errorType", errorType);
            console.log("exception", exception);
        },
        failure: function (failure) {
            console.log("failure", failure);
        }
    } );

    $.ajax( { 
        type: "POST",
        url: "/imagedetails",
        data: dataObj,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        success: function( res ) {
            console.log( "success", res );
        }, 
        error: function (xhr, errorType, exception) {
            console.log("xhr", xhr);
            console.log("errorType", errorType);
            console.log("exception", exception);
        },
        failure: function (failure) {
            console.log("failure", failure);
        }
    } );
}

