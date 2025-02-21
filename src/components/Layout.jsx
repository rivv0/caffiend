export default function Layout(props) {
    const {children} = props
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND </h1><p>
                    For Coffee Insanities
                </p>
            </div>
            <button>
                <i className="fa-solid fa-mug-hot"></i>
                <p>Sign up free</p>
            </button>
        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">
                Caffiend</span>was made by Rivva Chahwala</p>
        </footer>
    )
    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}