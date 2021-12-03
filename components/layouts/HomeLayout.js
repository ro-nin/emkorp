import Footer from '../Footer'
import Header from '../Header';

export default function HomeLayout({ children, props}) {
    
    return (
        <>
            <Header id="Header" underlineLinks={false}  />
            {children}
            <Footer />
        </>
    )

}
