export function timeHandler(time: number): [days: number, hours: number, minutes: number, seconds: number] {

    let days, hours, minutes, seconds

    days = Math.floor(time/86400)
    time -= days * 86400
    hours = Math.floor(time/3600)
    time -= hours * 3600
    minutes =  Math.floor(time/60)
    time -= minutes * 60
    seconds = time


    return [days, hours, minutes, seconds]
}