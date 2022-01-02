import Profile from './Profile/Profile';
import Footer from './Footer/Footer';

import './Home.css';

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ''}>
      <Profile />
      <Footer />
    </div>
  );
}
