import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactHTMLParser from 'react-html-parser';

import './_References.scss';

import Citaat from '../../../assets/icons/citaat.svg';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const References = ({ target }) => {
    const references = [
        {
            'name': 'Alan S.',
            'date': 'Gesprek gehad met Fien Desmet – september 2020',
            'text': "Tijdens mijn zoektocht naar een nieuwe uitdaging nam Fien contact op met mij om mij te helpen. Nog nooit had ik zo'n aangenaam gesprek met een kantoor! Vriendelijke, correcte vragen, oprechte interesse en enthousiasme! Een zeer zeer aangename ervaring, zeker een aanrader!"
        },
        {
            'name': 'Jens C.',
            'date': 'Gesprek gehad met Fien Fourneau -  april 2020',
            'text': "Directe en vriendelijke communicatie. Geen dagen moeten wachten op reactie. Voorstellen op maat van interesse van de kandidaat. Ruim aanbod, zelf als je naar iets specifiek op zoek bent. Dit kantoor steekt ver boven uit de andere kantoren. Zeker een aanrader al is het voor je eerste werkervaring alsook voor een nieuwe uitdaging."
        },
        {
            'name': 'Steve K.',
            'date': 'Gesprek gehad met Sophie Verschelde – januari 2021',
            'text': `The initial contact was through an open position I solicited at. As from the first initial phone conversation, followed by a video call, I must state that this was at all times in a professional and warm open manner. Enjoy Jobs work ethic is second to none from start to finish. Even the follow up and the good luck phone call I received, is something you will not find at anyone else. I can truly recommend Enjoy Jobs in your search for the right candidate within your company.`
        },
    ];

    const otherReferences = [
        {
            'name': 'Battery Supplies',
            'location': 'Deerlijk',
            'link': 'https://www.batterysupplies.be/',
            'text': '<p>Een vacature invullen en samenwerken met Sophie en Fien van Enjoy Jobs betekent:<br/><br/><strong>E</strong>nergieke benadering van vacature & klant<br/><strong>N</strong>iche-aanpak voor niche vacature en Nooit opgeven<br/><strong>J</strong>uiste voorstelling op het juiste moment<br/><strong>O</strong>prechte feedback rond stand van zaken<br/><strong>Y</strong>es! Het gevoel bij een gerealiseerde en duurzame aanwerving, zowel bij Sophie en Fien als bij Battery Supplies.</p>'
        },
        {
            'name': 'HiveCPQ',
            'location': 'Gent',
            'link': 'https://www.hivecpq.com/en/',
            'text': '<p>Enjoy Jobs voelt ons DNA en weten ons iedere keer te verrassen met kwalitatieve kandidaten, wat niet evident is in onze sector. Ze volgen de vacatures en voorgestelde kandidaten op een goede manier op, zodat het niet belastend wordt voor ons. Op die manier ondersteunen ze ons doorheen het rekruteringsproces, zodat wij ons kunnen focussen om onze corebusiness. We kijken uit naar de verdere samenwerking!</p>'
        },
        {
            'name': 'Limited Edition',
            'location': 'Moeskroen',
            'link': 'https://www.le.be/nl/',
            'text': '<p>Enjoy jobs, is voor mij een kantoor dat het DNA van ons bedrijf leert kennen. Professioneel, eerlijk, correct en open in communicatie. Dit is voor mij heel belangrijk, naast natuurlijk het voorstellen van de geschikte kandidaat.</p>'
        },
    ];

    return (
        <section className="references bg-tertiary">
            <div className="container">
                <h1 className="references__title">
                    Enkele referenties
                </h1>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        991.98: {
                            slidesPerView: 3,
                        }
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >
                    {
                        target === 'audience' ? references.map((element, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="references__item">
                                        <h2>{element.name}</h2>
                                        <h4>{element.date}</h4>
                                        <p dangerouslySetInnerHTML={{__html: element.text}}></p>
                                        <img src={Citaat} alt="citaat" />
                                    </div>
                                </SwiperSlide>
                            )
                        }) : otherReferences.map((element, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="references__item">
                                        <a href={element.link} target="_blank" rel="noopener noreferrer"><h2>{element.name}</h2></a>
                                        <h4>{element.location}</h4>
                                        {
                                            ReactHTMLParser(element.text)
                                        }
                                        <img src={Citaat} alt="citaat" />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
};

export default References;