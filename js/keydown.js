document.addEventListener("DOMContentLoaded", 
    /*
        브라우저에서 값을 입력하는 과정
        키 눌림 -> 눌린 키가 어떤 값인지 계산함 -> 해당 값을 화면에 표시함
        따라서 우리가 a를 누르는 타이밍에는 아직 브라우저의 input태그 내부의 입력되지 않은 상태
    */
    function (e) {
        let keydown = document.querySelector("#keydown");
        keydown.addEventListener("keydown", 
            function(e) {
                console.log(e.key);

                if (e.key === 'q') {
                    alert("this is q");
                }
            }
        )
    

})