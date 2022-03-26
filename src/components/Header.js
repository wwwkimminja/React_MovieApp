import './header.css';

function Header(){
 return  (
 <div>
     <header>
        <h1>hulu</h1>
    </header>
    <div class="search">
      <input type="text" placeholder="Search movie..." />
      <i class="fas fa-search"></i>
    </div>
 </div>
 );
}

export default Header; 