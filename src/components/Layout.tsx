import Menu from "./Menu";

const Layout = (props: any) => {
    return (
        <div className="Layout">
            <Menu/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout