import styles from "@/styles/Button.module.css";

function Button({ children, episode, border }) {
  let episodeStyle = (episode === "first") ? styles.primary : styles.secondary;

  let borderStyle =
    (border === "first") ? styles.none
      : episode === "continue" ? styles.light : styles.heavy;

  return (
      <button type="button" className={`${episodeStyle} ${borderStyle}`}>
        {children}
      </button>
  );
}

export default Button;