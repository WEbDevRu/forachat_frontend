export     let  formatToAMPM = (dateString)  =>{
    let date = new Date(dateString)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds: seconds
    return {
        hours: hours + ':' + minutes + ' ' + ampm,
        seconds: hours + ':' + minutes + ' ' + seconds + ' ' + ampm,

    }



}
