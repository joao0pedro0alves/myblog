import Image, { type ImageProps } from 'next/image'

export function AvatarImage({ width = 40, height = 40, ...props }: ImageProps) {
  return <Image width={width} height={height} {...props} />
}
