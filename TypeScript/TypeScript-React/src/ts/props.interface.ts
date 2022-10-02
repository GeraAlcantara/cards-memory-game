export interface MemoryCardProps {
  name: string 
  image: string
  index: any
  isDone: boolean
  isOpen: boolean
  isEnable: boolean
  handleClick: (idx: any) => void
}