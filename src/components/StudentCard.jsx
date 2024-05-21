function StudentCard({ name, week, info: { city, course } }) {
  return (
    <div className="StudentCard">
      <p>
        <b>Name:</b> {name}
      </p>

      <p>
        <b>Cohort:</b> {city} - {course}
      </p>

      <p>
        <b>Current week: {week} </b>
      </p>

      <br />
    </div>
  );
}

export default StudentCard;
