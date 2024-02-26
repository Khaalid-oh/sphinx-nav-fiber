import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type Props = {
  imageUrl?: string
  name: string
}

export const TypeCustom = ({ imageUrl, name }: Props) => (
  <Flex align="center" direction="row">
    {imageUrl && (
      <PictureWrapper>
        <Avatar rounded size={64} src={imageUrl || ''} type="image" />
      </PictureWrapper>
    )}
    {name && <Name>{name}</Name>}
  </Flex>
)

const PictureWrapper = styled(Flex)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`

const Name = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`
