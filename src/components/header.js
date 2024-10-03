import './header.css';
import start from '../resources/icons/start-button.png'

const Header = () => {

    return(

        <div class ="header">
            <div>
                <a class = "start-button-wrapper">
                    <img class="logo" src={start} />    
                </a>
                <b class="bar" />
            </div>
            
        
            {/* <a href="#default" class="name">Lindsay Zhang</a> */}
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