export const Render = (title , children) => {
    return (
        <div className="card">
            <img src={children.img} alt="" />
            <h3>{children.h3}</h3>
            <p>{children.title}</p>
        </div>
    )
}