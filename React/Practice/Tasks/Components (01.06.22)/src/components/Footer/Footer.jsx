//! Co jest do wytworzenia

/*
    * Generyczny footer

        1) Podobiekt w obiekcie footer jest opcjonalny 
        2) Logo wymiary max 50 x 200px
        3) Linki w kolumnach max po 5
        4) Ikony sociali 20 x 20px oraz być klilanymi linkami
        5) Linki zmieniają kolor po hoverze

! Jaki jest porblem?

        1) Jak wyciągnąć zagnieżdżone właściwości z obiektu żeby wyświetlić je na stronie
        2) Jak ustawic po 5 linków w jednej kolumnie

        Ad.1
        Trzeba przemapować główny obiekt, ale mapowanie jest dla tablic, więc trzeba określić typ danych, potem przekształcić ten typ na tablice
*/

import React from "react";


//! Skończ z Adamem, chyba że sam dojdziesz do rozwiązania
function Footer() {

    const footer = {
        company: {
            addressLine1: "Brzozowa 23",
            addressLine2: "Katowice 40-000",
            phone: "+48123456977",
            mail: "mail@example.com",
            name: "ABGF Sp. z o. o.",
            logo: "link-to-image",
        },
        socials: {
            fb: "facebook.com",
            instagram: "instagram.com",
            twitter: "twitter.com",
        },
        links: {
            help: "/help",
            pay: "/pay",
            agreement: "/agreement",
            dashboard: "/dashboard",
            reading: "/reading",
            reports: "/reports",
        },
    };

    return (
    <div>
        {for (const [key, value] of Object.entries(footer)){
            console.log(`${key} and ${value}`);
        }}
    </div>
        
    )
}

export default Footer;




