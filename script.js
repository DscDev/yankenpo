$(function(){

    var valorJugador;
    var valorMaquina;
    var ganador;

    function juegaMaquina() {
        //asignando valor a la maquina
        valorMaquina = Math.round(Math.random() * 2 + 1);
        switch (valorMaquina) {
            case 1:
                valorMaquina = "rock";
                break;
            case 2:
                valorMaquina = "paper";
                break;
            case 3:
                valorMaquina = "scissors";
                break;
        }
    }

    function definirGanador() {
        if (valorJugador === "rock" && valorMaquina === "paper") {
            ganador = "maquina";
        }
        if (valorJugador === "rock" && valorMaquina === "scissors") {
            ganador = "Tu";
        }
        if (valorJugador === "paper" && valorMaquina === "rock") {
            ganador = "Tu";
        }
        if (valorJugador === "paper" && valorMaquina === "scissors") {
            ganador = "maquina";
        }
        if (valorJugador === "scissors" && valorMaquina === "paper") {
            ganador = "Tu";
        }
        if (valorJugador === "scissors" && valorMaquina === "rock") {
            ganador = "maquina";
        }
        if (valorJugador===valorMaquina) {
        	ganador = "empate";
        }
    }

    function mostrarResultados() {
        $("#maquina").html("<i class='fa fa-hand-" + valorMaquina + "-o'></i>");
        $("#jugador").html("<i class='fa fa-hand-" + valorJugador + "-o'></i>");
        $("#ganador").html(ganador);
    }

    $("button").on("click", function(evt) {
        valorJugador = evt.currentTarget.id;
        juegaMaquina();
        definirGanador();
        mostrarResultados();
    });

});
