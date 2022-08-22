// 5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.



// let boxes = document.getElementsByClassName('courses');
// let box = boxes[0];
// for (const courseAndDurationArray of coursesAndDurationArray) {
//     let div = document.createElement('div');
// div.classList.add('courses');
//     let course=document.createElement('div');
//     course.innerText = `title: ` + `${courseAndDurationArray.title}` + ` duration: ` + `${courseAndDurationArray.monthDuration}`;
//     div.appendChild(course);
//
//     box.appendChild(div);
//     div.style.border="1px solid black"
//     div.style.width="300px"
// }

// 6.
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let boxes = document.getElementsByClassName('item');
let box = boxes[0];
for (const courseAndDurationArray of coursesAndDurationArray) {
    let div = document.createElement('div');
div.classList.add('item');
    let course=document.createElement("h1");
    course.classList.add('heading');
    course.innerText = `title: ` + `${courseAndDurationArray.title}`;
    div.appendChild(course);



    let desc=document.createElement('p');
    desc.classList.add("description");
    desc.innerText=`duration :`+`${courseAndDurationArray.monthDuration}`;
    div.appendChild(desc);

    box.appendChild(div);
    div.style.border="1px solid black"
    div.style.width="500px"
};
