let data_book;
let next_page = 0;
let output = "";
let test = $(".page");

f_load();

get_inp();
next_page_fun();

function f_load() {
    $.getJSON("./data/goosebumps.json",
        function(data) {
            console.log(data);
            output = "";
            $.each(data, function(key, val) {

                if (key == 1) {
                    output += "<p id='page'>" + val.page + "</p>";
                    output += "<img src=" + val.img + ">";

                    test.html(output);

                }
            });

        }
    );
}

function load_page(page) {
    $.getJSON("./data/goosebumps.json",
        function(data) {
            console.log(data);
            output = "";
            $.each(data, function(key, val) {

                if (key == page) {
                    output += "<p id='page'>" + val.page + "</p>";
                    output += "<p class='text'>" + val.text + "</p>";
                    output += "<p class='g_to'>" + val.g_to + "</p>";
                    test.html(output);
                }
            });

        }
    );
}



function get_inp() {
    $('#get_inp').click(function() {
        let inp_text = $('#inp_text').val();
        if (inp_text != 1) {
            load_page(inp_text);
        } else {
            alert("NOT 1");
        }
        inp_text = $('#inp_text').val('');

    });
}

function next_page_fun() {
    $('#next_page').click(function() {
        next_page = (parseInt($('#page').text())) + 1;
        load_page(next_page);

    });
}