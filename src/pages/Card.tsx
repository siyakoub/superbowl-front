import React from 'react';
import './css/styles.css';
import Logo from '../assets/Bull';

const Card: React.FC = () => {
    return (
        <div className="card">
            <div className="row">
                <div className="card-image">
                    <Logo></Logo>
                </div>
                <div className="card-content">
                    <h2>Plongez dans l'action du Super Bowl avec notre application de paris sportifs!</h2>
                    <br/>
                    <p>Bienvenue sur la plateforme ultime pour les amateurs de football américain et les parieurs passionnés. Notre application de paris sportifs est prête à vous offrir une expérience de Super Bowl inoubliable. Découvrez pourquoi des milliers de fans choisissent notre application pour parier sur le grand match chaque année.</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
