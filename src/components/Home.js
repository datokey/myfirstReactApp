import Body from './Body';
import Navbar from './Navbar';

import {useState, useEffect} from 'react';
import useFetch from '../hook/useFetch';


const Home = () => {

    const { data: dataUser, isLoading, error } = useFetch('https://picsum.photos/v2/list?page=1&limit=3');


    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-300">
            {/* navbar */}
            <Navbar/>
            {/* body */}
            {/* pesan error  */}
            {error && <div> {error}</div>}
            {/* loading  */}
            {isLoading && <div className="flex justify-center">
                <svg className="text-center animate-spin h-10 w-10" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            </div>}
            {/* tabel gambar */}
            {dataUser && <Body data={dataUser} title="Asuu"/>}
            {/* footer */}
            <div>Footer</div>
        </div>
    );
}

export default Home;