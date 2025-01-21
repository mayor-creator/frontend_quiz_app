export function QuizQuestion({ type, children }) {
  return (
    <>
      <button>
        <div>{type}</div>
        <div>{children}</div>
      </button>
    </>
  );
}

QuizQuestion.propTypes;
