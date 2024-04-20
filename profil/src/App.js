import './App.css';
import user from './user.png';
const profile = {
  username : 'User Name',
  email : 'user@email.com',
  image : './user.png',
  contact : 'contact',
  state : 'Disconnecte' 
};
function App() {
  return (
      <section className="section-header">
       <img className="image" src= {user} alt={profile.username}/>
       <p className='name'>{profile.username}</p>
       <p className='email'>{profile.email}</p>
       <div className='about'>
        <ul>
          <li>{profile.username}</li>
          <li>{profile.contact}</li>
          <li>{profile.email}</li>
          <li>{profile.state}</li>
        </ul>
       </div>
      </section>
  );
}

export default App;
