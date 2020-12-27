import { useState } from "react";
import {CourseCard} from "./components/CourseCard"

function App() {
  const grade = [{key: 'A', val: 4.0}, {key: 'B+', val: 3.5}, {key: 'B', val: 3.0},
                 {key: 'C+', val: 2.5},{key: 'C', val: 2.0} , {key: 'D+', val: 1.5},
                 {key: 'D', val: 1.0}, {key: 'F', val: 0.0}, {key: 'W', val: -1}];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);

  let name = ""
  let gradef = 0
  let creditf =0
  let a = ""


  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(course) {
    // TODO
    let gr = 0.00
    let cr = 0
    course.forEach(obj => {
      if(Number(obj.cgrade) !== -1){
        gr += Number(obj.cgrade) * Number(obj.ccredit)
        cr += Number(obj.ccredit)
      }
    })
    gr  = Number(gr) / Number(cr)
    if(Number(gr) >= 0)
      setGPA(Number(gr.toPrecision(3)))
    else setGPA(0.00)

  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    const course ={
      cname: name,
      dis: a,
      cgrade: gradef,
      ccredit: creditf
    }
    const newCourse = [...myCourses,course]
    setMyCourse(newCourse)

    console.log(name +" "+ gradef +" " + creditf)
    // recalculate GPA
    calculateGPA(newCourse);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(obj =>{
      return obj.cname !== id
    })
    setMyCourse(course)
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        {myCourses.map(item => {
          return <CourseCard nn = {item.cname}
          aa ={item.dis}
          gg = {item.cgrade}
          cc ={item.ccredit}
          del = {onDeleteCourse} />
          
        })}
      </div>

      {/* TODO add course input form */}
      <form onSubmit = {
        e =>{addCourse(e)}
      }>
        <p className="text-center text-4xl p-3 tracking-widest" >
        GPA = {GPA.toFixed(2)}
      </p>
      <div class = "divez">
        <table>
              <tr>
                  <th>ชื่อวิชา</th>
                  <th><input type = "text" placeholder = "ชื่อวิชา" onChange ={
                  (e) => {name = e.currentTarget.value}
                }/> </th>
                  
                
                
              </tr>
              <tr>
                <th>เกรด</th>
                <th><select name = "Grade" onChange ={
                  (e) => {gradef = e.currentTarget.value
                          a = e.currentTarget.options[e.currentTarget.selectedIndex].text}}> <option> </option>{grade.map((item) =>{return (<option value={item.val}>{item.key}</option>)})}</select>
                 </th>
              </tr>
              <tr>
                <th>หน่วยกิต</th>
                <th><select name = "Credit" onChange ={
                  (e) => {creditf = e.currentTarget.value}}> <option> </option>{credit.map((item) =>{return (<option value={item}>{item}</option>)})}</select></th>
                
              </tr>
              

              </table>
              
            <button type="submit">submit</button>
        </div>
      </form>
      
      {/* TODO display calculated GPA */}
    </div>
  );
}

export default App;
