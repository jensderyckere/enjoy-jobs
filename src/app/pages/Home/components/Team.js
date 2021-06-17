import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './_Team.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import portraitFien from '../../../assets/photos/portrait_fien.png';
import portraitSophie from '../../../assets/photos/portrait_sophie.jpg';
import portraitFien2 from '../../../assets/photos/portrait_fien2.jpeg';

SwiperCore.use([Pagination]);

const Team = () => {
    const animateCard = (bool, index) => {
        const memberCard = document.getElementsByClassName('team__members--member')[index];

        if (bool === true) {
            memberCard.classList.add('active-member');
        } else {
            memberCard.classList.remove('active-member');
        };
    };

    const members = [
        {
            "name": "Fien Fourneau",
            "title": "Hartwerkende HR Consultant",
            "img": portraitFien,
            "text": "Fien heeft een achtergrond in communicatie en gebruikt deze graag dagelijks bij Enjoy Jobs. Door aandachtig te luisteren kan ze snel de match leggen tussen de verwachtingen van bedrijven en kandidaten. Zelf in stressvolle situaties bewaart ze haar rust en focus en straalt ze dit uit naar haar collega’s. ",
        },
        {
            "name": "Sophie Verschelde",
            "title": "Hartwerkende Expert HR/Zaakvoerder",
            "img": portraitSophie,
            "text": "Met haar +20 jaar ervaring binnen rekrutering en selectie is Sophie een echte professional in haar vak. Ze deelt haar kennis graag met anderen, wat haar een goede coach maakt. Haar intuïtie laat haar zelden in de steek. Haar passie voor HR, gedrevenheid en aanhoudend enthousiasme geeft het volledige team een boost.",
        },
        {
            "name": "Fien Desmet",
            "title": "Hartwerkende HR Consultant",
            "img": portraitFien2,
            "text": "Fien is de jongste spring in het veld, die het goede in elke persoon naar boven brengt. De waarden eerlijkheid en respect draagt ze hoog in het vaandel. Je kan haar omschrijven als een bezige bij en een positieve denker. Fien kan zich zoals een kameleon snel aanpassen in veranderende omgeving.",
        },
    ];

    return (
            <section className="team bg-tertiary">
                <div className="container">
                    <h1 className="team__title">
                        Wij staan voor jou klaar
                    </h1>

                    {/** Visible for desktop */}
                    <div className="team__members">
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
                            navigation
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                        >
                            {
                                members.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="team__members--member unhidden-member" 
                                                onMouseEnter={() => animateCard(true, index)} 
                                                onMouseLeave={() => animateCard(false, index)} 
                                            >
                                                <div className="team__members--member__content">
                                                    <div className="team__members--member__content--img" style={{backgroundImage: `url(${element.img})`}}></div>
                                                    <div className="team__members--member__content--text">
                                                        <h5>{element.name}</h5>
                                                        <h6>{element.title}</h6>
                                                        <p>{element.text}</p>
                                                    </div>
                                                </div>
                                                <h5 className="team__members--member__name">{element.name}</h5>
                                                <h5 className="team__members--member__function">{element.title}</h5>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
    )
};

export default Team;