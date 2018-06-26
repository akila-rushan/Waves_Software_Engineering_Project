$(document).ready(function () {
    loadUi();
});

function loadUi() {


    $("#btnStartGame").click(startGame);

    loadPlayerslist();
};

var playerList;

var user = {
    username: localStorage['UserName']
};

function loadPlayerslist() {
    
    $.ajax({
        url: "http://localhost:8080/api/online_players",
        type: "POST",
        dataType: "json",
        //crossDomain: true,
        data: user,
        success: function (data) {
            playerlisttbl(data);
            console.log(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}

function playerlisttbl(data) {
    //console.log(data);
    var content;

    var templ = $("#tblbody_PlayerInvite").html();
    $(data).each(function (index, value) {
        var tmp2 = templ;
        tmp2 = tmp2.split("{{Playe_Name}}").join(value.userName);
        content += tmp2;
    });
    $('#tbl_PlayerInvite').append(content);
}


function InvitePlayerFunc(playerName) {
    
    var rowCount = $('#tbl_PlayerInvited tr').length;
    
    if (rowCount <= 3) {

        $('#tbl_PlayerInvited > tbody:last-child').append('<tr><td >' + playerName + '</td></tr>');

    }
   

};


function startGame() {
    

    //$('#tbl_PlayerInvited tr').each(function () {
    //    var name = $(this).find("td").text();
    //    arr2.push({ username: name });
    //});


    //arr2 = jQuery.grep(arr2, function (value) {
    //    return value.username != "";
    //});

    var TableData = {
        username1: localStorage['UserName'],
        username2: $('#tbl_PlayerInvited tr:eq(1) td:eq(0)').html(),
        username3: $('#tbl_PlayerInvited tr:eq(2) td:eq(0)').html(),
        username4: $('#tbl_PlayerInvited tr:eq(3) td:eq(0)').html()
}

    

    
    console.log(TableData);
    serverStartgame(TableData);


   

};


function serverStartgame(TableData) {
    if (TableData.username2 != null && TableData.username3 != null && TableData.username4 != null) {
        $.ajax({
            url: "http://localhost:8080/api/newRound",
            type: "POST",
            dataType: "json",
            data: TableData,
            success: function (data) {
                serverresultNewGame(data);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(jqXhr);
            }
        });
    } else {
        alert("Select 3 playes");
    }
    
}



function serverresultNewGame(data) {
    if (data != 0) {
        console.log(data);
        localStorage['roundId'] = data;
        window.location.href = "GameScreen.html";

    } else {
        alert("Invalid plyer invited");
    }
};