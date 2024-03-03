import Angular from './images/london.jpg';
import Bootstrap from './images/roma.jpg';
import Ccsharp from './images/tokyo.jpg';
import KompleWeb from './images/paris.jpg';
import './Course.css';

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

function Course({ courseName }) {
  // console.log(Angular);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
