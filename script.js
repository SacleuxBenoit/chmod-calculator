function refresh(){
    // Owner
    const o_R = document.getElementById('o_R');
    const o_W = document.getElementById('o_W');
    const o_X = document.getElementById('o_X');

    // Group
    const g_R = document.getElementById('g_R');
    const g_W = document.getElementById('g_W');
    const g_X = document.getElementById('g_X');

    // Public
    const p_R = document.getElementById('p_R');
    const p_W = document.getElementById('p_W');
    const p_X = document.getElementById('p_X');

    // Result
    const result = document.getElementById('result')
    const o_result = 0;
    const g_result = 0;
    const p_result = 0;

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
