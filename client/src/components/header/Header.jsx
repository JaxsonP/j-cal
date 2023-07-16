import './index.css';

export default function Header() {

  return (
    <div className="header">
      <div className='leftAnchor'>
        <a href="/" className="site-title">J Cal</a>
      </div>
      <div className='rightAnchor'>
        <ul>
          <a className='settings'>Settings</a>
        </ul>
      </div>
    </div>
  );
}