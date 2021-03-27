const moreBadgeBtn = document .querySelector('.userInfo .BadgeAndList .moreBtn');
const title= document .querySelector('.userInfo .BadgeAndList .title');

moreBadgeBtn.addEventListener('click', () => {
    moreBadgeBtn.classList.toggle('clicked');
});


let bDisplay = ture;
function doDisplay(){
        let con = document.getElementById("totalBadge");
        if(con.style.display=='block'){
                con.style.display = 'none';
        }else{
                con.style.display='block';
        }
}


