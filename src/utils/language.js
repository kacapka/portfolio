import React from 'react';

const lang = {
    
    pl: {
        home: {
            title: {
                top: 'CZ',
                bottom: 'EŚĆ'
            }
        },
        about: {
            title: {
                top: 'O',
                bottom: 'MNIE'
            },
            nav: 'O mnie',
            greeting: {
                name: "Cześć, nazywam się Wojtek Urbański.",
                description: <h3>Tworzę <span>super</span> strony internetowe.</h3>
            },
            description: <p>Jetsem front-end developerem, miłośnikiem JavaScriptu i technologii webowych. Swoją przygodę z kodowaniem zacząłem ponad rok temu czego owocem bybła moja piersza <a href='https://kacapka.github.io/genius/' target='_blank' className='about__link'>strona.</a> Wraz z czasem stawiałem sobie wyżej poprzeczkę i realizowałem kolejne <a href='/projects' className='about__link'>projekty.</a> Aktualnie pracuje przy użyciu react oraz redux. Nie jestem fanem jQery oraz bootstrap. W swoich pracach również nie korzystam z szablonów i gotowych layoutów. W kolejnych projektach chciałbym tworzyć unikatowe aplikacje, które będą wymagać odemnie ciągłego rozwoju i rozwiązywania nowych problemów.</p>,
            more: 'Poza kodowanie wolny czas spędzam w Crossfitowym boxie. Kasę i urlop przeznaczam na podróże.',
            contact: <p>Jeśli chcesz mnie zatrudnić lub wspólnie stworzyć ciekawy projekt zapraszam do <a href='/contact' className='about__link'>kontaktu.</a></p>
        },
        projects: {
            title: {
                top: 'PRO',
                bottom: 'JEKTY'
            },
            nav: 'Projekty',
            description: {
                cf: 'Strona boxu crossfitowego. Jest to mój pierwszy projekt wykonany w celu testowania oraz wdrażania nabytych umiejętności z użyciem html, css oraz JS. Tu napisałem pierszą funkcję, pierwszą animację oraz responsywny wygląd',
                bj: 'Wyszukiwarka lokali gastronomicznych dla miasta Warszawa. W ramach nauki postanowiłem przekóć mój niedoszly startup w działający produkt. Aplikacja webowa opierająca się głównie na interfejsie mapy - Google Maps. Projekt operty o React - Redux, powstał przy użyciu szablonu create-react-app. W celu autoryzacji uzytkowników oraz zastosowaniu bazy danych użyłem Firebase. (baza lokali nieaktualna)',
                wt: 'Aplikacja webowa do zarządzania oraz sprzedaży planów treningowych. Projekt zawiera stronę dla użytkowników - sprzedaż planów i ich zawartość, oraz panelu admina - zarządzanie treścią. Jestem odpowiedzialny za front-end aplikacj.',
                portfolio: 'Projekt oparty na szablonie create-react-app. Prosty interfejs, który oparty głownie jest na dynamicznie zmienijących się stylach.'
            }
        },
        contact: {
            title: {
                top: 'KON',
                bottom: 'TAKT'
            },
            nav: 'Kontakt',
            textMail: 'Śmiało, napisz na poniższy adres, z chęcią odpowiem na każdą wiadomość.',
            textPhone: 'Możesz równie do mnie zadzwonić.',
            textSocial: 'ZNAJDŹ MNIE NA SOCIAL MEDIA'
        },
        city: 'Warszawa, Wola'
    },
    
    en: {
        home: {
            title: {
                top: 'HE',
                bottom: 'LLO'
            }
        },
        about: {
            title: {
                top: 'AB',
                bottom: 'OUT'
            },
            nav: 'About',
            greeting: {
                name: "Hi, I am Wojtek Urbański.",
                description: <h3>I make <span>cool</span> websites.</h3>
            },
            description: <p>Jetsem front-end developerem, miłośnikiem JavaScriptu i technologii webowych. Jestem samoukiem, swoją przygodę z kodowaniem zacząłem ponad rok temu czego owocem bybła moja piersza <a href='' target='_blank' className='about__link'>strona.</a> Wraz z czasem stawiałem sobie wyżej poprzeczkę i realizowałem kolejne <a href='/projects' className='about__link'>projekty.</a> Aktualnie pracuje przy użyciu react oraz redux. Nie jestem fanem jQery oraz bootstrap. W swoich pracach również nie korzystam z szablonów i gotowych layoutów. W kolejnych projektach chciałbym tworzyć unikatowe aplikacje, które będą wymagać odemnie ciągłego rozwoju i rozwiązywania nowych problemów.</p>,
            more: 'Poza kodowanie wolny czas spędzam w Crossfitowym boxie. Kasę i urlop przeznaczam na podróże.',
            contact: <p>Jeśli chcesz mnie zatrudnić lub wspólnie stworzyć ciekawy projekt zapraszam do <a href='/contact' className='about__link'>kontaktu.</a></p>
        },
        projects: {
            title: {
                top: 'PRO',
                bottom: 'JECTS'
            },
            nav: 'Projects',
            description: {
                cf: 'Strona boxu crossfitowego. Jest to mój pierwszy projekt wykonany w celu testowania oraz wdrażania nabytych umiejętności z użyciem html, css oraz JS. Jeden plik .html, jeden .css oraz .js, moja pierwsza funkcja, animacja oraz responsywny wygląd.',
                bj: 'Wyszukiwarka lokali gastronomicznych dla miasta Warszawa. W ramach nauki postanowiłem przekóć mój niedoszly startup w działający produkt. Aplikacja webowa opierająca się głównie na interfejsie mapy - Google Maps. Projekt operty o React - Redux, powstał przy użyciu szablonu create-react-app. W celu autoryzacji uzytkowników oraz zastosowaniu bazy danych użyłem Firebase. (baza lokali nieaktualna).',
                wt: 'Aplikacja webowa do zarządzania oraz sprzedaży planów treningowych. Projekt zawiera stronę dla użytkowników - sprzedaż planów i ich zawartość, oraz panelu admina - zarządzanie treścią. Jestem odpowiedzialny za front-end aplikacj.',
                portfolio: 'Portfolio stworzona na paczce create-react-app. Prosty interfejs, który oparty głownie jest na dynamicznie zmienijących się stylach.'
            }
        },
        contact: {
            title: {
                top: 'CON',
                bottom: 'TACT'
            },
            nav: 'Contact',
            textMail: "Feel free to contact me through the email below, I'd love to chat.",
            textPhone: 'You can also reach me through this number.',
            textSocial: 'WHERE TO FIND ME'
        },
        city: 'Warsaw, Wola'
    },
    
    
}

export default lang;