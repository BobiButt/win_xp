// const off = ()=>{
   
//     const st = document.getElementById('start_menu');
//     const search = document.getElementById('search');
//     const shutt = document.getElementById('shuttdown');
//     const all_p_b = document.getElementById('all_program');
 
//     st.style.display='none';
//     search.style.display='none';
//     shutt.style.display='none';
//     all_p_b.style.display='none';

    


// }
const start = ()=>{
    const st = document.getElementById('start_menu');
    st.classList.toggle('show');
}
const search = ()=>{
    
    const search = document.getElementById('search');
    search.classList.toggle('open');
}
const power = ()=>{
    
    const shutt = document.getElementById('shuttdown');
    shutt.classList.toggle('open');
}
const shutt_cancel = ()=>{
    
    const shutt_d = document.getElementById('shuttdown');
    shutt_d.classList.toggle('open');
}

function alrt() {
    alert("ahmm ahmm its not easy. it will take some time to complete")
}
function shutt_alrt() {
    alert("try maybe work for u hahahaahaha")
}
// all programs
// const all_p_block = ()=>{
//     const ap_b = document.getElementById('all_program');
//     ap_b.classList.('p_display_block');
// }
const all_p = ()=> {
    const all_p_b = document.getElementById('all_program');
all_p_b.classList.toggle('p_display_block')
}