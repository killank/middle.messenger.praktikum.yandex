import Block from "./Block";

const renderDOM = (query: string, block: Block) => {
    const root = document.querySelector(query);

    if (!root) return null;
    block.dispatchComponentDidMount();
    root.appendChild(block.getContent());
    return root;
};

export default renderDOM;
