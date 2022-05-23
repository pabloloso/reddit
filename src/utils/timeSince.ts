export const timeSince = (current: number, previous: number) => {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = new Date().getTime() - previous

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' segundos'
  }

  if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutos'
  }

  if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' horas'
  }

  if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' días'
  }

  if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' meses'
  }

  return Math.round(elapsed / msPerYear) + ' años'
}
