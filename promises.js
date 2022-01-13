function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getStudents(resolve, reject) {
  const time = randomIntFromInterval(1000, 2000);
  setTimeout(() => {
    resolve([
      {
        name: "John",
        cours: [1, 2, 3],
      },
      {
        name: "Jane",
        cours: [2, 3],
      },
      {
        name: "Jack",
        cours: [1],
      },
    ]);
  }, time);
}

function getCourses(resolve, reject) {
  const time = randomIntFromInterval(2000, 4000);
  setTimeout(() => {
    resolve([
      {
        id: 1,
        name: "Math",
      },
      {
        id: 2,
        name: "English",
      },
      {
        id: 3,
        name: "Physics",
      },
    ]);
  }, time);
}

function mapStudentsCourses(students, courses) {
  return students.map((student) => {
    return {
      name: student.name,
      cours: courses.filter((course) => student.cours.includes(course.id)),
    };
  });
}

const timer = (resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 7000);
};

Promise.race([
  Promise.all([new Promise(getStudents), new Promise(getCourses)]).then(
    (results) => {
      const students = results[0];
      const courses = results[1];
      return mapStudentsCourses(students, courses);
    }
  ),
  new Promise(timer),
])
  .then((result) => {
    console.log("Merge OK");
  })
  .catch(() => console.log("timeout"));

console.log("script end");

/**
 * Call stack
 *    function randomIntFromInterva
 *    function getStudents
 *    function getCourses
 *    function mapStudentsCourses
 *    timer
 *    console.log
 *    Promise.race
 *      Promise.all
 *      Promise(timer)
 *        Promise(getStudents)
 *        randomIntFromInterval
 *        Promise(getCourses)
 *        randomIntFromInterval
 *        setTimeout (timer)
 *           setTimeout (students)
 *           resolve(students)
 *           setTimeout (courses)
 *           resolve(courses)
 *           mapStudentsCourses
 *           console.log("Timeout"|"Merge OK")
 */
