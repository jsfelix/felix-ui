import { getContrast } from 'polished'

type ColorsGridProps = {
  colors: {
    [key: string | number]: string
  }
  name?: string
}

export function ColorsGrid({ colors, name = 'default' }: ColorsGridProps) {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          className="flex justify-between font-mono"
          style={{ color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#fff' }}
        >
          <strong>
            {name}
            {key !== '0' ? `-${key}` : ''}
          </strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
