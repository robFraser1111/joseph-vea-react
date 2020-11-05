import React from 'react'

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';
import spotify from '../images/spotify.svg';
import apple from '../images/apple.svg';
import soundcloud from '../images/soundcloud.svg';
import triplej from '../images/triplej.svg';

export default function Social() {
    return (
        <div className="flex flex-row justify-center space-x-6 py-3 items-center">
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://www.facebook.com/josephtvea" rel="noreferrer" target="_blank">
                <img src={facebook} alt="Facebook" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://twitter.com/josephtvea1" rel="noreferrer" target="_blank">
                <img src={twitter} alt="Twitter" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://www.instagram.com/josephtvea/" rel="noreferrer" target="_blank">
                <img src={instagram} alt="Instagram" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://www.youtube.com/channel/UCOprAQPmBdJvvW5-ogFHQmg" rel="noreferrer" target="_blank">
                <img src={youtube} alt="YouTube" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://open.spotify.com/artist/7haTfRcmlhxzWtonlmgPVo" rel="noreferrer" target="_blank">
                <img src={spotify} alt="Spotify" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://music.apple.com/au/album/half-as-much/1533521110?i=1533521114" rel="noreferrer" target="_blank">
                <img src={apple} alt="Apple" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://soundcloud.com/josephtvea" rel="noreferrer" target="_blank">
                <img src={soundcloud} alt="SoundCloud" />
            </a>
            <a className="hover:opacity-75 transition duration-200 ease-in-out" href="https://www.triplejunearthed.com/artist/joseph-vea" rel="noreferrer" target="_blank">
                <img src={triplej} alt="Triple J" />
            </a>
        </div>
    )
}
