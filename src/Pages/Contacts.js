import './CSS/Contacts.css'

function Contacts() {
    return (
        <div className="content">
            <div className='address-links'>
                <div className="address">
                    <a href="https://www.google.com/maps/place/Vimal+Fashion/@28.6538265,77.2276454,21z/data=!4m6!3m5!1s0x390cfd002f679c65:0x25cc47ffa126ed61!8m2!3d28.6538265!4d77.2277822!16s%2Fg%2F11w323cs15?entry=ttu" target="_blank">
                        <i className="fa-solid fa-location-dot fa-3x"/>
                        <address>
                            <p>4187 - Nai Sarak Jogiwara</p>
                            <p>Chandni Chowk Delhi - 110006</p>
                        </address>
                    </a>
                </div>
                <div className="links">
                    <a href="https://wa.me/9811861670" target="_blank"><i className="fa-brands fa-whatsapp fa-3x"/><p>+91 9811861670</p></a>
                    <a href="tel:+919811861670" target="_blank"><i className="fa-solid fa-phone fa-3x"/><p>+91 9811861670</p></a>
                    <a href="https://www.facebook.com/vimalfashion" target="_blank"><i className="fa-brands fa-square-facebook fa-3x"/><p>vimalfashion</p></a>
                    <a href='https://www.instagram.com/vimalfashion4187' target='blank'><i className='fa-brands fa-square-instagram fa-3x'/><p>vimalfashion4187</p></a>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.5178216518796!2d77.22769724208095!3d28.653796019738646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd002f679c65%3A0x25cc47ffa126ed61!2sVimal%20Fashion!5e0!3m2!1sen!2sin!4v1726904672411!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
    );
}

export default Contacts;