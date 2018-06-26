/// <reference path="E:\Pavi\Stock_Trading_Simulator\Stock_Trading_Simulator\Stock_Trading_Simulator\PlayerProfile.html" />
$(document).ready(function () {
    loadUi();
});

function loadUi() {
    $("#btnLogin").click(loginfunction);
    $("#btnRegister").click(Registerfunction);
};

function loginfunction() {
    var username = $("#txtUserName").val();
    var Password = $("#txtPassword").val();
    var userlogindata;
    var rerultUser;

    if (username != "" & Password != "") {
        userlogindata = { username: username, password: Password }
    }

    console.log(userlogindata);


    $.ajax({
        url: "http://192.168.8.200:8080/api/login",
        type: "POST",
        dataType: "json",
        //crossDomain: true,
        data: userlogindata,
        success: function (data) {
            userLoging(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

    function userLoging(data) {
        if (data == true) {
            window.location.href = "PlayerProfile.html";
            localStorage['UserName'] = username;
            localStorage['password'] = username;

        } else {
            alert("Invalid loging");
        }
    }

};


function Registerfunction() {

    var password = $("#txtPasswordregister").val();
    var passwordcom = $("#txtConfirmPassword").val();

    if (password == passwordcom) {

        if ($("#txtPasswordregister").val() != "") {
            var userRegister = {
                username: $("#txtUserNameregister").val(),
                password: $("#txtPasswordregister").val(),
                confirmpassword:$("#txtConfirmPassword").val()
            }

            $.ajax({
                url: "http://192.168.8.200:8080/api/register",
                type: "POST",
                dataType: "json",
                //crossDomain: true,
                data: userRegister,
                success: function (data) {
                    alert("Please Re-Loging");
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });




        } else {
            alert("Enter Use name");
        }

    } else {
        alert("Password is not match");
    }

    
};