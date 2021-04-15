import Swal from 'sweetalert2';

class Swalert {
  static confirm(title: string, text: string, confirmButtonText: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText
    });
  };
  static fire(title: string, desc: string, icon: any) {
    return Swal.fire(title, desc, icon);
  };
};

export default Swalert;
