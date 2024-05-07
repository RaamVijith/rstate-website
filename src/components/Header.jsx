import "../styles/components/Header.css";

const Header = () => {
  
  return (
    <>
      <nav className="header">
        <div className="nav--logo">
            <div className="rstate-logo">
              <h1>R-STATE</h1>
              <p>Real Estate</p>
            </div>
        </div>

        <div className="header--right">        
          <ul className="nav--list">
            <li> <a  href="#welcome">Home </a></li>
            <li> <a href="#luxury">Luxury Villa </a></li>
            <li> <a href="#Properties">Properties </a></li>
            <li> <a href="#Blog">Blog </a></li>
            <li> <a href="#About">About Us </a></li>
            <li> <a href="#About">Contacts </a></li>          
          </ul>          
        </div>     

        
      </nav>
      
    </>
  );
};

export default Header;
