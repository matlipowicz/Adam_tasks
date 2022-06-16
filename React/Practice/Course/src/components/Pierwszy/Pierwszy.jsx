import React from "react";
import styles from "./Pierwszy.module.css";

export const Pierwszy = ({ text = "Pusty" }) => {
    return <div className={styles.card}>{text}</div>;
};
