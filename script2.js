$('#login-form').submit(function(e) {
    e.preventDefault();
    const formData = $(this).serialize();
    // Send form data to the PHP backend
    $.ajax({
      type: 'POST',
      url: '/login',
      data: formData,
      success: function(response) {
        console.log(response);
      },
      error: function(xhr, textStatus, errorThrown) {
        console.log(xhr, textStatus, errorThrown);
      }
    });
  });