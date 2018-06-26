$(document).ready(function () {
    loadUi();
});

var UserName;
function loadUi() {
    $("#txtPlayer").val(localStorage['UserName']);
    UserName = localStorage['UserName'];
    getBankAmount(UserName);
};

function getBankAmount(User) {
    var user = {
        username: User
    };

    $.ajax({
        url: "http://192.168.8.200:8080/api/user-bank",
        type: "POST",
        dataType: "json",
        //crossDomain: true,
        data: user,
        success: function (data) {
            //console.log(data);
            BankDetails(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
    
    
    
};

function BankDetails(data) {
    var Amount = data.bankAmount;
    $("#txtBankAmount").val(Amount);


    var user = {
        username: UserName
    };

    $.ajax({
        url: "http://192.168.8.200:8080/api/rounds-wining-users",
        type: "POST",
        dataType: "json",
        //crossDomain: true,
        data: user,
        success: function (data) {
            console.log(data);
            loadServerResult(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert(jqXhr,errorThrown);
        }
    });
};


function loadServerResult(data) {
    //console.log(data);
    var content;

    var templ = $("#jstblGameRound").html();
    $(data).each(function(index, value) {
        var tmp2 = templ;
        tmp2 = tmp2.split("{{GameRound}}").join("Round " + value.roundId);
        tmp2 = tmp2.split("{{Winner}}").join(value.userName);
        content += tmp2;
    });
    $('#tbl_GameRound').append(content);
}