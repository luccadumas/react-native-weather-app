import { format } from 'date-fns';

export function convertUnixDate(unixTime) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unixTime * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    let dayFormatted = format(new Date(String(date)), 'dd')

    // show the day like today
    if (dayFormatted === format(new Date(), 'dd')) {
        dayFormatted = 'hoje'
    }
    // show the day like tomorrow
    else if (dayFormatted === format(new Date().setDate(new Date().getDate() + 1), 'dd')) {
        dayFormatted = 'amanhã'
    }
    
    return dayFormatted;
}
