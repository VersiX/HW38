// React Template

// ================================================ JSX ==========================================================

let logo = <img className="logo" src="img/Logo.png" alt="Kasper logo" />;
let title = <h1 className="title">We are social</h1>;
let hline = <hr className="hline" />;
let social = <div className="social">
    <a className="social-icon" href=""><i className="fab fa-facebook-f" ></i></a>
    <a className="social-icon" href=""><i className="fab fa-twitter" ></i></a>
    <a className="social-icon" href=""><i className="fab fa-google-plus-g" ></i></a>
    <a className="social-icon" href=""><i className="fas fa-globe" ></i></a>
</div>;


let footer = <footer>
    &copy;2014 - <a className="linkKasper" href="">Kasper</a> All Rights Reserved
</footer>;


// Маємо скласти все в купу і можна виводити в HTML
let page = <div className="container">
    {logo}
    {title}
    {hline}
    {social}
    {footer}

</div>;

// ================================================ Render ==========================================================

ReactDOM.render(page, document.getElementById("root"));
