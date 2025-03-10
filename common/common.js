// null 체크
let gfn_null = x => {
    /*
        값이 없을 시 true 로 반환
    */
    let xValue = new String(x);
    console.log("xValue ::" + xValue);
    if (xValue == "" || 
        xValue == "undefined" ||
        xValue == null || 
        xValue == undefined || 
        xValue == NaN ||
        xValue != null && typeof xValue == "object" && !Object.keys(x).length) {
        return true;
    }
    return false;
}
// NUMBER 체크
let gfn_num_check = x => {
    /*
        NUMBER 타입이 들어올 시 true로 반환
        1자리 이상 number 값이 들어와야 true
        공백 및 string 포함 시 false
    */
    let num_check = /^[0-9]+$/;
    // let num_check = /^\d+$/;
    return num_check.test(x);
}
// 문자열 양 옆 공백 제거
let gfn_trim = x => {
    /* 
        'x' 데이터에 대한 양옆의 공백 제거 후 return
    */
    if (gfn_null(x)) return "";
    let strValue = new String(x);
    rtnValue = strValue.replace(/^\s+|\s+$/g, '');
    return rtnValue;
}
// 전체 공백 제거
let gfn_AllTrim = x => {
    /*
        'x' 데이터에 대한 전체 공백 제거 후 return
    */
    if (gfn_null(x)) return "";
    let strValue = new String(x);
    
    let rtnValue = "";
    for (let i = 0; i < strValue.length; i++) {
        if (strValue.charAt(i) != " ") {
            // rtnValue = rtnValue + strValue.charAt(i);
            rtnValue = strValue.charAt(i);
        }
    }
    return rtnValue;
}
