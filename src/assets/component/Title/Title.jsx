export function Title({ title, icon }) {
  return (
    <>
      <div>
        <img src={icon} alt="icon" />
        <p>{title}</p>
      </div>
    </>
  );
}

Title.propTypes;
