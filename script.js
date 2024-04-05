$(document).ready(function() {
    $("#iconArrow").click(function() {
        let day = $("#Day").val();
        let month = $("#Month").val();
        let year = $("#Year").val();

        if(day == '' || month == '' || year == '') {
            $(".reqMess").show().text("req fieldd")
            $("form span").css({
                'color': 'red'
            })
            $("input").css({
                'border': '1px solid red'
            })

        } else if ((month > 12 || year > 2024) && day <= 31) {
            $("input").css({
                'border': '1px solid red'
            })
            $(".day").hide()
            $(".month").show().text('INVALID MONTH')
            $(".year").show().text('INVALID YEAR')

        } else if ((day > 31 || year > 2024) && month <= 12) {
            $("input").css({
                'border': '1px solid red'
            })
            $(".month").hide()
            $(".day").show().text('INVALID DAY')
            $(".year").show().text('INVALID YEAR')

        } else if ((day > 32 || month > 12) && year <= 2024) {
            $("input").css({
                'border': '1px solid red'
            })
            $(".year").hide()
            $(".day").show().text('INVALID DAY')
            $(".month").show().text('INVALID MONTH')

        } else if ((day > 31 && month <= 12 && year <= 2024)) {
            $("input").css({
                'border': '1px solid red'
            })
            // $(".year").show().text('INVALID YEAR')
            $(".day").show().text('INVALID DAY')
            // $(".month").show().text('INVALID MONTH')

        } else if (day > 31 && month > 12 && year > 2024) {
            $("input").css({
                'border': '1px solid red'
            })
            $(".year").show().text('INVALID YEAR')
            $(".day").show().text('INVALID DAY')
            $(".month").show().text('INVALID MONTH')
        } else if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
            $("input").css({
                'border': '1px solid red'
            })
            // $(".year").show().text('INVALID YEAR')
            $(".day").show().text('INVALID DAY')
            $(".month").show().text('INVALID MONTH')
        }

        var datum = new Date();

        var godina = datum.getFullYear();
        var mesec = datum.getMonth() + 1;
        var dan = datum.getDate();

        function calYear(a, b) {
            return a - b
        }

        function calMonth(a, b) {
            return a * b
        }
        let godinaRodjenja = calYear(godina, year);
        console.log(godinaRodjenja);

        function calDay(a, b) {
            return a * b
        }


        let daniRodjennja = calDay(godinaRodjenja, 365);
        console.log(daniRodjennja);

        $(".YearsOld").text(godinaRodjenja)
        if(month <= 12 && day <= 31) {
           $(".MonthsOld").text(calMonth(12, parseInt(month)));
           $(".DaysOld").text(calYear(daniRodjennja, 96)) 
        }
        
        
    })
    
})