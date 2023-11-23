import '@/styles/header.css';

const Header = () => {
    return (
        <header className='header-07'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <a href='/'><h2 className='header-heading'>New Truckers Driving Academy</h2> </a>
                        <div className='menuup'>
                            <a href='/'>Home</a>
                            <a href='/about'>About</a>
                            <a href='/courses'>Courses</a>
                            <a href='/testimonial'>Testimonial</a>
                            <a href='/contact'>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;