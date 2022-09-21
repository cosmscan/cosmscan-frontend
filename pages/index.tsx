import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { useTheme } from 'next-themes'
import ChainStats from '../components/chainStats'
import BlockSummaryList from '../components/blockSummaryList'
import TrasnactionSummaryList from '../components/txSummaryList'


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
            <ChainStats />
            <div className="mx-auto w-10/12 lg:mt-5 sm:mt-2">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 mx-2 rounded-lg bg-gray-900">
                        <div className="py-3 px-5">
                            <h3 className="text-lg font-bold">BLOCKS</h3>
                        </div>
                        <BlockSummaryList />
                        <div className="py-3 px-5">
                            <a href="/" className="block text-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                view more
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 mx-2 rounded-lg bg-gray-900">
                        <div className="py-3 px-5">
                            <h3 className="text-lg font-bold">TRANSACTIONS</h3>
                        </div>
                        <TrasnactionSummaryList />
                        <div className="py-3 px-5">
                            <a href="/" className="block text-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                view more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
