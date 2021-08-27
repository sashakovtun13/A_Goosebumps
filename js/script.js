let data_book = "";
let next_page;
let output;
let test = $(".page");
let page;




f_load();
get_inp();
next_page_fun();
save_page();





// function

function f_load() {
    $.getJSON("./data/goosebumps.json",
        function(data) {


            output = "";
            data_book = data;
            console.log(data_book);

            if (localStorage.getItem('page') == null) {
                $.each(data_book, function(key, val) {
                    if (key == 1) {
                        output += "<p id='page'>" + val.page + "</p>";
                        output += "<img src=" + val.img + ">";
                        test.html(output);
                    }
                });
            } else {
                page = localStorage.getItem('page');
                load_page(page);
            }
        }
    );
}




function load_page(page) {
    output = "";

    $.each(data_book, function(key, val) {
        console.log(page);
        if (key == page && key != 1) {
            output += "<p  id='page'>" + val.page + "</p>";
            output += "<p class=' text'>" + val.text + "</p>";
            output += "<p class=' g_to'>" + val.g_to + "</p>";
            test.html(output);
        }

    });
};

function get_inp() {
    $('#get_inp').click(function() {
        let inp_text = $('#inp_text').val();
        if (inp_text != 1) {
            load_page(inp_text);
            page = inp_text;
            console.log(page);
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

function json_st() {
    aa = $(".aa");
    let a;

    for (let index = 11; index < 136; index++) {

        a += '\"' + index + '\": { <br> \"page\":' + index + ', <br> \"text\":\"\", <br> \"g_to\": \"\" <br> },';
        aa.html(a);

    }
}

function save_page() {
    $('#save').click(function() {
        localStorage.setItem('page', (parseInt($('#page').text())));

        page = localStorage.getItem('page');
        alert("Save");
        console.log(page);

    });
}
