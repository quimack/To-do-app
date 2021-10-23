import { FC } from "react"

type Props = {
    page: string
}

const Main: FC<Props> = ({ children, page }) => {
    return(
        <main className={page}>
            { children }
        </main>
    )
} 

export { Main };