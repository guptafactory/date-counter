export default function NewDate({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div style={{ margin: 5 }}>
      {count === 0 && <span>Today is</span>}
      {count > 0 && <span>{count} day(s) from Today is</span>}
      {count < 0 && <span>{Math.abs(count)} day(s) ago was</span>}
      <span> {date.toDateString()}</span>
    </div>
  );
}
