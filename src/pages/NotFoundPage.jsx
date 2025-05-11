import React from 'react';
import mob3 from "./photos/mob3.jpg";

function NotFoundPage () {
    return (
        <div className="container">
            <h1>Сторінку не знайдено</h1>
            <p>На жаль, такої сторінки не існує. Спробуйте повернутись на <a href="/" 
            style={{textDecoration: "none", color: "#8c15bfe6"}}>головну сторінку</a>.</p>
            <div style={{
                display: 'flex',  
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginTop: '30px',
                flexWrap: 'nowrap'
            }}>
                <img src={mob3} alt=" " style={{ width: '250px', borderRadius: '30px' }} />
            </div>
        </div>
    );
};

export default NotFoundPage;
