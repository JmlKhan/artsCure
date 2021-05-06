import React from 'react';

//styled
import styled from 'styled-components';
import { About } from "../styles";

//images
import clown from '../images/clown.jpg';
import msd from '../images/msd.jpg';
import hm from '../images/hm.jpg';

// animation import
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";


const Paintings = () => {
    return (  
        <motion.div variants={pageAnimation} 
        initial = "hidden"
        animate = 'show'
        >
            <Images>
                <div className="paint">
                    <img src={clown} alt="clown"/>
                    <div className="def">
                        <h1>Masqaraboz</h1>
                        <p>
                        Yorqin ranglardan foydalanib masqaraboz qiyofasini tasvirlashga 
                        intilgan rassom uni asar markaziga joylashtirish orqali unga o'ziga 
                        xos muvozanat baxsh etadi.
                        Asarda shunday g'oya ilgari surilganki, 
                        ayrim tomoshabinlar buni kartinaga bir qarashda anglay olmaydilar. 
                        Rassom asar mohiyatini yanada ochish uchun qo'shimcha detallardan foydalangan. 
                        Narvon olg'a intilish yuqoriga harakatlanish manosida qo'llanilgan. 
                        Masqaraboz o'z kasbi bo'yicha narvonning eng yuqorisiga chiqqan, 
                        eng baland cho'qqini zabd etgan. Ammo shunga qaramay u masqarabozligicha qolgan. 
                        Rassom bu ramziy timsolni har qaysi insonlar bilan solishtirgan. 
                        Haqiqatdan ham xuddi shunday. Insonlar ham zabt etish mumkin 
                        bo'lgan eng yuqori qirralarni zabt etishiga qaramay u insonligicha qoladi…
                        Asarning o'ziga xosligi, ko'plab olqishlarga sazovor bo'lganligini 
                        sababi ham aynan shunda, uning takrorlanmas g'oyasida bo'lgan.
                        </p>
                    </div>
                </div>

                <div className="paint">
                    <img src={msd} alt="clown"/>
                    <div className="def">
                        <h1>Maqsadsiz Dunyo</h1>
                        <p>
                        Yorqin ranglardan foydalanib masqaraboz qiyofasini tasvirlashga 
                        intilgan rassom uni asar markaziga joylashtirish orqali unga o'ziga 
                        xos muvozanat baxsh etadi.
                        Asarda shunday g'oya ilgari surilganki, 
                        ayrim tomoshabinlar buni kartinaga bir qarashda anglay olmaydilar. 
                        Rassom asar mohiyatini yanada ochish uchun qo'shimcha detallardan foydalangan. 
                        Narvon olg'a intilish yuqoriga harakatlanish manosida qo'llanilgan. 
                        Masqaraboz o'z kasbi bo'yicha narvonning eng yuqorisiga chiqqan, 
                        eng baland cho'qqini zabd etgan. Ammo shunga qaramay u masqarabozligicha qolgan. 
                        Rassom bu ramziy timsolni har qaysi insonlar bilan solishtirgan. 
                        Haqiqatdan ham xuddi shunday. Insonlar ham zabt etish mumkin 
                        bo'lgan eng yuqori qirralarni zabt etishiga qaramay u insonligicha qoladi…
                        Asarning o'ziga xosligi, ko'plab olqishlarga sazovor bo'lganligini 
                        sababi ham aynan shunda, uning takrorlanmas g'oyasida bo'lgan.
                        </p>
                    </div>
                </div>
                <div className="paint">
                    <img src={hm} alt="clown"/>
                    <div className="def">
                        <h1>Hayoliy Muhabbat</h1>
                        <p>
                        Yorqin ranglardan foydalanib masqaraboz qiyofasini tasvirlashga 
                        intilgan rassom uni asar markaziga joylashtirish orqali unga o'ziga 
                        xos muvozanat baxsh etadi.
                        Asarda shunday g'oya ilgari surilganki, 
                        ayrim tomoshabinlar buni kartinaga bir qarashda anglay olmaydilar. 
                        Rassom asar mohiyatini yanada ochish uchun qo'shimcha detallardan foydalangan. 
                        Narvon olg'a intilish yuqoriga harakatlanish manosida qo'llanilgan. 
                        Masqaraboz o'z kasbi bo'yicha narvonning eng yuqorisiga chiqqan, 
                        eng baland cho'qqini zabd etgan. Ammo shunga qaramay u masqarabozligicha qolgan. 
                        Rassom bu ramziy timsolni har qaysi insonlar bilan solishtirgan. 
                        Haqiqatdan ham xuddi shunday. Insonlar ham zabt etish mumkin 
                        bo'lgan eng yuqori qirralarni zabt etishiga qaramay u insonligicha qoladi…
                        Asarning o'ziga xosligi, ko'plab olqishlarga sazovor bo'lganligini 
                        sababi ham aynan shunda, uning takrorlanmas g'oyasida bo'lgan.
                        </p>
                    </div>
                </div>

            </Images>
        </motion.div>
    );
}

 const Images = styled(About)`
 display: flex;
 flex-direction: column;
 .paint{
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 20px;
     border: 2px solid lightcoral;
     margin: 20px;
     h1{
         text-align: center;
     }
     
 }
 .def{
     padding-top: 100px;
 }
 
 img{
     height: 600px;
     width: 550px;
     padding-top: 70px;
 }

// mobile 
@media screen and (max-width: 860px){
   .paint{ 
    border: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    img{
        
    }
   }
 }

 `;
export default Paintings;