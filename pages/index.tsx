import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { useTheme } from 'next-themes'


const Home: NextPage = () => {
    const {theme, setTheme} = useTheme()
        
    return (
        <Layout>
            <div className="bg-gray-800">
                <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        <span className="block">Interchain Explorer for All.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Anyone can install the block explorer on their own server.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Home
