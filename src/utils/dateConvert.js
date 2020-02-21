export const dateConvert = UNIX_Timestamp => {
  let date = new Date(UNIX_Timestamp);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}
