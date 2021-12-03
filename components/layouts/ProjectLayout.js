import Footer from '../Footer'
import Header from '../Header';
export default function ProjectLayout({ children,props }) {

    return <div>
        <Header underlineLinks={false} />
        <div className="py-12 pl-12 min-h-75vh"  >
            {children}
        </div>
        <Footer />
    </div>;
}
