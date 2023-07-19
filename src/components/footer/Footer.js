import whatsapp from "./../../img/icons/whatsapp.svg";
import instagram from "./../../img/icons/instagram.svg";
import telegram from "./../../img/icons/telegram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                    <li className="social__item"><a href="http://linkedin.com/in/igor-golinko-aa3759257"><img src={linkedIn} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://instagram.com/ihol_holinko?igshid=NTc4MTIwNjQ2YQ=="><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://wa.me/491605716503"><img src={whatsapp} alt="Link"/></a></li>
                    <li className="social__item"><a href="http://github.com/IhorHolinko"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://t.me/xXx_oOo_XxX_OoO"><img src={telegram} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 mywebsite.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;