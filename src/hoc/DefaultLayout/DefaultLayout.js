import Navigation from './../../components/Navigation';

const DefaultLayout = ({children}) => {
    return (
        <main className="Content">
            <Navigation/>
            {children}
        </main>
    )
}

export default DefaultLayout;