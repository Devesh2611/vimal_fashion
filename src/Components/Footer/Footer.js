import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="footerContent">
                <div className="contacts">
                    <a href="https://wa.me/9811861670" target="_blank"><i className="fa-brands fa-whatsapp fa-3x"></i></a>
                    <a href="tel:+919811861670" target="_blank"><i className="fa-solid fa-phone fa-3x"></i></a>
                    <a href="https://www.facebook.com/vimalfashion" target="_blank"><i className="fa-brands fa-square-facebook fa-3x"></i></a>
                    <a href="https://www.google.com/maps/place/Vimal+Fashion/@28.6538265,77.2276454,21z/data=!4m6!3m5!1s0x390cfd002f679c65:0x25cc47ffa126ed61!8m2!3d28.6538265!4d77.2277822!16s%2Fg%2F11w323cs15?entry=ttu" target="_blank"><i className="fa-solid fa-location-dot fa-3x"></i></a>
                    <a href='https://www.instagram.com/vimalfashion4187' target='blank'><i className='fa-brands fa-square-instagram fa-3x'/></a>
                </div>
                <div className="address">
                    <h1>Address</h1>
                    <address>
                        <p>4187 - Nai Sarak Jogiwara</p>
                        <p>Chandni Chowk Delhi - 110006</p>
                    </address>
                </div>
                <div className="policy">
                    <h1>User Policy</h1>
                    <p>Terms & Conditions</p>
                    <p>Return Policy</p>
                </div>
            </div>
            <div className="footerCopyright">
                <p> &#169 Vimal Fashion</p>
            </div>
        </div>
    );
}

export default Footer;