export const formatCantidad = cantidad => {
    return Number(cantidad).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });
}

export const formatFecha = fecha => {
    const fechaNew = new Date(fecha);
    const option ={
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNew.toLocaleDateString('es-Es', option)
}

export const generarId = () => {
 const random = Math.random().toString(36).substring(2,11);
 const fecha = Date.now().toString(36);

 return random + fecha;

}