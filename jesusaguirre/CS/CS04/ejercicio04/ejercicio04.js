//Create a program that loops over the 2 arrays; if there are any common courses 
//print them out to the console.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
console.log(`curso de estudiante 1 ${student1Courses}`);
console.log(`curso de estudiante 2 ${student2Courses}`);
for( let i=0 ; i<student1Courses.length ; i++)
{
	for( let j=0 ; j<student2Courses.length ; j++)
	{
		if( student1Courses[i]==student2Courses[j])
			console.log(`tienen el curso ${student1Courses[i]} en comun `);
	}
}
