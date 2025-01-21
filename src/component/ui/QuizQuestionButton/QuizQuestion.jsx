export function QuizQuestion({ type, children, ...delegated }) {
  return (
    <>
      <button {...delegated}>
        <div>{type}</div>
        <div>{children}</div>
      </button>
    </>
  );
}

QuizQuestion.propTypes;
