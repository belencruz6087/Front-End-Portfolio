function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
}

let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) => {
    if(e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});

// function cambiar_parrafo(){
//     document.getElementById("edit-exp1").style.display="block";
//     let texto = document.getElementById("text-exp1").innerText;
//     console.log(texto);
// };

// function myFunction3(valor){
//     document.getElementById("text-exp1").innerText=valor;
// }

// let textarea1=document.getElementById("edit-exp1")
// textarea1.addEventListener('keyup', (e) => {
//     if(e.key=="Enter"){
//         document.getElementById("edit-exp1").style.display="none"
//     }
// });

var ctx = document.getElementById('myChart-Bar').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Organizada", "Proactiva", "Metódica", "Practica", "Trabajo en Equipo"            
        ],
        datasets: [{
           label: "Soft Skills",
            data: [8, 9, 8, 9.5, 9],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            
            ],  
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',                       
                'rgb(54, 162, 235)',
                         'rgb(153, 102, 255)',
                         'rgb(201, 203, 207)'
                       ],
                      borderWidth: 2,      
            hoverOffset: 4,
            hoverBorderColor: "black",   
            
        }]
    },
    _options: { responsive: true }
});


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [            
        ],
        datasets: [{
            data: [55, 100],
            borderColor: 'gray',
            backgroundColor: [
                'green',
                'white',
                ],
            hoverOffset: 4,
            hoverBorderColor: "black",
            
            
        }]
    },
    _options: { responsive: true }
});

var ctx1 = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{            
            data: [40, 100],
            borderColor: 'gray',
            backgroundColor: [
                'blue',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [35, 100],
            borderColor: 'gray',
            backgroundColor: [
                'lightblue',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [40, 100],
            borderColor: 'gray',
            backgroundColor: [
                'grey',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx4 = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [55, 100],
            borderColor: 'grey',
            backgroundColor: [
                'gdark grey',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx5 = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [40, 100],
            borderColor: 'gray',
            backgroundColor: [
                'red',
                'white',
                ],
            hoverOffset: 4,
        }]
    },
    _options: { responsive: true }
});

var ctx6 = document.getElementById('myChart6').getContext('2d');
var chart = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 100],
            borderColor: 'gray',
            backgroundColor: [
                'green',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx7 = document.getElementById('myChart7').getContext('2d');
var chart = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [55, 100],
            borderColor: 'gray',
            backgroundColor: [
                'red',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx8 = document.getElementById('myChart8').getContext('2d');
var chart = new Chart(ctx8, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [30, 100],
            borderColor: 'gray',
            backgroundColor: [
                'yelow',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

var ctx9 = document.getElementById('myChart9').getContext('2d');
var chart = new Chart(ctx9, {
    type: 'doughnut',
    data: {
        labels: [      
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [30, 100],
            borderColor: 'gray',
            backgroundColor: [
                'yellow',
                'white',
                ],
            hoverOffset: 4
        }]
    },
    _options: { responsive: true }
});

