import './header.css';

const Header = () => {

    return(
        <div class ="header">
            <h1>
                <a href="#default" class="name">Lindsay Zhang</a>
            </h1>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#About">About Me</a>
                
                <a href="#Projects">Projects</a>
                <a href="#Work">Work Experience</a>
            </div>
        </div>
    );
}

export default Header;