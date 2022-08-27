Swal.fire({
    title: '<strong>¿te gusto la pagina ?<u>',
    icon: 'info',
    html:
      'danos tu opinion <b>, ' +
      '<a href="">links</a> ',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })