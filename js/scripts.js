
Parse.initialize("YOUR_PARSE_APPLICATION_ID", "YOUR_PARSE_JAVASCRIPT_KEY");
Parse.serverURL = "https://parseapi.back4app.com/";

const Resume = Parse.Object.extend("Resume");
const resumeQuery = new Parse.Query(Resume);

function atualizarCurriculo() {
    resumeQuery.first().then(function (result) {
        if (result) {
            // Atualize os elementos HTML com os dados do Back4App
            document.getElementById('nome').textContent = result.get('Nome');
            document.getElementById('telefone').textContent = result.get('Telefone');
            document.getElementById('email').textContent = result.get('Email');
            document.getElementById('experiencia').textContent = result.get('Experiencia');
            document.getElementById('educacao').textContent = result.get('Educacao');
            // Adicione mais linhas de código para atualizar outros campos do currículo, se necessário
        }
    }).catch(function (error) {
        console.log('Erro ao buscar dados do Back4App:', error);
    });
}

window.addEventListener('DOMContentLoaded', event => {
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    atualizarCurriculo();
});
