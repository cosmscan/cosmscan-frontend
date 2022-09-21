import type { NextPage } from "next";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Layout from "../../../components/layout";

const ViewBlockPage:NextPage = () => {
    return (
        <Layout>
            <div className="mx-auto w-10/12 px-2 mt-16">
                <div className="sm:flex sm:items-center">
                    <h1 className="text-4xl font-semibold">Block Details</h1>
                </div>
                <div className="overflow-hidden bg-gray-800 shadow sm:rounded-lg mt-5">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6">Overview</h3>
                    </div>
                    <div className="px-4 py-5 sm:p-0">
                        <dl>
                            <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="font-medium text-gray-300">Full name</dt>
                                <dd className="mt-1 sm:col-span-3 sm:mt-0">Margot Foster</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="font-medium text-gray-300">Application for</dt>
                                <dd className="mt-1 sm:col-span-3 sm:mt-0">Backend Developer</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="font-medium text-gray-300">Email address</dt>
                                <dd className="mt-1 sm:col-span-3 sm:mt-0">margotfoster@example.com</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="font-medium text-gray-300">Salary expectation</dt>
                                <dd className="mt-1 sm:col-span-3 sm:mt-0">$120,000</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="font-medium text-gray-300">About</dt>
                                <dd className="mt-1 sm:col-span-3 sm:mt-0">
                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="font-medium text-gray-300">Attachments</dt>
                                <dd className="mt-1 sm:col-span-3 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ViewBlockPage;