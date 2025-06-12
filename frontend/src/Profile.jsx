import { useEffect, useState } from 'react';
import Navbar from './component/NavBar'
import ProfileSection from './component/ProfileSection'
import LoadingScreen from './Loading/LoadingScreen';
import { GiPadlockOpen } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { fetchPosts } from '../api/api';
import { useNavigate } from 'react-router';

export default function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const dataPosts = await fetchPosts();
            setPosts(dataPosts);
    
            const imagePromises = dataPosts.map(post => {
                return new Promise(resolve => {
                    const img = new Image();
                    img.src = post.images[0]?.url || ''; // segurança
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            });
    
            await Promise.all(imagePromises);
            setIsLoading(false); // <- só libera depois que tudo carregar
        };
    
        getPosts();
    }, []);

    return (
        <>
            {isLoading && <LoadingScreen />}
            {!isLoading && posts.length >= 1 && (
            <>
                <header className='flex justify-between items-center p-3'>
                    <div className='flex gap-2 items-center'>
                        <GiPadlockOpen size={22} />
                        <strong className='text-lg'>Zabella_Gusttavo</strong>
                    </div>
                    <RxHamburgerMenu size={22} />
                </header>
                <div className='flex w-full pl-4 pt-2 items-center'>
                    <img 
                        src="../img/loading.png"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className='w-[70%] ml-4 p-2'>
                        Zabella e Gusttavo
                        <div className='flex justify-between'>
                            <div>
                                <h1>1</h1>
                                <h1>post</h1>
                            </div>
                            <div>
                                <h1>1</h1>
                                <h1>seguidores</h1>
                            </div>
                            <div>
                                <h1>1</h1>
                                <h1>seguindo</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-4'>
                    Bio
                </div>
                <div className='pb-16'>
                    <div className='p-2'>
                        <div className="flex w-full gap-2">
                            <button className="flex-1 border border-slate-300 text-black px-3 py-1.5 rounded-lg text-sm font-medium">
                                Editar perfil
                            </button>
                            <button className="flex-1 border border-slate-300 text-black px-3 py-1.5 rounded-lg text-sm font-medium">
                                Compartilhar perfil
                            </button>
                            <button className="w-10 border border-slate-300 text-black py-1.5 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m3-3H9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <ProfileSection />
                    <div className="grid grid-cols-3 gap-[1px] bg-white">
                    {posts.map((post, index) => (
                        <div key={index} className="relative w-full pt-[133%] bg-black overflow-hidden">
                            {console.log(post.images[0])}
                        <img
                            src={post.images[0].url}
                            alt={`post-${index}`}
                            onClick={() => navigate(`/post/${post.id}`)}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        </div>
                    ))}
                    </div>
                </div>
            </>
            )}
            <Navbar />
        </>
    )
}