import './index.css'

const UserInfo = props => {
  const {userInfo} = props
  const {title, description, publishedDate} = userInfo
  return (
    <li className="list-item">
      <div className="post-top-container">
        <h1 className="post-title">{title}</h1>
        <p className="time-text">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default UserInfo
