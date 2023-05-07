var url="https://animes-service-marlenejb.cloud.okteto.net/api/animes";

function postAnime(){
    console.log(url);

    var myName = $('#name').val();
    var mySinopsis = $('#sinopsis').val();
    var myEpisodios = $('#episodios').val();
    var myTemporadas = $('#temporadas').val();
    var myEstado = $('#estado').val();
    var myGeneros = $('#generos').val();
    var myEstudio = $('#estudio').val();
    var myImage= $('#image').val();
        var myanime={
            name : myName,
            sinopsis : mySinopsis,
            episodios : myEpisodios,
            temporadas : myTemporadas,
            estado : myEstado,
            generos : myGeneros,
            estudio : myEstudio,
            image : myImage 
        };
        console.log(myanime);

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){
                console.log(data);
                $('#resultado').html(JSON.stringify(data.anime));

            },
            data: JSON.stringify(myanime)
        });


    };


reader

function getAnimes(){

    console.log(url);

    $.getJSON(url,
        function(json){
            console.log(json);

            var arrAnimes = json.animes;

            var htmlTableAnimes = '<table border=1">';

            arrAnimes.forEach(function(item){
                console.log(item);
                htmlTableAnimes += '<Animes>' +
                '<div class="Animes__header">' +
                '<h2 class="Animes__name">' + item.name + '</h2>' +
            '</div>' +
            '<div class="Animes__body">' +
                '<table>' +
                '<tr><td>id:</td><td>' + item.id + '<td></tr>'+
                '<tr><td>Name:</td><td>' + item.name + '<td>'+
                '<tr><td>Sinopsisis:</td><td>' + item.sinopsis + '<td>'+
                '<tr><td>Episodios</td><td>' + item.episodios+ '<td>'+
                '<tr><td>Temporadas:</td><td>' + item.temporadas+ '<td>'+
                '<tr><td>Estado:</td><td>' + item.estado + '<td>'+
                '<tr><td>Generos:</td><td>' + item.generos + '<td>'+
                '<tr><td>Estudio:</td><td>' + item.estudio + '<td>'+
               
            '</table>' +
        '</div>' +
    '</div>';                   
});
    htmlTableAnimes += '</table>';

    $('#resultado').html(htmlTableAnimes);
}
);
}

