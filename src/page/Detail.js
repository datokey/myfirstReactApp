const Detail = () => {
    return (
        <div>
            <div className=" flex items-center justify-center lg:p-44 p-3" >
                <div className=" bg-gray-200 items-end relative rounded-2xl shadow-2xl">
                    <div className="rounded-xl bg-yellow-800 text-left text-xs md:text-xs py-3 p-3 md:pl-36 md:pt-3 lg:pl-80 lg:text-base ">
                        {/* gambar */}
                        <div className="flex sm:hidden lg:-top-32 lg:left-12
                         md:-top-11 md:-left-7 -top-7 -left-5 p-2 bg-gray-200
                         rounded-xl shadow-lg hover:shadow-2xl 
                         transition duration-500 ">
                            <img src="https://cdn.myanimelist.net/images/anime/1683/94370.jpg" alt=""
                                className="lg:w-full lg:h-72 md:w-36 md:h-44  w-full h-40 " />
                        </div>
                        <h1 className="md:pt-8 font-bold text-lg bottom-5 left-14 hidden md:flex lg:hidden"> Nama Animenya diatas</h1>

                        {/* end gambar */}

                         
                       <p className="pt-7">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                       .</p>
                       <p className="pt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                       .
                       </p>
                   </div>

                    {/* gambar */}
                    <div className="hidden sm:flex lg:-top-32 lg:left-12 md:-top-11 md:-left-7 -top-7 -left-5 p-2 bg-gray-200 absolute rounded-xl shadow-lg hover:shadow-2xl 
                    transition duration-500">
                        <img src="https://cdn.myanimelist.net/images/anime/1683/94370.jpg" alt=""
                            className="lg:w-full lg:h-72 md:w-36 md:h-44  w-20 h-32 "  />
                        </div>
                    {/* end gambar */}
                 </div>
               
               </div>

              
        </div>
    );
}

export default Detail;

// src="https://cdn.myanimelist.net/images/anime/1683/94370.jpg" 
