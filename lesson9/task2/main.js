let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
let courses = document.getElementsByClassName('course')
let course = courses[0];

for (const courseArray of coursesArray) {
    let table = document.createElement('table');
    table.classList.add('course');

    let courseTitle = document.createElement('tr');
    courseTitle.innerHTML = (`${courseArray.title}`);
    table.appendChild(courseTitle);

    let courseDuration1 = document.createElement('td');
    courseDuration1.innerText = 'Month duration: ' + courseArray.monthDuration;
    table.appendChild(courseDuration1);

    let courseDuration2 = document.createElement('td');
    courseDuration2.innerText = 'Hour duration: ' + courseArray.hourDuration;
    table.appendChild(courseDuration2);

    let modules = document.getElementsByTagName('tr');

    let listOfModules = modules[0];

    for (const modul of courseArray.modules) {

        let list = document.createElement('tr');
        let mod = document.createElement('tr');
        mod.classList.add('module');
        mod.innerHTML = `${modul}`;
        list.appendChild(mod);

        listOfModules.appendChild(mod);
    }    ;


    course.appendChild(table);
    course.appendChild(listOfModules);
}

//ну майже))