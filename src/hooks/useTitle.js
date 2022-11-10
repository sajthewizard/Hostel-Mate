import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-HosTel MatE`
    }, [title])
}
export default useTitle;