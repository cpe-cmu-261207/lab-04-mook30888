export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
    <>
    <div class="CourseCard">
      <tr >
        <td>
          <div class="tag">
            <p>วิชา : {props.nn}</p>
            <p>เกรด : {props.gg}</p>
            <p>หน่วยกิต : {props.cc}</p>
          </div>
        </td>
        <tr id="trc">
          <button class="botn" onClick = {() =>{
              props.del(props.nn)
          }}>x</button>
        </tr>
      </tr>
    </div>
  </>
  );
};
