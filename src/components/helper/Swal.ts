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
  static toast(icon: any, title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    })

    return Toast.fire({ icon, title });
  }
};

export default Swalert;
