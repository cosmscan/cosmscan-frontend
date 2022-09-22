import { BASE_URL, Block } from "./types";

type ApiListBlockProps = {
    chain_id: number;
};

const apiListBlock = ({ chain_id }: ApiListBlockProps): Promise<Block[]> => {
    return fetch(`${BASE_URL}/api/bloock/list/${chain_id}`)
        .then((res) => res.json())
};

export {
    apiListBlock,
}