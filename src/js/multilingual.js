(function () {
    // setting language
    sessionStorage.setItem('language', 'eng');

    switch(sessionStorage.getItem('language')) {
        case 'eng':
            setLanguage('eng');
            break;
        case 'kor':
            setLanguage('kor');
            break;
        case 'jap':
            setLanguage('jap');
            break;
        default:
            setLanguage('eng');
    }
    
    function setLanguage(param) {
        let filePath  = '../src/data/' + param + '.json';

        $.getJSON(filePath, function(data) {
            let resultData = data;

            $('[data-lang-key]').each(function () {
                let $self = $(this);
                $self.html(resultData[$self.data('lang-key')]);
            });
        });
    }
})();