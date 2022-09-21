import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'

const blocks = [
  {
    id: 1,
    height: '800',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 2,
    height: '799',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 3,
    height: '798',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 4,
    height: '798',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 5,
    height: '798',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 6,
    height: '798',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 7,
    height: '798',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
  {
    id: 8,
    height: '798',
    blockHash: '093B46E03E27778F9D245998C1166',
    proposer: 'Figment',
    txes: 100,
    createdAt: "7 seconds ago",
  },
]

const BlockSummaryList = () => {
  return (
    <div className="overflow-hidden rounded-md">
      <ul role="list" className="divide-y divide-gray-600">
        {blocks.map((block) => (
          <li key={block.id}>
            <a href="#" className="block hover:bg-slate-700">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-md text-blue-400">{block.height}</p>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {block.proposer}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-gray-500">
                        <span>Transactions: </span>
                        <span className="text-white pl-2">{block.txes}</span>
                    </p>
                    <p className="flex item-center text-gray-500 md:pl-4">
                        <span>Block hash:</span>
                        <span className="text-white pl-2">{block.blockHash}</span>
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-gray-500 sm:mt-0">
                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <p>{block.createdAt}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlockSummaryList;