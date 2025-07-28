import { CandidatoPieChartData } from 'app/types/chartData'

const candidatosShort: string[] = [
  'Jara',
  'Kaiser',
  'Kast',
  'Mattei'
  // 'Parisi',
  // 'Mayne-Nicholls',
  // 'MEO',
  // 'Artés'
]

const candidatosLong: string[] = [
  'Jeannette Jara',
  'Johannes Kaiser',
  'José Antonio Kast',
  'Evelyn Mattei'
  // 'Franco Parisi',
  // 'Harold Mayne-Nicholls',
  // 'MEO', //'Marco Enriquez Ominami',
  // 'Pablo Artés'
]

const extractCandidate = (text: string, long: boolean = false) => {
  if (!text) return null
  const candidatos = long ? candidatosLong : candidatosShort

  const match = text.match(/\b(Johannes|Kaiser|H[ae]ra|J[ae]ra|Evelyn|Mattei|Kast|José Antonio)\b/i)

  if (!match) return null

  const value = match[0].toLowerCase()
  if (['hara', 'hera', 'jara'].includes(value)) {
    return candidatos[0]
  } else if (value === 'kaiser' || value === 'johannes') {
    return candidatos[1]
  } else if (
    value === 'jose' ||
    value === 'josé' ||
    value === 'josé antonio' ||
    value === 'jose antonio' ||
    value === 'kast'
  ) {
    return candidatos[2]
  } else if (value === 'evelyn' || value === 'mattei') {
    return candidatos[3]
  }
  return match[0]
}

export function getResultados(data: string[]) {
  const resultados = data
    .map((item) => extractCandidate(item))
    .filter((item): item is string => !!item)

  // Paso 1: Contar votos
  const conteo = resultados.reduce((acc, nombre) => {
    acc[nombre] = (acc[nombre] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // Paso 2: Armar resultado asegurando todos los candidatos
  return [...new Set(candidatosShort)]
    .map((nombre) => ({
      candidato: nombre,
      votos: conteo[nombre] || 0
    }))
    .sort((a, b) => b.votos - a.votos) // Ordenar por votos descendentes
}

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export const getComparator = <T>(order: 'asc' | 'desc', orderBy: keyof T) => {
  return order === 'desc'
    ? (a: T, b: T) => descendingComparator(a, b, orderBy)
    : (a: T, b: T) => -descendingComparator(a, b, orderBy)
}

export const stableSort = (array: unknown[], comparator: (a: unknown, b: unknown) => number) => {
  const stabilizedThis: [unknown, number][] = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const colors: string[] = ['red', 'orange', 'green', 'blue', 'magenta']

export const getPieChartData = (data: { candidato: string; votos: number }[]) => {
  const conteo = data.reduce((acc, item) => {
    acc = acc + item.votos
    return acc
  }, 0)

  const pie = data.reduce(
    (acc: CandidatoPieChartData[], candidatoObj: CandidatoPieChartData, i) => {
      acc.push({ ...candidatoObj, value: (candidatoObj.votos / conteo) * 100, color: colors[i] })
      return acc
    },
    []
  )

  return pie
}
