import { Link } from 'react-router-dom'
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <Link to={route}>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </Link>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem
