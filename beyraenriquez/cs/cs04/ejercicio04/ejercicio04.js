let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourse = [...student1Courses, ...student2Courses].reduce
  ((total, item, index, array) => {
  (array.indexOf(item, index + 1) 
   !== -1 && total.indexOf(item) === -1) ? total.push(item) : null
  return total
}, [])

console.log("Common course is " + commonCourse)