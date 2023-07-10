import { Link } from 'react-router-dom'
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBody>
        <Link to='/shop'>
          <h2>{title.toUpperCase()}</h2>
          <p>SHOP NOW</p>
        </Link>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem
