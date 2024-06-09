import { ValueOfCircleColor } from '@/enum'

type Props = {
  color: ValueOfCircleColor
}

export const CircleColorLabel = ({ color }: Props) => {
  return (
    <div
      style={{ background: color }}
      className={'relative rounded-full p-1'}
    />
  )
}
