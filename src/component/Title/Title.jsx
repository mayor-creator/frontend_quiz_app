import { ThemeToggle } from "../Theme/Theme";
export function Title({ title, icon }) {
  return (
    <>
      <div>
        <div>
          <img src={icon} alt={`icon-${title}`} />
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </>
  );
}

Title.propTypes;
