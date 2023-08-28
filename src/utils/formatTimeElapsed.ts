
export const formatTimeElapsed = (seconds: number) => {
  const totalMilliseconds = seconds * 1000; // Convertendo para milissegundos
  const currentDate = new Date(totalMilliseconds);

  const minute = currentDate.getUTCMinutes();
  const second = currentDate.getUTCSeconds();

  let secondsString = String(second).padStart(2, '0');
  let minutesString = String(minute).padStart(2, '0');

  return `${minutesString}:${secondsString}`;
};
