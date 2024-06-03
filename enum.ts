export enum CircleColor {
  Green = '#7AC555',
  Purple = '#760DDE',
  Yellow = '#FFA500',
  Blue = '#76A5EA',
  Pink = '#E876EA',
}

type ValueOf<T> = T[keyof T]

export type ValueOfCircleColor = ValueOf<typeof CircleColor>
