import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Super Bowl Betting</p>
            </div>
        </footer>
    )
}

export default Footer;
