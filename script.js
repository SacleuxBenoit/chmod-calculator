function refresh(){
    // Owner
    let o_R = document.getElementById('o_R');
    let o_W = document.getElementById('o_W');
    let o_X = document.getElementById('o_X');

    // Group
    let g_R = document.getElementById('g_R');
    let g_W = document.getElementById('g_W');
    let g_X = document.getElementById('g_X');

    // Public
    let p_R = document.getElementById('p_R');
    let p_W = document.getElementById('p_W');
    let p_X = document.getElementById('p_X');

    // Result
    let result = document.getElementById('result')
    let o_result = 0;
    let g_result = 0;
    let p_result = 0;

    // Owner
    if(o_R.checked){
        o_result += 4;
    }

    if(o_W.checked){
        o_result += 2;
    }

    if(o_X.checked){
        o_result += 1;
    }

    // Group
    if(g_R.checked){
        g_result += 4;
    }

    if(g_W.checked){
        g_result += 2;
    }

    if(g_X.checked){
        g_result += 1;
    }

    // Public
    if(p_R.checked){
        p_result += 4;
    }

    if(p_W.checked){
        p_result += 2;
    }

    if(p_X.checked){
        p_result += 1;
    }

    result.textContent = " " + o_result + g_result + p_result;
}
