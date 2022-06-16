/*
Pytania kontrolne:

* 1)Czym jest komponent?

    Jest funkcją w JS, która ma swoją logikę przedstawioną w formie jakiegoś elementu na stronie

* 2)Czym jest props?

    Props jest skrótem od properties, można uznać je jako argumenty przesyłane do funkcji. Jest obiektem do przesyłania danych. Wykorzystuje się je jako atrybuty w elementach komponentu. Używanie propsów to "parametryzowanie" contentu danego komponentu. Trzeba mieć na uwadze że props to jeden argument w postaci obiektu
*/

import React from "react";
import "./Card.css";
import { Container } from "../Container/Container";

const data = [
    {
        name: "Alfred",
        surname: "Bogucki",
        avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        background:
            "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
        bronze: 1,
        silver: 3,
        gold: 1,
    },
    {
        name: "Andrzej",
        surname: "Mikucki",
        avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        background:
            "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
        bronze: 1,
        silver: 8,
        gold: 0,
    },
    {
        name: "Mateusz",
        surname: "Lipowicz",
        avatar: "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/279893706_4912981585474293_7548570771210637207_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UBpgXhSXWU8AX800X-K&_nc_ht=scontent-waw1-1.xx&oh=00_AT-_58pfoP4CgkqpAuK_u4nx7tcpdyvcynVWCeZHKQUkcA&oe=62A51903",
        background: "https://wallpapercave.com/wp/66NfovO.jpg",
        bronze: 4,
        silver: 1,
        gold: 0,
    },
    {
        name: "Adam",
        surname: "Mentor",
        avatar: "https://media-exp2.licdn.com/dms/image/C4E03AQE5S6Ksq0V5iQ/profile-displayphoto-shrink_800_800/0/1611046597040?e=1660176000&v=beta&t=f_iLVbkKHVU1ELSQmlhUm1c-Ul8bOhuH1_JAFC0C3FE",
        background: "https://wallpaperaccess.com/full/340986.jpg",
        bronze: 3,
        silver: 8,
        gold: 2,
    },
];

//? Jak stworzyć komponent pozycjujący? Czy po prostu ma zwrócić diva o konkretnej klasie z stylami ustawionymi na to oc chcemy?

//! Tutaj wyskoczy błąd (Each child in a list should have a unique "key") --> dlatego w funkcji mamy key={index}
function CardBuilder() {
    return (
        <div className="body">
            {data.map(({ name, surname, avatar, background, bronze, silver, gold }, index) => (
                <Container key={index}>
                    <div
                        className="top"
                        style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <h1 className="heading-1">
                            {name} {surname}
                        </h1>
                        <div
                            className="avatar"
                            style={{
                                backgroundImage: `url(${avatar})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </div>
                    <div className="bottom">
                        <h2 className="heading-2">Rewards</h2>
                        <div className="medal-type">
                            {/*Przerobic poniższe divy na komponent */}
                            <div className="reward">
                                <p className="medal-number">{bronze}</p>
                                <p className="medal-type">Bronze</p>
                            </div>
                            <div className="reward">
                                <p className="medal-number">{silver}</p>
                                <p className="medal-type">Silver</p>
                            </div>
                            <div className="reward">
                                <p className="medal-number">{gold}</p>
                                <p className="medal-type">Gold</p>
                            </div>
                        </div>
                    </div>
                </Container>
            ))}
        </div>
    );
}

export default CardBuilder;
