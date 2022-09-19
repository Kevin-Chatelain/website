///////////////////////////////////////////
///Chagement de section avec les carrés///
/////////////////////////////////////////

document.querySelectorAll('.progression>div').forEach(div => {
    div.addEventListener('click', () => {

        document.querySelectorAll('.progression>div').forEach(div => {
            div.classList.remove('position');
        })

        let current = div.className;
        let y = document.getElementById(current).offsetTop - 200;
        document.documentElement.scroll(0, y);
        div.classList.add('position');
    }) 
})


///////////////////////////
///Paramètres au scroll///
/////////////////////////

/// Detection si le millieu du viewport touche un des bords d'une des section.

window.addEventListener('scroll', () => {
    const accueil = document.getElementById('accueil').offsetTop;
    const profil = document.getElementById('profil').offsetTop; 
    const projets = document.getElementById('projets').offsetTop;
    const contact = document.getElementById('contact').offsetTop;
    let wp_position = (window.scrollY + (window.innerHeight / 2));

    function sectionDetection (section) {
        document.querySelectorAll('.progression>div').forEach(div => {
            div.classList.remove('position');
        })
        document.querySelector('.'+section).classList.add('position');
        document.querySelector('.marque .visible').classList.remove('visible');
        document.querySelector('.marque .'+section+'_marque').classList.add('visible');

        document.querySelectorAll('header a').forEach(a => {
            a.classList.remove('active');
        })

        document.querySelector('header a[href = "#'+section+'"]').classList.add('active');
    }


    if(wp_position >= accueil) {
        sectionDetection('accueil');
    }

    if(wp_position >= profil) {
        sectionDetection('profil');
    }

    if(wp_position >= projets) {
        sectionDetection('projets');
    }

    if(wp_position >= contact) {
        sectionDetection('contact');
    }
});