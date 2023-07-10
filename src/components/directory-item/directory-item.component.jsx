import { Link } from 'react-router-dom'
import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='directory-item-body'>
        <Link to='/shop'>
          <h2>{title.toUpperCase()}</h2>
          <p>SHOP NOW</p>
        </Link>
      </div>
    </div>
  )
}
export default DirectoryItem
