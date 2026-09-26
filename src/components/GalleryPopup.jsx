import { useEffect } from "react"

function GalleryPopup({
    isOpen,
    item,
    onClose,
    onPrev,
    onNext
}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])


    if (!isOpen || !item) {
        return null
    }
    return (

        <div id="galPop" style={{ display: "flex" }}>
            <div className="gpbox">
                <button className="gpclose" id="gpClose" onClick={onClose}><i className="fas fa-times"></i></button>
                <img id="gpImg" src={item.img} alt={item.title} />
                <div className="gpcap">
                    <h5 id="gpTitle">{item.title}</h5>
                    <p id="gpDesc">{item.desc}</p>
                </div>
                <div className="gpnav">
                    <button id="gpPrev" onClick={onPrev}><i className="fas fa-chevron-left me-1"></i>Prev</button>
                    <button id="gpNext" onClick={onNext}>Next <i className="fas fa-chevron-right ms-1"></i></button>
                </div>
            </div>
        </div>
    )
}
export default GalleryPopup
