var cookie= getCookie();

console.log(cookie)
if (cookie) {
    var html = getHours(cookie);
    console.log(html)
}

function getCookie() {
    var value = "; " + document.cookie;
    var parts = value.split("; " + 'userId' + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

async function getHours(user) {
    var currentDate = new Date();
    var stringDate =formatDate(currentDate);
    console.log(stringDate)

    formData = new FormData();
    formData.append('users',  JSON.stringify([{"Users":{'id':user}}]));
    formData.append('from', '2019-06-09 22:00:00');
    formData.append('to', '2019-06-09 22:00:00');

    const response = await fetch('https://panel.sesametime.com/admin/statistics/element/extras', {
        method: 'POST',
        body: formData,
    });

    return response;
}

function formatDate(date) {
    var newDate = new Date(date);
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    var formatDate = newDate.toLocaleDateString('en-US', options);

    return formatDate;
}