import { Header } from "../Header"
import { Main } from "../Main"
import { Footer } from "../Footer"
import { FC } from "react"

type Props = {
    hideHeader?: boolean,
    page: string
} 

const Layout: FC<Props> = ({ children, hideHeader, page }) => {
    return(
        <>
            {!hideHeader && <Header />}
            <Main page={page}>
                { children }
            </Main>
            <Footer />
        </>

    )
}

export { Layout }