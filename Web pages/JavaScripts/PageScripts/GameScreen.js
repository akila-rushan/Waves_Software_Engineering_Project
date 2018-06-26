$(document).ready(function () {
    loadUi();
});


function loadUi() {

    $("#btnBuy").click(setbuyshare);

    var i = 1; var refreshIntervalId = setInterval(logCount, 20000);
    loadtecBuy(i);
    function logCount() {

        i++;
        console.log(i);
        loadtecBuy(i);
        if (i == 10) {
            clearInterval(refreshIntervalId);
            callwinner();
        }
    };



};

function loadtecBuy(i) {

    var startround = {
        tempturn: i,
        username: localStorage['UserName'],
        roundid: 1,
        sectorid: 1
    };


    console.log(startround);

    $.ajax({
        url: "http://localhost:8080/api/run",
        type: "POST",
        dataType: "json",
        data: startround,
        success: function (data) {
            ServerloadtecBuy(data);
            loadFinaBuy(i);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(jqXhr);
            console.log(errorThrown);
        }
    });
};

function ServerloadtecBuy(data) {
    $("#tbl_tec_Buy").empty();
    console.log(data);

    var content;

    var templ = $("#tblbody_tec_Buy").html();
    $(data).each(function (index, value) {
        var tmp2 = templ;
        tmp2 = tmp2.split("{{Company}}").join(value.companyName);
        tmp2 = tmp2.split("{{tempTurnId}}").join(value.tempTurnId);
        tmp2 = tmp2.split("{{roundId}}").join(value.roundId);
        tmp2 = tmp2.split("{{userName}}").join(value.userName);
        tmp2 = tmp2.split("{{companyId}}").join(value.companyId);
        tmp2 = tmp2.split("{{Round01}}").join(value.sharePriceTurn1);
        tmp2 = tmp2.split("{{Round02}}").join(value.sharePriceTurn2);
        tmp2 = tmp2.split("{{Round03}}").join(value.sharePriceTurn3);
        tmp2 = tmp2.split("{{Round04}}").join(value.sharePriceTurn4);
        tmp2 = tmp2.split("{{Round05}}").join(value.sharePriceTurn5);
        tmp2 = tmp2.split("{{Round06}}").join(value.sharePriceTurn6);
        tmp2 = tmp2.split("{{Round07}}").join(value.sharePriceTurn7);
        tmp2 = tmp2.split("{{Round08}}").join(value.sharePriceTurn8);
        tmp2 = tmp2.split("{{Round09}}").join(value.sharePriceTurn9);
        tmp2 = tmp2.split("{{Round10}}").join(value.sharePriceTurn10);
        content += tmp2;
    });
    $('#tbl_tec_Buy').append(content);


};




function loadFinaBuy(i) {
    var startround = {
        tempturn: i,
        username: localStorage['UserName'],
        roundid: localStorage['roundId'],
        sectorid: 2
    };


    console.log(startround);

    $.ajax({
        url: "http://localhost:8080/api/run",
        type: "POST",
        dataType: "json",
        data: startround,
        success: function (data) {
            ServerloadFinaBuy(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(jqXhr);
            console.log(errorThrown);
        }
    });
}

function ServerloadFinaBuy(data) {
    //console.log(data);

    $("#tbl_fina_Buy").empty();

    var content;

    var templ = $("#tblbody_fina_Buy").html();
    $(data).each(function (index, value) {
        var tmp2 = templ;
        tmp2 = tmp2.split("{{Company}}").join(value.companyName);
        tmp2 = tmp2.split("{{tempTurnId}}").join(value.tempTurnId);
        tmp2 = tmp2.split("{{roundId}}").join(value.roundId);
        tmp2 = tmp2.split("{{userName}}").join(value.userName);
        tmp2 = tmp2.split("{{Round01}}").join(value.sharePriceTurn1);
        tmp2 = tmp2.split("{{Round02}}").join(value.sharePriceTurn2);
        tmp2 = tmp2.split("{{Round03}}").join(value.sharePriceTurn3);
        tmp2 = tmp2.split("{{Round04}}").join(value.sharePriceTurn4);
        tmp2 = tmp2.split("{{Round05}}").join(value.sharePriceTurn5);
        tmp2 = tmp2.split("{{Round06}}").join(value.sharePriceTurn6);
        tmp2 = tmp2.split("{{Round07}}").join(value.sharePriceTurn7);
        tmp2 = tmp2.split("{{Round08}}").join(value.sharePriceTurn8);
        tmp2 = tmp2.split("{{Round09}}").join(value.sharePriceTurn9);
        tmp2 = tmp2.split("{{Round10}}").join(value.sharePriceTurn10);
        content += tmp2;
    });
    $('#tbl_fina_Buy').append(content);
};


var tempturn, username, roundid, companyid;

function func_Buy(Company, companyId, roundId, tempTurnId, userName) {
    $("#lblCompany").html("Company: " + Company);
    $("#lblTurn").html("Round: " + tempTurnId);

   
    tempturn = tempTurnId,
    username = userName,
    roundid = roundId,
    companyid = companyId;
    
}


function setbuyshare() {

    var byushair = {
        tempturn: tempturn,
        username: username,
        roundid: roundid,
        companyid: companyid,
        units: $("#txtbuyunit").val()
    }

    console.log(byushair);

    $.ajax({
        url: "http://localhost:8080/api/buy-share",
        type: "POST",
        dataType: "json",
        data: byushair,
        success: function (data) {
            alert("Share buy successfully");
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(jqXhr);
            console.log(errorThrown);
        }
    });
}



function callwinner() {
    alert("Win");
}