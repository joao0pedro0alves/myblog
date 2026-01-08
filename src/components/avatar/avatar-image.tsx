import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

type AvatarSize = 'xs' | 'sm'

type AvatarImageProps = Omit<ImageProps, 'height' | 'width'> & {
  size?: AvatarSize
}

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
}

export function AvatarImage({ size = 'xs', ...props }: AvatarImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border border-blue-200',
        avatarSize[size],
      )}
    >
      <Image fill {...props} />
    </div>
  )
}
