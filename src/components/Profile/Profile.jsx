import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        width="150"
      />
      <p className={styles.username}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
