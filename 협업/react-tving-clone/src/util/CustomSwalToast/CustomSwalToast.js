import Swal from 'sweetalert2/dist/sweetalert2.js';
import './style/sweetalert2.scss'
export const CustomSwalToast = (text) => {
    Swal.fire({
        title: text,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        position: 'bottom'
    })
}
