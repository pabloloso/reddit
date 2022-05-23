import { timeSince } from 'utils/timeSince'

describe('timeSince function', () => {
  it('should return seconds text if time between dates is from seconds ago', () => {
    expect(timeSince(1653334850000, 1653334840000)).toBe('10 segundos')
    expect(timeSince(1653334850000, 1653334830000)).toBe('20 segundos')
    expect(timeSince(1653334850000, 1653334820000)).toBe('30 segundos')
    expect(timeSince(1653334850000, 1653334810000)).toBe('40 segundos')
  })

  it('should return minutes text if time between dates is from minutes ago', () => {
    expect(timeSince(1653334800000, 1653334500000)).toBe('5 minutos')
    expect(timeSince(1653334800000, 1653334440000)).toBe('6 minutos')
    expect(timeSince(1653334800000, 1653334380000)).toBe('7 minutos')
    expect(timeSince(1653334800000, 1653334320000)).toBe('8 minutos')
  })

  it('should return hours text if time between dates is from hours ago', () => {
    expect(timeSince(1653332400000, 1653328800000)).toBe('1 horas')
    expect(timeSince(1653332400000, 1653325200000)).toBe('2 horas')
    expect(timeSince(1653332400000, 1653321600000)).toBe('3 horas')
    expect(timeSince(1653332400000, 1653318000000)).toBe('4 horas')
  })

  it('should return days text if time between dates is from days ago', () => {
    expect(timeSince(1653341291405, 1652997600000)).toBe('4 días')
    expect(timeSince(1653341291405, 1652220000000)).toBe('13 días')
    expect(timeSince(1653341291405, 1652306400000)).toBe('12 días')
    expect(timeSince(1653341291405, 1652479200000)).toBe('10 días')
  })

  it('should return months text if time between dates is from months ago', () => {
    expect(timeSince(1653340030679, 1639695600000)).toBe('5 meses')
    expect(timeSince(1653340030679, 1642374000000)).toBe('4 meses')
    expect(timeSince(1653340030679, 1645052400000)).toBe('3 meses')
    expect(timeSince(1653340030679, 1647471600000)).toBe('2 meses')
  })

  it('should return default years text if time between dates is from years ago', () => {
    expect(timeSince(1653340030679, 1653339622)).toBe('52 años')
    expect(timeSince(1653340973149, 819154800000)).toBe('26 años')
    expect(timeSince(1653340973149, 661388400000)).toBe('31 años')
    expect(timeSince(1653340973149, 345855600000)).toBe('41 años')
  })
})
